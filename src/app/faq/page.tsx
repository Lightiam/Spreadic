"use client";

import FAQPageContent from "@/components/pages/FAQPage";
import StaticFallback from "@/components/StaticFallback";

export default function FAQPage() {
  return (
    <StaticFallback pageName="FAQ">
      <FAQPageContent />
    </StaticFallback>
  );
}
