"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  Calendar,
  BarChart2,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Building2,
  CreditCard
} from "lucide-react";
import { RootLayout } from "@/components/layout/RootLayout";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

// Step components
import WelcomeStep from "./steps/WelcomeStep";
import ConnectAccountsStep from "./steps/ConnectAccountsStep";
import PersonalInfoStep from "./steps/PersonalInfoStep";
import SelectPlanStep from "./steps/SelectPlanStep";
import PaymentStep from "./steps/PaymentStep";
import SuccessStep from "./steps/SuccessStep";

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxCompletedStep, setMaxCompletedStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    selectedPlan: "creator", // Default plan
    paymentMethod: "card",
    agreedToTerms: false,
    connectedAccounts: {
      instagram: false,
      twitter: false,
      facebook: false,
      linkedin: false
    }
  });

  const totalSteps = 6;
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    // Calculate progress percentage
    setProgress((currentStep / totalSteps) * 100);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      setMaxCompletedStep(prev => Math.max(prev, currentStep));
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleComplete = () => {
    // Save user data to local storage (in a real app, you'd send this to a server)
    localStorage.setItem('spreadifyUser', JSON.stringify(userData));

    toast({
      title: "Onboarding Complete!",
      description: "Welcome to Spreadify AI. You're all set up and ready to go.",
    });

    // Redirect to dashboard
    router.push('/dashboard');
  };

  const updateUserData = (data: Partial<typeof userData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  // Determine if the next button should be disabled
  const isNextDisabled = () => {
    switch (currentStep) {
      case 3: // Personal Info Step
        return !userData.firstName || !userData.email;
      case 5: // Payment Step
        return !userData.agreedToTerms;
      default:
        return false;
    }
  };

  // Render current step content
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeStep onNext={handleNext} />;
      case 2:
        return (
          <ConnectAccountsStep
            userData={userData}
            updateUserData={updateUserData}
          />
        );
      case 3:
        return (
          <PersonalInfoStep
            userData={userData}
            updateUserData={updateUserData}
          />
        );
      case 4:
        return (
          <SelectPlanStep
            userData={userData}
            updateUserData={updateUserData}
          />
        );
      case 5:
        return (
          <PaymentStep
            userData={userData}
            updateUserData={updateUserData}
          />
        );
      case 6:
        return <SuccessStep onComplete={handleComplete} />;
      default:
        return null;
    }
  };

  return (
    <RootLayout hideNavigation={true}>
      <div className="container max-w-6xl mx-auto py-12 px-4">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold">
              Get Started with Spreadify AI
            </h2>
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step content */}
        <div className="mb-8">
          {renderStep()}
        </div>

        {/* Navigation buttons */}
        {currentStep < 6 && (
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={currentStep === 1 ? 'invisible' : ''}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>

            <div className="flex gap-4">
              {(currentStep === 2 || currentStep === 4) && (
                <Button variant="ghost" onClick={handleSkip}>
                  Skip for now
                </Button>
              )}

              <Button
                onClick={handleNext}
                disabled={isNextDisabled()}
                className="purple-gradient-bg border-none"
              >
                {currentStep === 5 ? 'Complete Setup' : 'Continue'} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </RootLayout>
  );
}
