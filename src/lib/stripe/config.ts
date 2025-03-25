// Stripe configuration
export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';

// Ensure client-side only access to publishable key
export const getStripePublishableKey = () => {
  if (typeof window === 'undefined') {
    return '';
  }
  return STRIPE_PUBLISHABLE_KEY;
};

// Product and price IDs from Stripe dashboard
export const STRIPE_PRODUCTS = {
  CREATOR: {
    MONTHLY: process.env.NEXT_PUBLIC_STRIPE_CREATOR_MONTHLY_PRICE_ID,
    YEARLY: process.env.NEXT_PUBLIC_STRIPE_CREATOR_YEARLY_PRICE_ID,
  },
  PROFESSIONAL: {
    MONTHLY: process.env.NEXT_PUBLIC_STRIPE_PROFESSIONAL_MONTHLY_PRICE_ID,
    YEARLY: process.env.NEXT_PUBLIC_STRIPE_PROFESSIONAL_YEARLY_PRICE_ID,
  },
  AGENCY: {
    MONTHLY: process.env.NEXT_PUBLIC_STRIPE_AGENCY_MONTHLY_PRICE_ID,
    YEARLY: process.env.NEXT_PUBLIC_STRIPE_AGENCY_YEARLY_PRICE_ID,
  },
};
