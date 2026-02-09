import Stripe from 'stripe'

// Lazy initialization to avoid build errors when env vars aren't present
let _stripe: Stripe | null = null;

export const getStripe = () => {
  if (!_stripe && process.env.STRIPE_SECRET_KEY) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-01-28.clover' as any,
      typescript: true,
    });
  }
  return _stripe;
};

// For backwards compatibility
export const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-01-28.clover' as any,
      typescript: true,
    })
  : null as any;

export const PLANS = {
  monthly: {
    priceId: process.env.STRIPE_PRICE_MONTHLY!,
    name: 'Pro Monthly',
    price: 7,
    interval: 'month' as const,
  },
  annual: {
    priceId: process.env.STRIPE_PRICE_ANNUAL!,
    name: 'Pro Annual',
    price: 49,
    interval: 'year' as const,
  },
}
