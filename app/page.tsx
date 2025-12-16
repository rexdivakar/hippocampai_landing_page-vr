import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { DeveloperExperience } from "@/components/developer-experience"
import { Integrations } from "@/components/integrations"
import { UseCases } from "@/components/use-cases"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { OpenSource } from "@/components/open-source"
import { Changelog } from "@/components/changelog"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <DeveloperExperience />
        <Integrations />
        <UseCases />
        <PerformanceMetrics />
        <OpenSource />
        <Changelog />
      </main>
      <Footer />
    </div>
  )
}
