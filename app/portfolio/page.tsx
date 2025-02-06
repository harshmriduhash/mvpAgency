"use client";

import React from 'react'
import { PortfolioHero } from '@/components/portfolio/hero';
import { Showcase } from '@/components/portfolio/showcase';
import { CTA } from '@/components/cta';

export default function Portfolio() {
  return (
    <section>
      <PortfolioHero />
      <Showcase />
      <CTA />
    </section>
  )
};