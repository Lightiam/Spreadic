"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { STRIPE_PRODUCTS } from '@/lib/stripe/config';
import { getStripe } from '@/lib/stripe/client';

interface StripeCheckoutProps {
  planId: 'free' | 'creator' | 'professional' | 'agency';
  billingPeriod: 'monthly' | 'yearly';
  className?: string;
}

export default function StripeCheckout({ planId, billingPeriod, className = '' }: StripeCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  // Free plan doesn't need checkout
  if (planId === 'free') {
    return (
      <Button 
        className={`w-full ${className}`}
        variant="outline"
        onClick={() => router.push('/dashboard')}
      >
        Get Started
      </Button>
    );
  }
  
  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      // Map plan to Stripe product IDs
      let priceId;
      
      if (planId === 'creator') {
        priceId = billingPeriod === 'yearly' 
          ? STRIPE_PRODUCTS.CREATOR.YEARLY 
          : STRIPE_PRODUCTS.CREATOR.MONTHLY;
      } else if (planId === 'professional') {
        priceId = billingPeriod === 'yearly' 
          ? STRIPE_PRODUCTS.PROFESSIONAL.YEARLY 
          : STRIPE_PRODUCTS.PROFESSIONAL.MONTHLY;
      } else if (planId === 'agency') {
        priceId = billingPeriod === 'yearly' 
          ? STRIPE_PRODUCTS.AGENCY.YEARLY 
          : STRIPE_PRODUCTS.AGENCY.MONTHLY;
      }
      
      if (!priceId) {
        throw new Error("Invalid plan or price ID not configured");
      }
      
      // Create Stripe checkout session
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          planId,
          billingPeriod,
        }),
      });
      
      const session = await response.json();
      
      // Redirect to Stripe checkout
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      
      if (error) {
        console.error('Stripe checkout error:', error);
      }
    } catch (error) {
      console.error('Failed to create checkout session:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Button 
      className={`w-full ${className}`}
      onClick={handleCheckout}
      disabled={isLoading}
      variant={planId === 'creator' ? 'default' : 'outline'}
    >
      {isLoading ? 'Loading...' : planId === 'agency' ? 'Contact Sales' : 'Start Free Trial'}
    </Button>
  );
}
