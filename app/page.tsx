import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { QuickStart } from "@/components/quick-start"
import { HowItWorks } from "@/components/how-it-works"
import { Capabilities } from "@/components/capabilities"
import { DeveloperExperience } from "@/components/developer-experience"
import { Integrations } from "@/components/integrations"
import { Comparison } from "@/components/comparison"
import { UseCases } from "@/components/use-cases"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { OpenSource } from "@/components/open-source"
import { FAQ } from "@/components/faq"
import { Changelog } from "@/components/changelog"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main>
        <Hero />
        <QuickStart />
        <HowItWorks />
        <Capabilities />
        <DeveloperExperience />
        <Integrations />
        <Comparison />
        <UseCases />
        <PerformanceMetrics />
        <OpenSource />
        <FAQ />
        <Changelog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
