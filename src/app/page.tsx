"use client";

import HomePageContent from "@/components/pages/HomePage";
import StaticFallback from "@/components/StaticFallback";

export default function Home() {
  return (
    <StaticFallback pageName="Home">
      <HomePageContent />
    </StaticFallback>
  );
}
