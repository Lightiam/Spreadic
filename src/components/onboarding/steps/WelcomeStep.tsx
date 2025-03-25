"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface WelcomeStepProps {
  onNext: () => void;
}

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-3xl">Welcome to Spreadify AI</CardTitle>
        <CardDescription className="text-lg mt-2">
          Let's get you set up in just a few steps
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What you'll be able to do:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span>Schedule and automate content across platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span>Monitor and analyze social media mentions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span>Generate AI-powered content suggestions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                  <span>Track performance analytics across channels</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">In this setup:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">
                    1
                  </div>
                  <span>Connect your social media accounts</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">
                    2
                  </div>
                  <span>Tell us about yourself and your goals</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">
                    3
                  </div>
                  <span>Choose the plan that works best for you</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">
                    4
                  </div>
                  <span>Set up your payment information</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 p-5 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground">
                You can skip some steps now and complete them later from your account settings.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
