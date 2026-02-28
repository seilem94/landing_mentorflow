import { useRef } from 'react'
import { Navbar } from '@/components/layout/Navbar.jsx'
import { Footer } from '@/components/layout/Footer.jsx'
import { HeroSection } from '@/components/sections/HeroSection.jsx'
import { StatsStrip } from '@/components/sections/StatsStrip.jsx'
import { FeaturesSection } from '@/components/sections/FeaturesSection.jsx'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection.jsx'
import { MetricsSection } from '@/components/sections/MetricsSection.jsx'
import { CtaSection } from '@/components/sections/CtaSection.jsx'
import { useScrollReveal } from '@/hooks/useScrollReveal.js'

/**
 * LandingPage — Página de composición.
 * Solo orquesta secciones, no tiene lógica propia.
 * Para agregar una sección: importar y añadir aquí.
 */
export default function LandingPage() {
  const ctaRef = useRef(null)

  useScrollReveal()

  function scrollToDemo() {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setTimeout(() => ctaRef.current?.focus(), 600)
  }

  return (
    <>
      <Navbar onCtaClick={scrollToDemo} />
      <main>
        <HeroSection ctaRef={ctaRef} />
        <StatsStrip />
        <FeaturesSection />
        <HowItWorksSection />
        <MetricsSection />
        <CtaSection ctaRef={ctaRef} />
      </main>
      <Footer />
    </>
  )
}
