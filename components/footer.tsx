import Link from "next/link"
import { Github, Twitter, Mail, Brain } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "Architecture", href: "/#architecture" },
    { label: "Comparison", href: "/#comparison" },
    { label: "Use Cases", href: "/#use-cases" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Examples", href: "/examples" },
    { label: "API Reference", href: "/docs#api-reference" },
    { label: "Quick Start", href: "/docs#quick-start" },
  ],
  community: [
    { label: "GitHub", href: "https://github.com/rexdivakar/HippocampAI", external: true },
    { label: "Discussions", href: "https://github.com/rexdivakar/HippocampAI/discussions", external: true },
    { label: "Issues", href: "https://github.com/rexdivakar/HippocampAI/issues", external: true },
    { label: "Contributing", href: "https://github.com/rexdivakar/HippocampAI/blob/main/CONTRIBUTING.md", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-lg text-gray-900">HippocampAI</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Open-source long-term memory engine for AI assistants. Build AI that remembers.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/rexdivakar/HippocampAI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/hippocampai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@hippocampai.dev"
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 HippocampAI. Licensed under{" "}
            <a
              href="https://github.com/rexdivakar/HippocampAI/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700"
            >
              Apache License 2.0
            </a>
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a
              href="https://github.com/rexdivakar/HippocampAI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/docs"
              className="hover:text-gray-700 transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/examples"
              className="hover:text-gray-700 transition-colors"
            >
              Examples
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
