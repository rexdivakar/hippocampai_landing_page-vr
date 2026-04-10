"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const BANNER_KEY = "hippocamp_banner_v051_dismissed"

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(BANNER_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    localStorage.setItem(BANNER_KEY, "1")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative z-50 bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-500 text-white">
      <div className="mx-auto max-w-6xl px-4 py-2.5 flex items-center justify-center gap-3 text-sm">
        <Sparkles className="w-4 h-4 flex-shrink-0 opacity-90" />
        <span className="font-medium">
          v0.5.1 is out —&nbsp;
          <span className="opacity-90 font-normal">
            Prospective Memory, Batch Operations, RemoteBackend fixes
          </span>
        </span>
        <Link
          href="/#changelog"
          className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          See what&apos;s new <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
