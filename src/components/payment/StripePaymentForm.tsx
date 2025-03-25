"use client";

import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { getStripe } from '@/lib/stripe/client';

interface SelectedPlan {
  id: string;
  name: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly';
}

interface StripePaymentElementsFormProps {
  selectedPlan: SelectedPlan;
  onPaymentSuccess: (subscription: { subscriptionId: string; status: string; customerId: string }) => void;
}

const StripePaymentElementsForm: React.FC<StripePaymentElementsFormProps> = ({ 
  selectedPlan, 
  onPaymentSuccess 
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }
    
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // Create payment method with card element
      const cardElement = elements.getElement(CardElement);
      
      if (!cardElement) {
        throw new Error('Card element not found');
      }
      
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
      
      if (error) {
        setErrorMessage(error.message || 'Payment method creation failed');
        setIsLoading(false);
        return;
      }
      
      // Send to server
      const response = await fetch('/api/stripe/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          planId: selectedPlan.id,
          billingPeriod: selectedPlan.billingPeriod,
        }),
      });
      
      const subscription = await response.json();
      
      // Handle subscription status
      if (subscription.status === 'active' || subscription.status === 'trialing') {
        onPaymentSuccess(subscription);
      } else {
        setErrorMessage('Subscription activation failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Payment processing failed. Please try again.');
      console.error('Payment error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 border rounded-md bg-background">
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#ef4444',
              },
            },
          }}
        />
      </div>
      
      {errorMessage && (
        <div className="text-sm text-destructive">
          {errorMessage}
        </div>
      )}
      
      <Button 
        type="submit" 
        disabled={!stripe || isLoading}
        className="w-full purple-gradient-bg border-none"
      >
        {isLoading ? 'Processing...' : 'Complete Payment'}
      </Button>
    </form>
  );
};

interface StripePaymentFormProps {
  selectedPlan: SelectedPlan;
  onPaymentSuccess: (subscription: { subscriptionId: string; status: string; customerId: string }) => void;
}

export default function StripePaymentForm({ 
  selectedPlan, 
  onPaymentSuccess 
}: StripePaymentFormProps) {
  return (
    <Elements stripe={getStripe()}>
      <StripePaymentElementsForm 
        selectedPlan={selectedPlan} 
        onPaymentSuccess={onPaymentSuccess} 
      />
    </Elements>
  );
}
