"use client"

import Link from "next/link"
import { Github, Twitter, Mail } from "lucide-react"

// Brain logo SVG component
function BrainLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8C20 8 16 8 14 10C12 12 12 14 12 16C10 16 8 18 8 20C8 22 9 24 11 25C11 27 12 29 14 30C16 31 18 31 20 31M20 8C20 8 24 8 26 10C28 12 28 14 28 16C30 16 32 18 32 20C32 22 31 24 29 25C29 27 28 29 26 30C24 31 22 31 20 31M20 8V31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 16C14 16 16 18 20 18C24 18 26 16 26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 22C12 22 15 24 20 24C25 24 28 22 28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

const footerLinks = {
  product: [
    { label: "Features", href: "/#how-it-works" },
    { label: "Architecture", href: "/#how-it-works" },
    { label: "Use Cases", href: "/#use-cases" },
    { label: "Performance", href: "/#performance" },
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
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BrainLogo className="w-8 h-8 text-cyan-500" />
              <span className="font-bold text-lg text-slate-800">HippocampAI</span>
            </Link>
            <p className="text-sm text-slate-500 mb-4 max-w-xs">
              Open-source long-term memory engine for AI assistants. Build AI that remembers.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/rexdivakar/HippocampAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/hippocampai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@hippocampai.dev"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 HippocampAI. Licensed under{" "}
            <a
              href="https://opensource.org/licenses/Apache-2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline"
            >
              Apache License 2.0
            </a>
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a
              href="https://github.com/rexdivakar/HippocampAI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 transition-colors"
            >
              GitHub
            </a>
            <Link href="/docs" className="hover:text-slate-700 transition-colors">
              Documentation
            </Link>
            <Link href="/examples" className="hover:text-slate-700 transition-colors">
              Examples
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
