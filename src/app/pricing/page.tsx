"use client";

import PricingPageContent from "@/components/pages/PricingPage";
import StaticFallback from "@/components/StaticFallback";

export default function PricingPage() {
  return (
    <StaticFallback pageName="Pricing">
      <PricingPageContent />
    </StaticFallback>
  );
}
