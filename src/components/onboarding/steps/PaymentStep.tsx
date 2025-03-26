"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard } from "lucide-react";
import StripePaymentForm from "@/components/payment/StripePaymentForm";

interface PaymentStepProps {
  userData: {
    selectedPlan: string;
    paymentMethod: string;
    agreedToTerms: boolean;
  };
  updateUserData: (data: Record<string, unknown>) => void;
}

export default function PaymentStep({ userData, updateUserData }: PaymentStepProps) {
  const [paymentProcessed, setPaymentProcessed] = useState(false);
  
  const handlePaymentSuccess = (subscriptionData: { subscriptionId: string; status: string; customerId: string }) => {
    // Store subscription info in user data
    updateUserData({ 
      subscriptionId: subscriptionData.subscriptionId,
      customerId: subscriptionData.customerId,
      paymentProcessed: true,
    });
    setPaymentProcessed(true);
  };

  const handlePaymentMethodChange = (value: string) => {
    updateUserData({ paymentMethod: value });
  };

  const handleTermsChange = (checked: boolean) => {
    updateUserData({ agreedToTerms: checked });
  };

  const selectedPlanDetails = {
    id: userData.selectedPlan,
    name: userData.selectedPlan === "free"
      ? "Free"
      : userData.selectedPlan === "creator"
        ? "Creator"
        : "Professional",
    price: userData.selectedPlan === "free"
      ? 0
      : userData.selectedPlan === "creator"
        ? 19
        : 49,
    billingPeriod: 'monthly' as const, // Default to monthly, could be stored in userData
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl">Payment Information</CardTitle>
        <CardDescription>
          {userData.selectedPlan === "free"
            ? "No payment is required for the Free plan"
            : "Set up your payment method to complete your subscription"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-w-2xl mx-auto">
          {userData.selectedPlan === "free" ? (
            <div className="bg-muted/20 p-6 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">Free Plan Selected</h3>
              <p className="text-muted-foreground">
                You've selected the Free plan which doesn't require any payment information.
                You can upgrade to a paid plan at any time from your account settings.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Order Summary */}
              <div className="bg-muted/20 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>{selectedPlanDetails.name} Plan</span>
                    <span>${selectedPlanDetails.price}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>14-day free trial</span>
                    <span>$0.00</span>
                  </div>
                  <div className="border-t pt-3 mt-3 font-medium flex justify-between">
                    <span>Total due today</span>
                    <span>$0.00</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    You won't be charged until after your free trial ends.
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div>
                <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                <RadioGroup
                  value={userData.paymentMethod}
                  onValueChange={handlePaymentMethodChange}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 border p-4 rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center cursor-pointer">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Credit or Debit Card
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Stripe Payment Form */}
              {userData.paymentMethod === 'card' && (
                <div className="space-y-3">
                  <h3 className="text-lg font-medium mb-4">Card Details</h3>
                  <StripePaymentForm 
                    selectedPlan={selectedPlanDetails}
                    onPaymentSuccess={handlePaymentSuccess}
                  />
                </div>
              )}

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={userData.agreedToTerms}
                    onCheckedChange={handleTermsChange}
                    className="mt-1"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the Terms and Conditions
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      By checking this box, you agree to our{" "}
                      <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and{" "}
                      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
