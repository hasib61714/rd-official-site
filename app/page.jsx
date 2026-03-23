'use client'
import Hero from '../src/components/sections/Hero'
import Pricing from '../src/components/sections/Pricing'
import Services from '../src/components/sections/Services'
import Stats from '../src/components/sections/Stats'
import WhyChooseUs from '../src/components/sections/WhyChooseUs'
import Coverage from '../src/components/sections/Coverage'
import HowItWorks from '../src/components/sections/HowItWorks'
import Testimonials from '../src/components/sections/Testimonials'
import Blog from '../src/components/sections/Blog'
import FAQ from '../src/components/sections/FAQ'
import CTA from '../src/components/sections/CTA'
import Contact from '../src/components/sections/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Pricing />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Coverage />
      <HowItWorks />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
      <Contact />
    </main>
  )
}
