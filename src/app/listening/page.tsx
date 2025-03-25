"use client";

import ListeningPageContent from "@/components/pages/ListeningPage";
import StaticFallback from "@/components/StaticFallback";

export default function ListeningPage() {
  return (
    <StaticFallback pageName="Listening">
      <ListeningPageContent />
    </StaticFallback>
  );
}
