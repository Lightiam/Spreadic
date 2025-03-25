"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalInfoStepProps {
  userData: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    jobTitle: string;
  };
  updateUserData: (data: any) => void;
}

export default function PersonalInfoStep({ userData, updateUserData }: PersonalInfoStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateUserData({ [name]: value });
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl">Tell Us About Yourself</CardTitle>
        <CardDescription>
          We'll use this information to personalize your experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              We'll send your account information and updates to this email
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company">Company / Organization</Label>
              <Input
                id="company"
                name="company"
                value={userData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                value={userData.jobTitle}
                onChange={handleChange}
                placeholder="Enter your job title"
              />
            </div>
          </div>

          <div className="bg-muted/30 p-5 rounded-lg mt-6">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Fields marked with <span className="text-destructive">*</span> are required.
              Your information is secure and will never be shared with third parties.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
