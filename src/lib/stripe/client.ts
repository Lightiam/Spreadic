import { loadStripe } from '@stripe/stripe-js';
import { getStripePublishableKey } from './config';

let stripePromise: Promise<any> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(getStripePublishableKey());
  }
  return stripePromise;
};
