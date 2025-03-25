"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Calendar, BarChart2, Menu, X, Bell, Settings, User, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold purple-gradient-text">Spreadify AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/scheduler"
              className={`flex items-center gap-2 text-sm font-medium ${isActive('/scheduler') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              <Calendar className="h-4 w-4" />
              <span>Scheduler</span>
            </Link>
            <Link
              href="/listening"
              className={`flex items-center gap-2 text-sm font-medium ${isActive('/listening') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              <BarChart2 className="h-4 w-4" />
              <span>Listening</span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`flex items-center gap-2 text-sm font-medium ${isActive('/about') || isActive('/pricing') || isActive('/faq') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
                  <span>Company</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/about" className="w-full">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/pricing" className="w-full">Pricing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/faq" className="w-full">FAQ</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/get-started">
            <Button className="purple-gradient-bg border-none">Get Started</Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t p-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/scheduler"
              className={`flex items-center gap-2 text-sm font-medium ${isActive('/scheduler') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              <Calendar className="h-4 w-4" />
              <span>Scheduler</span>
            </Link>
            <Link
              href="/listening"
              className={`flex items-center gap-2 text-sm font-medium ${isActive('/listening') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              <BarChart2 className="h-4 w-4" />
              <span>Listening</span>
            </Link>

            <div className="border-t pt-4 mt-2"></div>
            <Link
              href="/about"
              className={`flex items-center gap-2 text-sm font-medium ${isActive('/about') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              <span>About Us</span>
            </Link>
            <Link
              href="/pricing"
              className={`flex items-center gap-2 text-sm font-medium ${isActive('/pricing') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              <span>Pricing</span>
            </Link>
            <Link
              href="/faq"
              className={`flex items-center gap-2 text-sm font-medium ${isActive('/faq') ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              <span>FAQ</span>
            </Link>

            <div className="border-t pt-4 mt-2 flex flex-col gap-2">
              <Button variant="ghost" className="justify-start px-2 w-full">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button variant="ghost" className="justify-start px-2 w-full">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Link href="/get-started" className="w-full">
                <Button className="purple-gradient-bg border-none mt-2 w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
