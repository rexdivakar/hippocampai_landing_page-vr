import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DocsContent } from "@/components/docs-content"

export const metadata = {
  title: "Documentation - HippocampAI",
  description: "Complete documentation for HippocampAI - Long-term memory engine for LLMs",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <DocsContent />
      <Footer />
    </div>
  )
}
