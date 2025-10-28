import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { BentoFeatures } from "@/components/bento-features"
import { CodeShowcase } from "@/components/code-showcase"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { InteractiveDemo } from "@/components/interactive-demo"
import { QuickStart } from "@/components/quick-start"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { CompanyLogos } from "@/components/company-logos"
import { UseCases } from "@/components/use-cases"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      <Hero />
      <CompanyLogos />
      <InteractiveDemo />
      <BentoFeatures />
      <CodeShowcase />
      <UseCases />
      <PerformanceMetrics />
      <QuickStart />
      <Testimonials />
      <Footer />
    </div>
  )
}
