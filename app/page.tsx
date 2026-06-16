import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
// import { LogoMarquee } from '@/components/sections/logo-marquee'
import { About } from '@/components/sections/about'
import { Portfolio } from '@/components/sections/portfolio'
import { Services } from '@/components/sections/services'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
      <Hero />
      {/* <LogoMarquee /> */}
      <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
