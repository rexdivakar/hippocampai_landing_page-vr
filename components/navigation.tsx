"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#how-it-works", label: "Capabilities" },
  { href: "/#use-cases", label: "Use Cases" },
  { href: "https://github.com/rexdivakar/HippocampAI", label: "GitHub", external: true },
  { href: "/docs", label: "Documentation" },
]

// Brain logo SVG component matching the HippocampAI brand
function BrainLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8C20 8 16 8 14 10C12 12 12 14 12 16C10 16 8 18 8 20C8 22 9 24 11 25C11 27 12 29 14 30C16 31 18 31 20 31M20 8C20 8 24 8 26 10C28 12 28 14 28 16C30 16 32 18 32 20C32 22 31 24 29 25C29 27 28 29 26 30C24 31 22 31 20 31M20 8V31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 16C14 16 16 18 20 18C24 18 26 16 26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 22C12 22 15 24 20 24C25 24 28 22 28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <Link 
          href="/" 
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <BrainLogo className="w-9 h-9 text-cyan-500" />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight text-slate-800">HippocampAI</span>
            <span className="text-xs text-slate-500 leading-tight">Memory Engine</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/docs#getting-started"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
          
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Link
                href="/docs#getting-started"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
