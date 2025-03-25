"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface SelectPlanStepProps {
  userData: {
    selectedPlan: string;
  };
  updateUserData: (data: Record<string, unknown>) => void;
}

export default function SelectPlanStep({ userData, updateUserData }: SelectPlanStepProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const handleSelectPlan = (planId: string) => {
    updateUserData({ selectedPlan: planId });
  };

  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Basic tools for individuals getting started",
      price: {
        monthly: 0,
        yearly: 0,
      },
      features: [
        "1 social profile per platform",
        "Schedule up to 30 posts per month",
        "Basic analytics",
        "Link in Bio page",
        "Mobile app access"
      ],
      popular: false,
    },
    {
      id: "creator",
      name: "Creator",
      description: "Perfect for content creators and small businesses",
      price: {
        monthly: 19,
        yearly: 15,
      },
      features: [
        "5 social profiles per platform",
        "Schedule up to 150 posts per profile",
        "Full analytics (up to 1 year of data)",
        "30 AI content assistant credits",
        "Customizable Link in Bio pages",
        "Basic listening features",
        "Calendar view and visual planner",
      ],
      popular: true,
    },
    {
      id: "professional",
      name: "Professional",
      description: "Advanced tools for businesses and marketing teams",
      price: {
        monthly: 49,
        yearly: 39,
      },
      features: [
        "10 social profiles per platform",
        "Unlimited scheduled posts",
        "Advanced analytics and reporting",
        "100 AI content assistant credits",
        "Multiple team members (up to 3)",
        "Full social listening suite",
        "Content approval workflows",
        "Priority support",
      ],
      popular: false,
    }
  ];

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl">Choose Your Plan</CardTitle>
        <CardDescription>
          Select the plan that works best for your needs
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Billing period toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full border p-1 bg-muted/30">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-full text-sm ${
                billingPeriod === 'monthly'
                  ? "bg-primary text-white"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 py-2 rounded-full text-sm ${
                billingPeriod === 'yearly'
                  ? "bg-primary text-white"
                  : "text-muted-foreground"
              }`}
            >
              Yearly <span className="text-xs opacity-75">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-lg overflow-hidden transition-all hover:shadow-md ${
                userData.selectedPlan === plan.id ? 'ring-2 ring-primary' : ''
              } ${plan.popular ? 'relative' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-semibold py-1 px-3 rounded-bl">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold">
                    ${billingPeriod === 'yearly' ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.price.monthly > 0 ? `/${billingPeriod === 'yearly' ? 'mo' : 'month'}` : ''}
                  </span>

                  {billingPeriod === 'yearly' && plan.price.monthly > 0 && (
                    <div className="text-sm text-muted-foreground mt-1">
                      billed annually (${plan.price.yearly * 12}/year)
                    </div>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-primary shrink-0 mr-2 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={userData.selectedPlan === plan.id ? "default" : "outline"}
                  className={`w-full ${userData.selectedPlan === plan.id ? 'purple-gradient-bg border-none' : ''}`}
                  onClick={() => handleSelectPlan(plan.id)}
                >
                  {userData.selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-muted/30 p-5 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            All plans come with a 14-day free trial. No credit card required to start.
            You can upgrade, downgrade, or cancel your subscription at any time.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
