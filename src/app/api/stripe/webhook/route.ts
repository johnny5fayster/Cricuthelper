import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

// Use service role key for webhooks (server-side only)
// Lazy initialization to avoid build errors when env vars aren't present
const getSupabaseAdmin = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Missing Supabase environment variables');
  }
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
};

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.supabase_user_id;
        const plan = session.metadata?.plan;

        if (userId) {
          // Get subscription details
          const subscription = await stripe.subscriptions.retrieve(session.subscription as string) as Stripe.Subscription;
          
          await getSupabaseAdmin()
            .from('profiles')
            .update({
              subscription_status: subscription.status === 'trialing' ? 'trial' : 'active',
              subscription_plan: plan,
              stripe_subscription_id: subscription.id,
              trial_ends_at: subscription.trial_end 
                ? new Date(subscription.trial_end * 1000).toISOString() 
                : null,
              subscription_ends_at: new Date((subscription as any).current_period_end * 1000).toISOString(),
            })
            .eq('id', userId);
        }
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        
        // Find user by Stripe customer ID
        const { data: profile } = await getSupabaseAdmin()
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single();

        if (profile) {
          let status: string;
          if (subscription.status === 'trialing') {
            status = 'trial';
          } else if (subscription.status === 'active') {
            status = 'active';
          } else if (subscription.status === 'canceled' || subscription.status === 'unpaid') {
            status = 'cancelled';
          } else {
            status = 'free';
          }

          await getSupabaseAdmin()
            .from('profiles')
            .update({
              subscription_status: status,
              trial_ends_at: subscription.trial_end 
                ? new Date(subscription.trial_end * 1000).toISOString() 
                : null,
              subscription_ends_at: new Date((subscription as any).current_period_end * 1000).toISOString(),
            })
            .eq('id', profile.id);
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        const { data: profile } = await getSupabaseAdmin()
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single();

        if (profile) {
          await getSupabaseAdmin()
            .from('profiles')
            .update({
              subscription_status: 'cancelled',
              subscription_plan: null,
            })
            .eq('id', profile.id);
        }
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;

        const { data: profile } = await getSupabaseAdmin()
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single();

        if (profile) {
          await getSupabaseAdmin()
            .from('profiles')
            .update({
              subscription_status: 'expired',
            })
            .eq('id', profile.id);
        }
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook processing error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
