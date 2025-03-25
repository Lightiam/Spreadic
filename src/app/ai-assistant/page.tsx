"use client";

import AIAssistantPageContent from "@/components/pages/AIAssistantPage";
import StaticFallback from "@/components/StaticFallback";

export default function AIAssistantPage() {
  return (
    <StaticFallback pageName="AI Assistant">
      <AIAssistantPageContent />
    </StaticFallback>
  );
}
