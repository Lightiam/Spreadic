"use client";

import OnboardingFlow from "@/components/onboarding/OnboardingFlow";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import StaticFallback from "@/components/StaticFallback";

export default function GetStartedPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is already onboarded (has data in localStorage)
    const userData = localStorage.getItem('spreadifyUser');
    if (userData) {
      // User already completed onboarding, redirect to dashboard
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <StaticFallback pageName="Get Started">
      <OnboardingFlow />
    </StaticFallback>
  );
}
