"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { NextMVPLogo } from "@/components/logo";
import { ModeToggle } from "@/app/providers";
import { getCalApi } from "@calcom/embed-react";

function Header() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const navigationItems = [
    {
      title: "Navigate",
      description: "Navigate NextMVP easily.",
      items: [
        {
          title: "Get started",
          href: "/intro",
        },
        {
          title: "Our portfolio",
          href: "/portfolio",
        },
        {
          title: "Our process",
          href: "#our-process",
        },
        {
          title: "Pricing",
          href: "#pricing",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full top-0 left-0 bg-[#FAFAFA] dark:bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-2 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              <NextMVPLogo />
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <>
                    <NavigationMenuTrigger className="font-medium text-sm">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[450px] p-4">
                      <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                        <div className="flex flex-col h-full justify-between">
                          <div className="flex flex-col">
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            className="mt-10"
                            data-cal-namespace="discovery-call"
                            data-cal-link="nextmvp/discovery-call"
                            data-cal-config='{"layout":"month_view"}'
                          >
                            Book a call
                          </Button>
                        </div>
                        <div className="flex flex-col text-sm h-full justify-end">
                          {item.items?.map((subItem) => (
                            <NavigationMenuLink
                              href={subItem.href}
                              key={subItem.title}
                              className="flex flex-row justify-between items-center bg-[#FAFAFA] dark:bg-background py-2 px-4 rounded"
                            >
                              <span>{subItem.title}</span>
                              <MoveRight className="w-4 h-4 text-muted-foreground" />
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="w-full lg:hidden">
          <NextMVPLogo />
        </div>
        <div className="flex justify-end w-full gap-4">
          {/**<ModeToggle />
          <div className="border-r"></div>*/}
          <Link href="/portfolio">
            <Button variant="outline" className="mt-0.5 hidden md:inline">
              View portfolio
            </Button>
          </Link>
          <Button
            data-cal-namespace="discovery-call"
            data-cal-link="nextmvp/discovery-call"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a call
          </Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end z-50">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-[#FAFAFA] dark:bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg">{item.title}</p>
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header };
