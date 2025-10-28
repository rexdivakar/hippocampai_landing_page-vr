import Link from "next/link"
import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500">
                <span className="font-bold text-black">H</span>
              </div>
              <span className="font-bold text-lg">HippocampAI</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Open-source long-term memory engine for AI assistants
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="#comparison" className="hover:text-white transition-colors">
                  Benchmarks
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="hover:text-white transition-colors">
                  Architecture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://github.com/rexdivakar/HippocampAI" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rexdivakar/HippocampAI/tree/main/examples"
                  className="hover:text-white transition-colors"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rexdivakar/HippocampAI/blob/main/API_REFERENCE.md"
                  className="hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rexdivakar/HippocampAI/issues"
                  className="hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://github.com/rexdivakar/HippocampAI" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rexdivakar/HippocampAI/discussions"
                  className="hover:text-white transition-colors"
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rexdivakar/HippocampAI/blob/main/CONTRIBUTING.md"
                  className="hover:text-white transition-colors"
                >
                  Contributing
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rexdivakar/HippocampAI/blob/patch_1/LICENSE"
                  className="hover:text-white transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 HippocampAI. Licensed under{" "}
            <a
              href="https://github.com/rexdivakar/HippocampAI/blob/patch_1/LICENSE"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apache License 2.0
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/rexdivakar/HippocampAI"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/hippocampai" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:contact@hippocampai.dev" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
