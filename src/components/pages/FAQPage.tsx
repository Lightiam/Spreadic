"use client";

import { RootLayout } from "@/components/layout/RootLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function FAQPageContent() {
  const [activeTab, setActiveTab] = useState("general");

  const faqCategories = [
    {
      id: "general",
      label: "General",
      questions: [
        {
          q: "What is Spreadify AI?",
          a: "Spreadify AI is an all-in-one social media management platform that combines scheduling and listening tools powered by AI. Our platform helps businesses save time, increase engagement, and grow their social presence with powerful tools for content planning, analytics, and audience insights."
        },
        {
          q: "Which social media platforms do you support?",
          a: "Spreadify AI supports all major social networks including Instagram, Twitter, Facebook, LinkedIn, Pinterest, and TikTok. We regularly add support for new platforms based on user demand and platform availability."
        },
        {
          q: "How do I get started with Spreadify AI?",
          a: "Getting started is simple! Sign up for a free account, connect your social media profiles, and you're ready to start scheduling posts and monitoring your social media presence. Check out our comprehensive documentation for detailed guides and tutorials."
        },
        {
          q: "Is there a mobile app available?",
          a: "Yes, Spreadify AI offers mobile apps for both iOS and Android devices. The mobile app allows you to schedule posts, monitor your social media activity, and receive notifications on the go."
        },
        {
          q: "Is my data secure with Spreadify AI?",
          a: "Absolutely. We take data security very seriously. Spreadify AI uses industry-standard encryption protocols to protect your data, and we never sell your information to third parties. We are also compliant with GDPR and other privacy regulations."
        }
      ]
    },
    {
      id: "scheduling",
      label: "Scheduling",
      questions: [
        {
          q: "How far in advance can I schedule posts?",
          a: "You can schedule posts as far in advance as you'd like. There's no limit to how far ahead you can plan your content calendar. Many of our users plan content weeks or months in advance."
        },
        {
          q: "Can I schedule the same post to multiple platforms?",
          a: "Yes! Our cross-platform scheduling feature allows you to schedule the same post to multiple social networks simultaneously. You can also customize the content for each platform to ensure it's optimized for that specific network."
        },
        {
          q: "What happens if a scheduled post fails to publish?",
          a: "In the rare event that a post fails to publish, you'll receive an immediate notification with details about the error. You can then edit and reschedule the post. Our system also has automatic retry mechanisms for common temporary issues."
        },
        {
          q: "Can I schedule stories and reels on Instagram?",
          a: "Yes, you can schedule Instagram stories and reels directly from Spreadify AI. Our platform supports all major content types across supported social networks."
        },
        {
          q: "Is there a limit to how many posts I can schedule?",
          a: "The number of posts you can schedule depends on your plan. Our Free plan allows up to 30 posts per month, while our paid plans offer higher limits, with the Professional and Agency plans offering unlimited scheduled posts."
        }
      ]
    },
    {
      id: "listening",
      label: "Listening",
      questions: [
        {
          q: "What is social listening?",
          a: "Social listening is the process of monitoring social media platforms for mentions of your brand, competitors, products, and relevant industry keywords. Spreadify AI's listening tools help you track these conversations, analyze sentiment, and gain valuable insights into what people are saying about your brand online."
        },
        {
          q: "How does sentiment analysis work?",
          a: "Our AI-powered sentiment analysis automatically categorizes mentions as positive, negative, or neutral. The system analyzes the language and context of social media posts to determine the sentiment behind them, giving you a quick overview of how people feel about your brand or specific topics."
        },
        {
          q: "Can I track competitors with the listening tools?",
          a: "Absolutely! You can set up monitoring for competitor brands, products, or campaigns. This allows you to benchmark your performance against competitors and identify opportunities in the market."
        },
        {
          q: "How far back does the listening data go?",
          a: "Our standard listening data starts from the day you set up monitoring. However, with our Professional and Agency plans, you can access historical data going back up to 12 months, depending on platform limitations."
        },
        {
          q: "Can I create custom reports from listening data?",
          a: "Yes, all paid plans include custom reporting features. You can create reports based on specific keywords, date ranges, platforms, and more. Reports can be exported in various formats including PDF, CSV, and PowerPoint."
        }
      ]
    },
    {
      id: "ai",
      label: "AI Features",
      questions: [
        {
          q: "What are AI content assistant credits?",
          a: "AI content assistant credits allow you to generate social media content using our advanced AI. Each credit can be used to generate one piece of content, such as a post caption, content idea, or hashtag suggestion. Different plans include varying numbers of monthly credits."
        },
        {
          q: "How accurate is the AI-generated content?",
          a: "Our AI content assistant produces high-quality, relevant content based on your inputs and brand voice. While the AI is highly accurate and improves with usage, we recommend reviewing and customizing the generated content to perfectly match your brand style."
        },
        {
          q: "Can the AI assistant write in different tones?",
          a: "Yes, you can specify the tone you want for your content. The AI can generate content in various tones such as professional, casual, humorous, inspirational, educational, and more."
        },
        {
          q: "Does the AI assistant support multiple languages?",
          a: "Currently, our AI content assistant supports English, Spanish, French, German, Italian, Portuguese, Dutch, and Japanese. We're continuously adding support for additional languages."
        },
        {
          q: "How does the AI determine the best times to post?",
          a: "Our AI analyzes your audience's behavior patterns, historical engagement data, and industry benchmarks to recommend optimal posting times. The system learns and improves its recommendations based on your specific audience engagement over time."
        }
      ]
    },
    {
      id: "billing",
      label: "Billing & Plans",
      questions: [
        {
          q: "How does the 14-day free trial work?",
          a: "All paid plans include a 14-day free trial that gives you full access to all features included in that plan. No credit card is required to start, and you can downgrade to the free plan before the trial ends if you don't wish to continue with a paid subscription."
        },
        {
          q: "Can I switch between plans?",
          a: "Yes, you can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes to your plan will take effect at the start of your next billing cycle."
        },
        {
          q: "Do you offer refunds?",
          a: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with your subscription within the first 30 days, contact our support team for a full refund."
        },
        {
          q: "Is there a discount for annual billing?",
          a: "Yes, we offer a 20% discount when you choose annual billing compared to monthly billing. This discount is automatically applied when you select the annual billing option."
        },
        {
          q: "Do you offer special pricing for nonprofits or educational institutions?",
          a: "Yes, we offer special pricing for nonprofits, educational institutions, and students. Please contact our sales team with verification of your status to learn more about these special offers."
        }
      ]
    }
  ];

  return (
    <RootLayout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about Spreadify AI and our services.
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="flex justify-start mb-8 overflow-x-auto pb-2">
            {faqCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {faqCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              {category.questions.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border bg-card hover:shadow-sm transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 bg-muted/30 p-8 rounded-lg max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help. Contact us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center purple-gradient-bg border-none text-white px-6 py-2 rounded-md font-medium">
              Contact Support
            </button>
            <button className="inline-flex items-center bg-muted hover:bg-muted/80 px-6 py-2 rounded-md font-medium">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
