"use client";

import { RootLayout } from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  BarChart2,
  Clock,
  BarChart,
  MessageSquare,
  Zap,
  PieChart,
  LineChart,
  Bell,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePageContent() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Simplify Your <span className="purple-gradient-text">Social Media</span> Management
            </h1>
            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
              All-in-one platform combining social media scheduling and listening tools powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="purple-gradient-bg border-none">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section: Scheduler */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-6">
                <Calendar className="mr-1 h-4 w-4" />
                Social Media Scheduler
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Plan and schedule your content for maximum impact
              </h2>
              <p className="text-muted-foreground mb-8">
                Create, schedule, and publish content across all your social media channels from one
                unified platform. Save time and boost engagement with our intuitive scheduling tools.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Clock className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>Schedule posts at optimal times for maximum engagement</span>
                </li>
                <li className="flex items-start">
                  <BarChart className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>Track performance metrics for all scheduled content</span>
                </li>
                <li className="flex items-start">
                  <Zap className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>AI-powered content suggestions to boost engagement</span>
                </li>
              </ul>
              <Button className="group">
                Learn more about Scheduler
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <div className="text-4xl font-bold purple-gradient-text">
                  Scheduler Demo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section: Social Listening */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white rounded-lg shadow-lg p-6 border">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <div className="text-4xl font-bold purple-gradient-text">
                  Listening Demo
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-6">
                <BarChart2 className="mr-1 h-4 w-4" />
                Social Listening
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Understand what your audience is saying about your brand
              </h2>
              <p className="text-muted-foreground mb-8">
                Monitor online conversations, track mentions, and analyze sentiment across social
                platforms. Get actionable insights to improve your social media strategy.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>Track brand mentions and sentiment analysis in real-time</span>
                </li>
                <li className="flex items-start">
                  <PieChart className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>Analyze audience demographics and preferences</span>
                </li>
                <li className="flex items-start">
                  <LineChart className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>Identify trends and hot topics in your industry</span>
                </li>
              </ul>
              <Button className="group">
                Learn more about Listening
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to transform your social media strategy?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Join thousands of marketers and businesses who use Spreadify AI to save time, increase engagement, and grow their social presence.
          </p>
          <Button size="lg" className="purple-gradient-bg border-none">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </RootLayout>
  );
}
