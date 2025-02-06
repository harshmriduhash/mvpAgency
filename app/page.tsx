import React from 'react'
import { Hero } from '@/components/landing-ui/hero'
import { Feature } from '@/components/landing-ui/features'
import { Testimonials } from '@/components/landing-ui/testimonials'
import { Pricing } from '@/components/landing-ui/pricing'
import { OurProcess } from '@/components/landing-ui/our-process'
import { Founder } from '@/components/landing-ui/founder'
import { CTA } from '@/components/cta';
import { Header } from "@/components/landing-ui/header";
import { Footer } from "@/components/landing-ui/footer";
import { FadeIn } from "@/components/landing-ui/fade-in";

const Home = () => {
  return (
    <section>
      <FadeIn>
        <Header />
          <Hero />
          <Feature />
          <Testimonials />
          <OurProcess />
          <Pricing />
          <Founder />
          <CTA />
        <Footer />
      </FadeIn>
    </section>
  )
}

export default Home