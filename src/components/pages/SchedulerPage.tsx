"use client";

import { RootLayout } from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Instagram, Twitter, Facebook, Linkedin, Calendar as CalendarIcon, Grid, List, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function SchedulerPageContent() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [viewType, setViewType] = useState<string>("calendar");

  // Mock scheduled posts data
  const scheduledPosts = [
    {
      id: 1,
      title: "Product Launch Announcement",
      content: "We're excited to announce our new product launch! Stay tuned for more details.",
      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // 2 days from now
      platforms: ["instagram", "twitter", "facebook"],
      image: true,
    },
    {
      id: 2,
      title: "Weekly Blog Update",
      content: "Check out our latest blog post about social media marketing strategies!",
      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // 5 days from now
      platforms: ["twitter", "linkedin"],
      image: false,
    },
    {
      id: 3,
      title: "Customer Success Story",
      content: "Hear how our customer increased engagement by 200% using our platform.",
      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days from now
      platforms: ["instagram", "facebook", "linkedin"],
      image: true,
    },
  ];

  // Get platform icon based on name
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram size={16} />;
      case "twitter":
        return <Twitter size={16} />;
      case "facebook":
        return <Facebook size={16} />;
      case "linkedin":
        return <Linkedin size={16} />;
      default:
        return null;
    }
  };

  // Format date to display in a readable format
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  return (
    <RootLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">Social Media Scheduler</h1>
            <p className="text-muted-foreground">Plan, create, and schedule your social content</p>
          </div>
          <Button className="mt-4 md:mt-0 purple-gradient-bg border-none">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Post
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar - Calendar View */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Select a date to view scheduled posts</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border w-full"
              />
              <div className="mt-4 space-y-2">
                <h3 className="font-medium text-sm">Upcoming Today</h3>
                {scheduledPosts
                  .filter(
                    (post) =>
                      post.date.getDate() === new Date().getDate() &&
                      post.date.getMonth() === new Date().getMonth() &&
                      post.date.getFullYear() === new Date().getFullYear()
                  )
                  .map((post) => (
                    <div key={post.id} className="p-2 rounded-md bg-muted/50 border">
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-sm truncate">{post.title}</p>
                        <div className="flex gap-1">
                          {post.platforms.map((platform) => (
                            <div key={platform} className="text-muted-foreground">
                              {getPlatformIcon(platform)}
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDate(post.date)}
                      </p>
                    </div>
                  ))}
                {scheduledPosts.filter(
                  (post) =>
                    post.date.getDate() === new Date().getDate() &&
                    post.date.getMonth() === new Date().getMonth() &&
                    post.date.getFullYear() === new Date().getFullYear()
                ).length === 0 && (
                  <p className="text-sm text-muted-foreground">No posts scheduled for today</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Main Content - Scheduled Posts */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Scheduled Posts</CardTitle>
                <CardDescription>Manage your upcoming social media content</CardDescription>
              </div>
              <Tabs defaultValue={viewType} onValueChange={setViewType} className="w-auto">
                <TabsList className="grid w-[140px] grid-cols-2">
                  <TabsTrigger value="calendar" className="flex items-center gap-1">
                    <Grid className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="list" className="flex items-center gap-1">
                    <List className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              {viewType === "calendar" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {scheduledPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                      {post.image && (
                        <div className="aspect-video w-full bg-muted flex items-center justify-center text-muted-foreground">
                          Image Preview
                        </div>
                      )}
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold truncate">{post.title}</h3>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.content}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-1">
                            {post.platforms.map((platform) => (
                              <Badge key={platform} variant="outline" className="flex items-center gap-1">
                                {getPlatformIcon(platform)}
                                <span className="capitalize text-xs">{platform}</span>
                              </Badge>
                            ))}
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center">
                            <CalendarIcon className="h-3 w-3 mr-1" />
                            {formatDate(post.date)}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              {viewType === "list" && (
                <div className="mt-4 space-y-2">
                  {scheduledPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-3 rounded-md border hover:bg-muted/50 transition-colors">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{post.title}</h3>
                        <p className="text-sm text-muted-foreground truncate">{post.content}</p>
                      </div>
                      <div className="flex items-center gap-4 ml-4">
                        <div className="flex gap-1">
                          {post.platforms.map((platform) => (
                            <div key={platform} className="text-muted-foreground">
                              {getPlatformIcon(platform)}
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-muted-foreground whitespace-nowrap">
                          {formatDate(post.date)}
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </RootLayout>
  );
}
