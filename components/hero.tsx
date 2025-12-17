"use client"

import Link from "next/link"
import { ArrowRight, Github, Star, Check } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-sm text-cyan-700">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Open Source • Apache 2.0 License
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
            AI Agents Forget.
            <br />
            <span className="text-cyan-500">HippocampAI Remembers.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A universal, self-improving memory layer for LLM applications. Power 
            personalized AI experiences with semantic understanding, auto-deduplication, 
            and hybrid retrieval.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href="/docs#getting-started"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 rounded-full transition-colors shadow-lg shadow-cyan-500/25"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/rexdivakar/HippocampAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-full transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 pt-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              Open Source
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Production Ready
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              Self-Hosted
            </div>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xl shadow-slate-200/50">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-white rounded-md border border-slate-200 text-xs text-slate-500 font-mono">
                  HippocampAI Memories
                </div>
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-4 grid grid-cols-12 gap-4">
              {/* Sidebar */}
              <div className="col-span-3 space-y-4">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="text-xs font-medium text-slate-700 mb-2">Filters</div>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-xs text-slate-600">
                      <input type="checkbox" checked readOnly className="rounded border-slate-300 text-cyan-500" />
                      Event
                    </label>
                    <label className="flex items-center gap-2 text-xs text-slate-600">
                      <input type="checkbox" readOnly className="rounded border-slate-300" />
                      Preference
                    </label>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="text-xs font-medium text-slate-700 mb-2">Popular Tags</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">#preference</span>
                    <span className="px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded text-xs">#meeting</span>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">#ui</span>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="col-span-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-800">Memories <span className="text-slate-400">24</span></div>
                  <input type="text" placeholder="Search memories..." className="px-3 py-1.5 text-xs border border-slate-200 rounded-lg w-32" readOnly />
                </div>
                <div className="space-y-2">
                  {[
                    { type: "preference", time: "2 hours ago", content: "User prefers dark mode interface" },
                    { type: "event", time: "1 day ago", content: "Scheduled meeting with team for Friday 3pm" },
                    { type: "preference", time: "3 days ago", content: "User likes concise, technical responses" },
                  ].map((memory, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-1.5 py-0.5 rounded text-xs ${memory.type === "event" ? "bg-cyan-100 text-cyan-700" : "bg-amber-100 text-amber-700"}`}>
                          {memory.type}
                        </span>
                        <span className="text-xs text-slate-400">{memory.time}</span>
                      </div>
                      <div className="text-sm text-slate-700">{memory.content}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details panel */}
              <div className="col-span-4 p-3 bg-slate-50 rounded-lg">
                <div className="text-xs font-medium text-slate-700 mb-3">Memory Details</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Content</div>
                    <div className="text-sm text-slate-800">User prefers dark mode interface</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Tags</div>
                    <div className="flex gap-1">
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">#preference</span>
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">#ui</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Relevance</div>
                      <div className="text-lg font-semibold text-slate-800">0.95</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Importance</div>
                      <div className="text-lg font-semibold text-slate-800">0.85</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
