import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExamplesContent } from "@/components/examples-content"

export const metadata = {
  title: "Examples - HippocampAI",
  description: "Code examples and tutorials for HippocampAI - Long-term memory engine for LLMs",
}

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <ExamplesContent />
      <Footer />
    </div>
  )
}
