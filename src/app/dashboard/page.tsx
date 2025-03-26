"use client";

import { RootLayout } from "@/components/layout/RootLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Calendar,
  ArrowUpRight,
  Users,
  MessageSquare,
  Clock,
  PlusCircle,
  BarChart2
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import StaticFallback from "@/components/StaticFallback";

export default function DashboardPage() {
  const [userData, setUserData] = useState<Record<string, string | number | boolean | Record<string, boolean>> | null>(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedData = localStorage.getItem('spreadifyUser');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <StaticFallback pageName="Dashboard">
      <RootLayout>
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">
                {userData && userData.firstName ? `Welcome, ${userData.firstName}` : 'Welcome to your Dashboard'}
              </h1>
              <p className="text-muted-foreground">
                Here's an overview of your social media performance
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="purple-gradient-bg border-none">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New Post
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Engagement</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>15% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Posts</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-muted-foreground">Next post in 3 hours</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Recent Mentions</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>7 new today</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Audience Growth</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+89</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  <span>12% from last week</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Posts */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Upcoming Posts</CardTitle>
                <CardDescription>
                  Your scheduled content for the next few days
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[1, 2, 3].map((post) => (
                    <div key={post} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Product Announcement</p>
                        <div className="text-xs text-muted-foreground flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          Today, 2:30 PM
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                          T
                        </div>
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs">
                          I
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  View All Scheduled Posts
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Get started with these common tasks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  href="/scheduler"
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-primary" />
                    <span>Schedule Content</span>
                  </div>
                </Link>
                <Link
                  href="/listening"
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center">
                    <BarChart2 className="h-5 w-5 mr-3 text-primary" />
                    <span>Monitor Mentions</span>
                  </div>
                </Link>
                <Link
                  href="/ai-assistant"
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="h-5 w-5 mr-3 flex items-center justify-center text-primary">
                      <span className="text-lg font-bold">AI</span>
                    </span>
                    <span>Generate Content</span>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </RootLayout>
    </StaticFallback>
  );
}
