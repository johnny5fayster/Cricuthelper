"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';

interface SubscriptionStatus {
  status: 'free' | 'trial' | 'active' | 'cancelled' | 'expired';
  plan?: 'monthly' | 'annual';
  trialEndsAt?: Date;
  subscriptionEndsAt?: Date;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  subscription: SubscriptionStatus;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  isPro: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [subscription, setSubscription] = useState<SubscriptionStatus>({ status: 'free' });
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchSubscription(session.user.id);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription: authSubscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) {
          fetchSubscription(session.user.id);
        } else {
          setSubscription({ status: 'free' });
        }
      }
    );

    return () => authSubscription.unsubscribe();
  }, []);

  const fetchSubscription = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('subscription_status, subscription_plan, trial_ends_at, subscription_ends_at')
        .eq('id', userId)
        .single();

      if (error) throw error;

      if (data) {
        setSubscription({
          status: data.subscription_status || 'free',
          plan: data.subscription_plan,
          trialEndsAt: data.trial_ends_at ? new Date(data.trial_ends_at) : undefined,
          subscriptionEndsAt: data.subscription_ends_at ? new Date(data.subscription_ends_at) : undefined,
        });
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
      setSubscription({ status: 'free' });
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error as Error | null };
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      }
    });
    return { error: error as Error | null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const isPro = subscription.status === 'active' || subscription.status === 'trial';

  return (
    <AuthContext.Provider value={{
      user,
      session,
      subscription,
      loading,
      signIn,
      signUp,
      signOut,
      isPro,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
