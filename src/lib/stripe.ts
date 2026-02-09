import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})

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
