"use client";

import Link from "next/link";

export function NextMVPLogo() {
  return (
    <Link href="/">
      <img
        className="size-12 rounded-lg object-cover"
        src="/icon.png"
        alt="logo"
      />
    </Link>
  );
};