import Hero from '../components/sections/Hero'
import Pricing from '../components/sections/Pricing'
import Services from '../components/sections/Services'
import Stats from '../components/sections/Stats'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Coverage from '../components/sections/Coverage'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import Blog from '../components/sections/Blog'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'
import Contact from '../components/sections/Contact'

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
