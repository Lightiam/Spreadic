"use client";

import SchedulerPageContent from "@/components/pages/SchedulerPage";
import StaticFallback from "@/components/StaticFallback";

export default function SchedulerPage() {
  return (
    <StaticFallback pageName="Scheduler">
      <SchedulerPageContent />
    </StaticFallback>
  );
}
