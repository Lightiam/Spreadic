"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Linkedin, ExternalLink } from "lucide-react";

interface ConnectAccountsStepProps {
  userData: {
    connectedAccounts: {
      instagram: boolean;
      twitter: boolean;
      facebook: boolean;
      linkedin: boolean;
    };
  };
  updateUserData: (data: Record<string, unknown>) => void;
}

export default function ConnectAccountsStep({
  userData,
  updateUserData
}: ConnectAccountsStepProps) {
  const handleConnect = (platform: 'instagram' | 'twitter' | 'facebook' | 'linkedin') => {
    // In a real app, this would initiate OAuth flow
    // For now, we'll just simulate a successful connection
    setTimeout(() => {
      updateUserData({
        connectedAccounts: {
          ...userData.connectedAccounts,
          [platform]: true
        }
      });
    }, 500);
  };

  const handleDisconnect = (platform: 'instagram' | 'twitter' | 'facebook' | 'linkedin') => {
    updateUserData({
      connectedAccounts: {
        ...userData.connectedAccounts,
        [platform]: false
      }
    });
  };

  const socialAccounts = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      color: 'bg-gradient-to-r from-purple-600 to-pink-500',
      connected: userData.connectedAccounts.instagram
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      color: 'bg-blue-500',
      connected: userData.connectedAccounts.twitter
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      color: 'bg-blue-600',
      connected: userData.connectedAccounts.facebook
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      color: 'bg-blue-700',
      connected: userData.connectedAccounts.linkedin
    }
  ];

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl">Connect Your Social Accounts</CardTitle>
        <CardDescription>
          Connect the social media accounts you want to manage with Spreadify AI
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {socialAccounts.map((account) => (
              <div
                key={account.id}
                className={`rounded-lg border p-4 ${account.connected ? 'bg-muted/50 border-primary/50' : 'hover:bg-muted/30'} transition-colors`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${account.color}`}>
                      {account.icon}
                    </div>
                    <div>
                      <p className="font-medium">{account.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {account.connected ? 'Connected' : 'Not connected'}
                      </p>
                    </div>
                  </div>

                  {account.connected ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDisconnect(account.id as 'instagram' | 'twitter' | 'facebook' | 'linkedin')}
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleConnect(account.id as 'instagram' | 'twitter' | 'facebook' | 'linkedin')}
                    >
                      Connect <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-muted/30 p-5 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> You can always connect additional accounts later from your account settings.
              Connecting accounts allows Spreadify AI to post content on your behalf and gather insights.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
