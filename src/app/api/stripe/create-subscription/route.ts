import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-02-24.acacia',
});

export async function POST(request: Request) {
  try {
    const { paymentMethodId, planId, billingPeriod } = await request.json();
    
    // Map plan to Stripe price ID (same mapping as client-side)
    type PlanId = 'creator' | 'professional' | 'agency';
    type BillingPeriod = 'monthly' | 'yearly';
    
    const STRIPE_PRODUCTS = {
      creator: {
        monthly: process.env.STRIPE_CREATOR_MONTHLY_PRICE_ID,
        yearly: process.env.STRIPE_CREATOR_YEARLY_PRICE_ID,
      },
      professional: {
        monthly: process.env.STRIPE_PROFESSIONAL_MONTHLY_PRICE_ID,
        yearly: process.env.STRIPE_PROFESSIONAL_YEARLY_PRICE_ID,
      },
      agency: {
        monthly: process.env.STRIPE_AGENCY_MONTHLY_PRICE_ID,
        yearly: process.env.STRIPE_AGENCY_YEARLY_PRICE_ID,
      },
    };
    
    const priceId = STRIPE_PRODUCTS[planId as PlanId]?.[billingPeriod as BillingPeriod];
    
    if (!priceId) {
      return NextResponse.json(
        { error: 'Invalid plan or price ID not configured' },
        { status: 400 }
      );
    }
    
    // In a real app, you would create or retrieve the customer
    // For now, create a new customer for demo purposes
    const customer = await stripe.customers.create({
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });
    
    // Create subscription with trial period
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      trial_period_days: 14, // 14-day free trial
      expand: ['latest_invoice.payment_intent'],
    });
    
    return NextResponse.json({
      subscriptionId: subscription.id,
      status: subscription.status,
      customerId: customer.id,
    });
  } catch (error) {
    console.error('Stripe subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to create subscription' },
      { status: 500 }
    );
  }
}
