"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SuccessStepProps {
  onComplete: () => void;
}

export default function SuccessStep({ onComplete }: SuccessStepProps) {
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
            className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center"
          >
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <CardTitle className="text-3xl">All Set Up!</CardTitle>
          <CardDescription className="text-lg mt-2">
            Your Spreadify AI account is ready to use
          </CardDescription>
        </motion.div>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl mx-auto space-y-8"
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-2">
                    1
                  </span>
                  Explore Your Dashboard
                </h3>
                <p className="text-sm text-muted-foreground">
                  Navigate through your new dashboard to discover all the features and tools available to you.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-2">
                    2
                  </span>
                  Schedule Your First Post
                </h3>
                <p className="text-sm text-muted-foreground">
                  Start scheduling your social media content with our intuitive calendar interface.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-2">
                    3
                  </span>
                  Set Up Monitoring
                </h3>
                <p className="text-sm text-muted-foreground">
                  Configure your social listening tools to track mentions and analyze sentiment.
                </p>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-2">
                    4
                  </span>
                  Try AI Content Assistant
                </h3>
                <p className="text-sm text-muted-foreground">
                  Generate engaging social media content with our AI assistant in just a few clicks.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={onComplete}
                className="mt-6 purple-gradient-bg border-none"
                size="lg"
              >
                Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
