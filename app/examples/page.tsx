import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExamplesContent } from "@/components/examples-content"

export const metadata = {
  title: "Examples - HippocampAI",
  description: "Code examples and tutorials for HippocampAI - Enterprise Memory for AI Agents",
}

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navigation />
      <ExamplesContent />
      <Footer />
    </div>
  )
}
