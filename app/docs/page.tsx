import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DocsContent } from "@/components/docs-content"

export const metadata = {
  title: "Documentation - HippocampAI",
  description: "Complete documentation for HippocampAI - Enterprise Memory for AI Agents",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navigation />
      <DocsContent />
      <Footer />
    </div>
  )
}
