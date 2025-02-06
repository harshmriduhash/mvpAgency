"use client";

import * as React from "react";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useAnimate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "./highlighter";

export function CTA() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#saas", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#saas", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#consumer-facing", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#consumer-facing", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#marketplace-platforms", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#marketplace-platforms", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#internal-tools", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#internal-tools", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate]);
  return (
    <section className="relative mx-auto mb-20 mt-20 sm:mt-28 max-w-5xl">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="lg:rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden lg:rounded-3xl lg:border lg:border-slate-200 bg-[#FAFAFA] dark:bg-background dark:lg:border-slate-800">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#555555"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    <img
                      className="size-8 rounded-lg object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      src="/icon.png"
                      alt="logo"
                    />
                    <div
                      id="internal-tools"
                      className="absolute bottom-12 left-14 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Internal Tools
                    </div>
                    <div
                      id="consumer-facing"
                      className="absolute left-2 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Consumer-Facing Apps
                    </div>
                    <div
                      id="marketplace-platforms"
                      className="absolute bottom-20 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Marketplace Platforms
                    </div>
                    <div
                      id="saas"
                      className="absolute right-12 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      SaaS
                    </div>

                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-red-500"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-primary">
                        You
                      </span>
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-start">
                      <h3 className="mt-6 pb-1 font-bold ">
                        <span className="text-2xl md:text-4xl">
                          Ready to build your next MVP?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-muted-foreground">
                      You'll receive a response within 12 - 24 hours of booking. If your idea is a good fit, we'll schedule a call to discuss the details and work process.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        data-cal-namespace="discovery-call"
                        data-cal-link="nextmvp/discovery-call"
                        data-cal-config='{"layout":"month_view"}'
                      >
                        Book a call
                      </Button>
                      <Link href="/intro">
                        <Button variant={"secondary"}>Get started</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
};