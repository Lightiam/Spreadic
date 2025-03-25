"use client";

import { RootLayout } from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Smile,
  Frown,
  Meh,
  BarChart2,
  TrendingUp,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
  RefreshCw,
  Filter
} from "lucide-react";
import { useState } from "react";

export default function ListeningPageContent() {
  const [activeTab, setActiveTab] = useState("mentions");

  // Mock data for sentiment analysis
  const sentimentData = {
    positive: 68,
    negative: 15,
    neutral: 17,
  };

  // Mock data for mentions
  const mentionsData = [
    {
      id: 1,
      platform: "twitter",
      user: "JaneDoe",
      content: "I'm loving the new features from @SpreadifyAI - it's made my social media scheduling so much easier!",
      date: "2h ago",
      sentiment: "positive",
    },
    {
      id: 2,
      platform: "instagram",
      user: "marketing_guru",
      content: "The analytics on @SpreadifyAI are really powerful. Seeing some great insights!",
      date: "5h ago",
      sentiment: "positive",
    },
    {
      id: 3,
      platform: "facebook",
      user: "TechReviewer",
      content: "Been trying out @SpreadifyAI but having some issues with the content suggestions feature.",
      date: "1d ago",
      sentiment: "negative",
    },
    {
      id: 4,
      platform: "twitter",
      user: "social_media_expert",
      content: "Just started using @SpreadifyAI. Seems pretty standard so far compared to other tools.",
      date: "2d ago",
      sentiment: "neutral",
    },
    {
      id: 5,
      platform: "linkedin",
      user: "DigitalMarketer",
      content: "Our agency has switched to @SpreadifyAI and we've seen a 30% improvement in engagement!",
      date: "3d ago",
      sentiment: "positive",
    },
  ];

  // Mock data for trends
  const trendsData = [
    {
      id: 1,
      keyword: "digital marketing",
      volume: 15420,
      change: 12.5,
      sentiment: "positive",
    },
    {
      id: 2,
      keyword: "content creation",
      volume: 9876,
      change: 8.3,
      sentiment: "positive",
    },
    {
      id: 3,
      keyword: "social media strategy",
      volume: 7654,
      change: 5.2,
      sentiment: "positive",
    },
    {
      id: 4,
      keyword: "influencer marketing",
      volume: 5432,
      change: -2.1,
      sentiment: "neutral",
    },
    {
      id: 5,
      keyword: "algorithm changes",
      volume: 3210,
      change: 15.7,
      sentiment: "negative",
    },
  ];

  // Get platform icon
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

  // Get sentiment icon
  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <Smile className="text-green-500" size={18} />;
      case "negative":
        return <Frown className="text-red-500" size={18} />;
      case "neutral":
        return <Meh className="text-amber-500" size={18} />;
      default:
        return null;
    }
  };

  return (
    <RootLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">Social Listening</h1>
            <p className="text-muted-foreground">Monitor mentions, analyze sentiment, and track trends</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Data
            </Button>
            <Button className="purple-gradient-bg border-none">
              Create Report
            </Button>
          </div>
        </div>

        {/* Search and filters */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search mentions, keywords, or hashtags..."
                className="pl-9"
              />
            </div>
            <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Mentions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">823</div>
                <div className="flex items-center text-green-500 text-sm font-medium">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  12%
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">vs previous 30 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-1.5"></div>
                    <span className="text-sm">{sentimentData.positive}%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-amber-500 mr-1.5"></div>
                    <span className="text-sm">{sentimentData.neutral}%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-1.5"></div>
                    <span className="text-sm">{sentimentData.negative}%</span>
                  </div>
                </div>
                <div className="flex items-center text-green-500 text-sm font-medium">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  5%
                </div>
              </div>
              <div className="flex w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${sentimentData.positive}%` }}
                ></div>
                <div
                  className="h-full bg-amber-500"
                  style={{ width: `${sentimentData.neutral}%` }}
                ></div>
                <div
                  className="h-full bg-red-500"
                  style={{ width: `${sentimentData.negative}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Positive sentiment increasing</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Top Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    <Twitter className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Twitter</div>
                    <div className="text-sm text-muted-foreground">42% of mentions</div>
                  </div>
                </div>
                <div className="flex items-center text-green-500 text-sm font-medium">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  8%
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main content tabs */}
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="mentions" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Mentions
            </TabsTrigger>
            <TabsTrigger value="trends" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Trends
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart2 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Mentions Tab */}
          <TabsContent value="mentions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Mentions</CardTitle>
                <CardDescription>
                  Mentions of your brand across social platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mentionsData.map((mention) => (
                    <div
                      key={mention.id}
                      className="p-4 border rounded-lg transition-colors hover:bg-muted/50"
                    >
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                            {getPlatformIcon(mention.platform)}
                          </div>
                          <div>
                            <div className="font-medium">{mention.user}</div>
                            <div className="text-xs text-muted-foreground">
                              {mention.date} • {mention.platform}
                            </div>
                          </div>
                        </div>
                        <div>{getSentimentIcon(mention.sentiment)}</div>
                      </div>
                      <p className="text-sm">{mention.content}</p>
                      <div className="mt-3 flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          Reply
                        </Button>
                        <Button variant="outline" size="sm">
                          View Original
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trends Tab */}
          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Trending Keywords</CardTitle>
                <CardDescription>
                  Popular keywords and hashtags in your industry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trendsData.map((trend) => (
                    <div
                      key={trend.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium">#{trend.keyword}</div>
                          <div className="text-xs text-muted-foreground">
                            {trend.volume.toLocaleString()} mentions
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div>{getSentimentIcon(trend.sentiment)}</div>
                        <div
                          className={`flex items-center ${
                            trend.change > 0
                              ? "text-green-500"
                              : trend.change < 0
                              ? "text-red-500"
                              : "text-amber-500"
                          }`}
                        >
                          {trend.change > 0 ? (
                            <ArrowUpRight className="mr-1 h-4 w-4" />
                          ) : (
                            <ArrowUpRight className="mr-1 h-4 w-4 rotate-180" />
                          )}
                          {Math.abs(trend.change)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sentiment Analytics</CardTitle>
                <CardDescription>
                  Sentiment analysis over time and across platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-muted/30 rounded-md">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">
                      Interactive charts and analytics will be displayed here
                    </p>
                    <Button>Generate Report</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </RootLayout>
  );
}
