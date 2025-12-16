"use client"

import Link from "next/link"
import { useState } from "react"
import { Github, Menu, X, Brain } from "lucide-react"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#architecture", label: "Architecture" },
  { href: "/#comparison", label: "Comparison" },
  { href: "/#use-cases", label: "Use Cases" },
  { href: "/docs", label: "Docs" },
  { href: "/examples", label: "Examples" },
  { href: "/#faq", label: "FAQ" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links on the same page
    if (href.startsWith("/#")) {
      const isHomePage = typeof window !== "undefined" && window.location.pathname === "/"
      if (isHomePage) {
        e.preventDefault()
        const targetId = href.replace("/#", "")
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link 
          href="/" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => {
            if (typeof window !== "undefined" && window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-lg text-gray-900">HippocampAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-gray-600 hover:text-cyan-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/rexdivakar/HippocampAI"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-sm text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 px-3 py-2 rounded-lg transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <Link
            href="/docs"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Get Started
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-gray-600 hover:text-cyan-600 py-2"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/rexdivakar/HippocampAI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-cyan-600 py-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
