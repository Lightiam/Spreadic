"use client";

import AboutPageContent from "@/components/pages/AboutPage";
import StaticFallback from "@/components/StaticFallback";

export default function AboutPage() {
  return (
    <StaticFallback pageName="About">
      <AboutPageContent />
    </StaticFallback>
  );
}
