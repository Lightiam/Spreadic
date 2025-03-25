"use client";

import { RootLayout } from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  BarChart2,
  Zap,
  Users,
  Award,
  Clock,
  Globe,
  CheckCircle
} from "lucide-react";

export default function AboutPageContent() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former marketing director with 15+ years of experience in digital strategy. Sarah founded Spreadify AI to empower businesses of all sizes with professional social media tools.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "AI researcher and engineer with background in machine learning. Michael leads our engineering team and is passionate about using AI to simplify complex marketing workflows.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Priya Patel",
      role: "Chief Product Officer",
      bio: "Product visionary with experience at leading social media platforms. Priya ensures that Spreadify AI's features are intuitive, powerful, and solve real customer problems.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "James Wilson",
      role: "VP of Marketing",
      bio: "Marketing strategist who practices what he preaches. James has grown multiple brands through social media and brings that expertise to the Spreadify AI team and customers.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Spreadify AI was founded with a mission to democratize social media management with powerful AI tools."
    },
    {
      year: "2019",
      title: "First Product Launch",
      description: "Released our initial scheduler product, helping small businesses plan and automate their social media content."
    },
    {
      year: "2020",
      title: "AI Integration",
      description: "Introduced our first AI-powered features, including content suggestions and optimal posting time recommendations."
    },
    {
      year: "2021",
      title: "Social Listening Launch",
      description: "Added comprehensive social listening tools, giving businesses insights into conversations about their brand."
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to support businesses in over 50 countries and added multi-language support."
    },
    {
      year: "2023",
      title: "Enterprise Solutions",
      description: "Launched enterprise-grade tools for agencies and large businesses managing multiple clients and brands."
    },
  ];

  const values = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Customer-Centric",
      description: "Everything we build starts with our customers' needs. We listen, learn, and iterate based on feedback."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "We're constantly exploring new technologies and approaches to provide more value to our users."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do, from code quality to customer support."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Inclusivity",
      description: "We believe in creating tools that work for businesses of all sizes, industries, and backgrounds."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Reliability",
      description: "Our customers depend on our platform to run their social media presence, and we take that responsibility seriously."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Efficiency",
      description: "We're obsessed with saving our customers time while helping them achieve better results."
    }
  ];

  return (
    <RootLayout>
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to <span className="purple-gradient-text font-semibold">empower businesses</span> with AI-driven tools that make social media management simple, effective, and insightful.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <p className="text-4xl font-bold mb-2 purple-gradient-text">500k+</p>
            <p className="text-lg text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <p className="text-4xl font-bold mb-2 purple-gradient-text">50M+</p>
            <p className="text-lg text-muted-foreground">Posts Scheduled</p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <p className="text-4xl font-bold mb-2 purple-gradient-text">100+</p>
            <p className="text-lg text-muted-foreground">Countries</p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <p className="text-4xl font-bold mb-2 purple-gradient-text">4.8/5</p>
            <p className="text-lg text-muted-foreground">User Rating</p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg">
            <p>
              Spreadify AI was born from a simple observation: social media management was too complex, time-consuming, and disconnected from real business outcomes. Our founders, who had experienced these challenges firsthand, set out to build a solution that would make powerful social media tools accessible to businesses of all sizes.
            </p>
            <p>
              We started with a simple scheduling tool in 2018, but our vision was always bigger. We wanted to create an intelligent platform that not only helped businesses publish content but also provided insights and optimization suggestions to improve their social media performance.
            </p>
            <p>
              As AI technology advanced, so did our platform. We integrated cutting-edge natural language processing and machine learning algorithms to analyze social media trends, predict optimal posting times, and even generate content suggestions. Our social listening tools added another dimension, allowing businesses to understand what people were saying about them online and engage in meaningful conversations.
            </p>
            <p>
              Today, Spreadify AI is used by over 500,000 users worldwide, from solo entrepreneurs to global enterprises. While we've grown significantly, our mission remains the same: to make social media management simpler, more effective, and more insightful for everyone.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'ml-auto pl-8'}`}>
                    <div className="mb-1 text-sm text-muted-foreground">{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="bg-muted/30 p-12 rounded-lg text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about social media, AI, and helping businesses grow. Check out our current openings.
          </p>
          <Button className="purple-gradient-bg border-none">
            View Open Positions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </RootLayout>
  );
}
