import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { CompanyLogos } from "@/components/company-logos"
import { BentoFeatures } from "@/components/bento-features"
import { Architecture } from "@/components/architecture"
import { CodeShowcase } from "@/components/code-showcase"
import { Comparison } from "@/components/comparison"
import { Integrations } from "@/components/integrations"
import { UseCases } from "@/components/use-cases"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { QuickStart } from "@/components/quick-start"
import { GitHubStats } from "@/components/github-stats"
import { FAQ } from "@/components/faq"
import { Changelog } from "@/components/changelog"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navigation />
      <Hero />
      <CompanyLogos />
      <BentoFeatures />
      <Architecture />
      <CodeShowcase />
      <Comparison />
      <Integrations />
      <UseCases />
      <PerformanceMetrics />
      <QuickStart />
      <GitHubStats />
      <FAQ />
      <Changelog />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
