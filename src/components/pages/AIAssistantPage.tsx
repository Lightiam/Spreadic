"use client";

import { RootLayout } from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  RefreshCw,  // Changed from Rotate to RefreshCw
  Calendar,
  Clock,
  Copy,
  ArrowRight,
  Check,
  Instagram,
  Twitter,
  Facebook,
  Linkedin
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Define the interface for the GeneratedContent type
interface GeneratedContent {
  // For Post Ideas
  title?: string;
  content?: string;  // Make content optional
  tags?: string[];
  // For Captions
  tone?: string;
  // For Hashtags
  group?: string;
  hashtags?: string[];
}

export default function AIAssistantPageContent() {
  const [activeTab, setActiveTab] = useState("post-ideas");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Mock content generation
  const generateContent = (data: Record<string, string>) => {
    setIsGenerating(true);

    // Simulate API call delay
    setTimeout(() => {
      let newContent: GeneratedContent[] = [];

      if (activeTab === "post-ideas") {
        newContent = [
          {
            title: "Industry Insight",
            content: "Breaking down the latest trends in #digitalmarketing this week. Here's what you need to know to stay ahead of the curve. 📊 #MarketingTips #IndustryInsights",
            tags: ["idea", "trends"]
          },
          {
            title: "Question Prompt",
            content: "What's the biggest social media challenge your business is facing right now? Drop it in the comments and let's solve it together! 💬 #SocialMediaHelp #BusinessTips",
            tags: ["engagement", "question"]
          },
          {
            title: "Product Highlight",
            content: "Meet the feature that's saving our customers 5+ hours every week. Auto-scheduling lets you set it and forget it, while your posts go out at peak engagement times. ⏱️ #ProductFeature #TimeSaver",
            tags: ["product", "feature"]
          },
          {
            title: "Testimonial Share",
            content: "\"We increased our engagement by 47% in just one month after implementing these strategies.\" - Jane, Digital Marketing Director at TechCorp #CustomerStory #SocialMediaSuccess",
            tags: ["social proof", "testimonial"]
          }
        ];
      } else if (activeTab === "captions") {
        newContent = [
          {
            content: "Transforming your social media strategy doesn't have to be complicated. With the right tools, anyone can create content that connects and converts. #SocialMediaTips #ContentStrategy",
            tone: "Professional"
          },
          {
            content: "Ready to level up your social game? We've got the secret sauce! 🔥 Tap the link in bio to discover how our AI-powered platform is helping brands crush their goals! #SocialMediaMagic #GrowthHacking",
            tone: "Enthusiastic"
          },
          {
            content: "Behind every successful social strategy is a team that understands your audience. Let our platform handle the heavy lifting while you focus on creating authentic connections. #AuthenticContent #SocialStrategy",
            tone: "Thoughtful"
          },
          {
            content: "Monday motivation: Your social presence is your digital storefront. Is it telling the story you want to tell? Our tools help you craft narratives that resonate. #MondayMotivation #DigitalStorytelling",
            tone: "Inspirational"
          }
        ];
      } else if (activeTab === "hashtags") {
        newContent = [
          {
            group: "General Marketing",
            hashtags: ["#DigitalMarketing", "#SocialMediaTips", "#ContentStrategy", "#MarketingTools", "#GrowthHacks"]
          },
          {
            group: "Industry Specific",
            hashtags: ["#SaaS", "#MarTech", "#SocialMediaManagement", "#ContentCreation", "#SchedulingTools"]
          },
          {
            group: "Trending",
            hashtags: ["#AIMarketing", "#SocialListening", "#InfluencerStrategy", "#ContentCalendar", "#SocialROI"]
          },
          {
            group: "Platform Specific",
            hashtags: ["#InstagramStrategy", "#TwitterTips", "#LinkedInMarketing", "#FacebookBusiness", "#SocialMediaInsights"]
          }
        ];
      }

      setGeneratedContent(newContent);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Mock credit system
  const creditsRemaining = 27;
  const totalCredits = 30;

  return (
    <RootLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">AI Content Assistant</h1>
            <p className="text-muted-foreground">Generate social media content in seconds with AI</p>
          </div>
          <div className="mt-4 md:mt-0 bg-muted/40 rounded-full py-1 px-3 flex items-center">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm">
              <span className="font-bold">{creditsRemaining}</span> / {totalCredits} credits remaining
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Select content type</p>
                    <p className="text-sm text-muted-foreground">Choose what you want to generate</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Describe your content</p>
                    <p className="text-sm text-muted-foreground">Give the AI context about your business</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Generate content</p>
                    <p className="text-sm text-muted-foreground">Get multiple options to choose from</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="font-medium">Use or refine</p>
                    <p className="text-sm text-muted-foreground">Copy, edit, or regenerate as needed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Content Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-primary">Be specific in your prompts</p>
                  <p className="text-muted-foreground">The more details you provide, the better the results.</p>
                </div>
                <div>
                  <p className="font-medium text-primary">Include your brand voice</p>
                  <p className="text-muted-foreground">Describe your tone to maintain consistent messaging.</p>
                </div>
                <div>
                  <p className="font-medium text-primary">Always review AI content</p>
                  <p className="text-muted-foreground">Edit AI suggestions to add your personal touch.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="post-ideas">Post Ideas</TabsTrigger>
                    <TabsTrigger value="captions">Captions</TabsTrigger>
                    <TabsTrigger value="hashtags">Hashtags</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <TabsContent value="post-ideas" className="mt-0">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      generateContent({
                        industry: (e.target as HTMLFormElement).industry.value,
                        objective: (e.target as HTMLFormElement).objective.value,
                        details: (e.target as HTMLFormElement).details.value,
                      });
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="text-sm font-medium mb-1 block">Industry</label>
                      <Input
                        name="industry"
                        placeholder="e.g., Marketing, SaaS, Health & Fitness"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Post Objective</label>
                      <Select name="objective" defaultValue="engagement">
                        <SelectTrigger>
                          <SelectValue placeholder="Select objective" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engagement">Increase Engagement</SelectItem>
                          <SelectItem value="awareness">Brand Awareness</SelectItem>
                          <SelectItem value="leads">Generate Leads</SelectItem>
                          <SelectItem value="product">Product Promotion</SelectItem>
                          <SelectItem value="education">Educate Audience</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Additional Details</label>
                      <Textarea
                        name="details"
                        placeholder="Describe your business, target audience, and any specific information to include"
                        rows={4}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full purple-gradient-bg border-none"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Generating Ideas...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Generate Post Ideas (1 credit)
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="captions" className="mt-0">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      generateContent({
                        platform: (e.target as HTMLFormElement).platform.value,
                        tone: (e.target as HTMLFormElement).tone.value,
                        details: (e.target as HTMLFormElement).details.value,
                      });
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="text-sm font-medium mb-1 block">Platform</label>
                      <Select name="platform" defaultValue="instagram">
                        <SelectTrigger>
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="twitter">Twitter</SelectItem>
                          <SelectItem value="facebook">Facebook</SelectItem>
                          <SelectItem value="linkedin">LinkedIn</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Tone</label>
                      <Select name="tone" defaultValue="professional">
                        <SelectTrigger>
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                          <SelectItem value="educational">Educational</SelectItem>
                          <SelectItem value="inspirational">Inspirational</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Caption Details</label>
                      <Textarea
                        name="details"
                        placeholder="Describe what you're posting about (product, event, announcement, etc.)"
                        rows={4}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full purple-gradient-bg border-none"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Generating Captions...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Generate Captions (1 credit)
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="hashtags" className="mt-0">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      generateContent({
                        topic: (e.target as HTMLFormElement).topic.value,
                        platform: (e.target as HTMLFormElement).platform.value,
                        count: (e.target as HTMLFormElement).count.value,
                      });
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="text-sm font-medium mb-1 block">Topic</label>
                      <Input
                        name="topic"
                        placeholder="e.g., Social Media Marketing, AI Tools"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Platform</label>
                      <Select name="platform" defaultValue="instagram">
                        <SelectTrigger>
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="twitter">Twitter</SelectItem>
                          <SelectItem value="facebook">Facebook</SelectItem>
                          <SelectItem value="linkedin">LinkedIn</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Number of Hashtags</label>
                      <Select name="count" defaultValue="20">
                        <SelectTrigger>
                          <SelectValue placeholder="Select count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 hashtags</SelectItem>
                          <SelectItem value="20">20 hashtags</SelectItem>
                          <SelectItem value="30">30 hashtags</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="submit"
                      className="w-full purple-gradient-bg border-none"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Generating Hashtags...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Generate Hashtags (1 credit)
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </CardContent>
            </Card>

            {/* Generated Content Results */}
            {generatedContent.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Generated Content</h2>

                {activeTab === "post-ideas" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {generatedContent.map((item, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardHeader className="bg-muted/30 py-3">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">{item.title}</CardTitle>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => copyToClipboard(item.content || "", index)}
                              className="h-8 w-8"
                            >
                              {copiedIndex === index ? (
                                <Check className="h-4 w-4 text-green-500" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <div className="flex gap-2 flex-wrap mt-1">
                            {item.tags && item.tags.map((tag: string, tagIndex: number) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent className="py-3">
                          <p className="text-sm">{item.content}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {activeTab === "captions" && (
                  <div className="space-y-4">
                    {generatedContent.map((item, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardContent className="py-4">
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <Badge className="mb-2" variant="outline">{item.tone}</Badge>
                              <p>{item.content}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => copyToClipboard(item.content || "", index)}
                              className="h-8 w-8 flex-shrink-0"
                            >
                              {copiedIndex === index ? (
                                <Check className="h-4 w-4 text-green-500" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {activeTab === "hashtags" && (
                  <div className="space-y-4">
                    {generatedContent.map((item, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-base">{item.group}</CardTitle>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => copyToClipboard(item.hashtags?.join(" ") || "", index)}
                              className="h-8 w-8"
                            >
                              {copiedIndex === index ? (
                                <Check className="h-4 w-4 text-green-500" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex gap-2 flex-wrap">
                            {item.hashtags && item.hashtags.map((tag: string, tagIndex: number) => (
                              <Badge key={tagIndex} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    <Card className="bg-muted/20 border-dashed">
                      <CardContent className="py-4 text-center">
                        <p className="text-sm text-muted-foreground">Need more hashtags? You can regenerate for more options.</p>
                        <Button variant="outline" className="mt-2" onClick={() => generateContent({})}>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Regenerate Hashtags
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}

                <div className="flex justify-end mt-4">
                  <Button variant="outline" className="text-sm" onClick={() => setGeneratedContent([])}>
                    Clear Results
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feature Callouts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">More AI-Powered Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 text-primary h-12 w-12 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Optimal Posting Times</h3>
                <p className="text-muted-foreground mb-4">
                  Our AI analyzes your audience's activity patterns to recommend the best times to post for maximum engagement.
                </p>
                <Button variant="link" className="px-0 text-primary">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 text-primary h-12 w-12 rounded-lg flex items-center justify-center">
                  <Instagram className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Platform-Specific Content</h3>
                <p className="text-muted-foreground mb-4">
                  Generate content tailored specifically for each social platform, optimized for their unique audiences and formats.
                </p>
                <Button variant="link" className="px-0 text-primary">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 text-primary h-12 w-12 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Content Calendar Generator</h3>
                <p className="text-muted-foreground mb-4">
                  Let AI build your entire content calendar with balanced content types and strategic posting schedules.
                </p>
                <Button variant="link" className="px-0 text-primary">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
