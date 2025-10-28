import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500">
            <span className="font-bold text-black text-lg">H</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">HippocampAI</span>
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400 border border-emerald-500/30">
              V1.0.0 (Stable build)
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
            How it Works
          </Link>
          <Link href="#comparison" className="text-sm text-gray-300 hover:text-white transition-colors">
            Comparison
          </Link>
          <Link href="#use-cases" className="text-sm text-gray-300 hover:text-white transition-colors">
            Use Cases
          </Link>
          <Link href="/architecture" className="text-sm text-gray-300 hover:text-white transition-colors">
            Architecture
          </Link>
          <Link href="/docs" className="text-sm text-gray-300 hover:text-white transition-colors">
            Docs
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="text-white hover:bg-white/10">
            <a href="https://github.com/rexdivakar/HippocampAI" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}
