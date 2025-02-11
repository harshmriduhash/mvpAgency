"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  twitter: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 509.64"
      {...props}
    >
      <path
        fill="currentColor"
        d="M115.612 0h280.776C459.975 0 512 52.025 512 115.612v278.416c0 63.587-52.025 115.612-115.612 115.612H115.612C52.025 509.64 0 457.615 0 394.028V115.612C0 52.025 52.025 0 115.612 0zm208.127 148.355h36.12l-78.913 90.197 92.838 122.735h-72.695l-56.932-74.439-65.145 74.439h-36.146l84.407-96.474-89.058-116.458h74.535l51.464 68.04 59.525-68.04zM311.06 339.666h20.018L201.876 168.842h-21.478L311.06 339.666z"
      />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 122.31"
      {...props}
    >
      <path
        fill="#0a66c2"
        fillRule="evenodd"
        d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z"
      />
    </svg>
  ),
};

function Founder() {
  return (
    <div className="w-full mt-20 sm:mt-28">
      <div className="container mx-auto max-w-7xl">
        <div className="items-start">
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter text-center font-regular">
              Meet the founder
            </h2>
          </div>
          <div className="w-full">
            <Dock direction="middle">
              <DockIcon>
                <Link href="https://x.com/IntrovertCoderr" target="_blank">
                  <Icons.twitter className="size-6" />
                </Link>
              </DockIcon>
              <DockIcon>
                <Link
                  href="https://www.linkedin.com/in/harsh-bestmerndev/"
                  target="_blank"
                >
                  <Icons.linkedin className="size-6" />
                </Link>
              </DockIcon>
            </Dock>
          </div>
          <div className="space-y-4 mx-auto w-full items-center mt-4 sm:mt-10">
            <p>
              Hey, I’m Harsh. I’ve spent years building products and leading
              engineering teams in other startups, so I know what it takes to
              make products succeed.
            </p>
            <p>
              I’ve launched a bunch of successful MVPs, and now I want to help
              you do the same.
            </p>
            <p>
              At NextMVP, we’re all about helping entrepreneurs like you bring
              your ideas to life quickly and smoothly. You’ve got the vision,
              we’ve got the skills to help you make it into something people
              want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Founder };
