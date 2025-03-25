"use client";

import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/toaster";

interface RootLayoutProps {
  children: ReactNode;
  hideNavigation?: boolean;
}

export function RootLayout({ children, hideNavigation = false }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {!hideNavigation && <Navbar />}
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
