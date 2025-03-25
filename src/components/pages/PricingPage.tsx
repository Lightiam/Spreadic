"use client";

import { RootLayout } from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";
import StripeCheckout from "@/components/payment/StripeCheckout";

export default function PricingPageContent() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Free",
      description: "Basic tools for individuals getting started with social media",
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
      buttonText: "Get Started",
      highlighted: false,
    },
    {
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
      buttonText: "Start Free Trial",
      highlighted: true,
    },
    {
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
      buttonText: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Agency",
      description: "Complete solution for agencies managing multiple clients",
      price: {
        monthly: 99,
        yearly: 79,
      },
      features: [
        "Unlimited social profiles",
        "Unlimited scheduled posts",
        "White-label reports",
        "Unlimited AI content assistant credits",
        "Multiple team members (up to 10)",
        "Advanced social listening",
        "Client management tools",
        "Dedicated account manager",
        "API access",
      ],
      buttonText: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <RootLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your social media strategy. All plans include a 14-day free trial.
          </p>

          <div className="mt-8 inline-flex items-center rounded-full border p-1 bg-muted/30">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full text-sm ${
                !isYearly
                  ? "bg-primary text-white"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full text-sm ${
                isYearly
                  ? "bg-primary text-white"
                  : "text-muted-foreground"
              }`}
            >
              Yearly <span className="text-xs opacity-75">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${
                plan.highlighted
                  ? "border-primary shadow-lg relative overflow-hidden"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.price.monthly > 0 ? "/month" : ""}
                  </span>
                  {isYearly && plan.price.monthly > 0 && (
                    <div className="text-sm text-muted-foreground mt-1">
                      Billed annually (${plan.price.yearly * 12}/year)
                    </div>
                  )}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <StripeCheckout
                  planId={plan.name.toLowerCase() as 'free' | 'creator' | 'professional' | 'agency'}
                  billingPeriod={isYearly ? 'yearly' : 'monthly'}
                  className={
                    plan.highlighted
                      ? "purple-gradient-bg border-none"
                      : plan.name === "Free"
                      ? "bg-muted hover:bg-muted/80"
                      : ""
                  }
                />
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted/30 p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Enterprise Solutions</h2>
              <p className="text-muted-foreground mt-2">
                Need a custom solution for your organization? Our enterprise plan includes dedicated support, custom integrations, and advanced security features.
              </p>
            </div>
            <Button className="purple-gradient-bg border-none">Contact Our Sales Team</Button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Can I switch plans later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your plan will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and for annual enterprise plans, we can also accommodate bank transfers.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Is there a free trial?</h3>
              <p className="text-muted-foreground">
                Yes, all paid plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">What are AI content assistant credits?</h3>
              <p className="text-muted-foreground">
                Credits let you generate AI-powered social media content, captions, and ideas. Each credit can be used to generate one piece of content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
