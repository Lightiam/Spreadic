import { loadStripe, Stripe } from '@stripe/stripe-js';
import { getStripePublishableKey } from './config';

let stripePromise: Promise<Stripe | null> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(getStripePublishableKey());
  }
  return stripePromise;
};
