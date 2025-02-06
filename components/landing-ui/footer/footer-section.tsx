"use client";

import * as React from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "@/app/providers";
import { Linkedin, Twitter } from "lucide-react";

function FooterSection() {
  return (
    <footer className="relative border-t bg-[#FAFAFA] dark:bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-0 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 mt-8 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/"
                className="block transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/intro"
                className="block transition-colors hover:text-primary"
              >
                Get started
              </Link>
              <Link
                href="/portfolio"
                className="block transition-colors hover:text-primary"
              >
                Our portfolio
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Email: harshsahay2709@gmail.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.linkedin.com/in/harsh-bestmerndev/"
                      target="https://www.linkedin.com/in/harsh-bestmerndev/"
                    >
                      <Linkedin className="h-8 w-8" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow me on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://x.com/nextmvp_tech" target="_blank">
                      <Twitter className="h-8 w-8" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow me on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <ModeToggle />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 pb-4 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevHouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { FooterSection };