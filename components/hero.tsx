"use client"

import Link from "next/link"
import { ArrowRight, Github, Star, Check, Sparkles } from "lucide-react"
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
            <Sparkles className="w-3.5 h-3.5" />
            v0.5.1 — Prospective Memory, Batch Operations, RemoteBackend Fixes
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
            AI Agents Forget.
            <br />
            <span className="text-cyan-500">HippocampAI Remembers.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Production-ready memory layer with knowledge graphs, hybrid retrieval,
            prospective memory, multi-agent collaboration, and 120+ API methods. Give your AI systems
            human-like memory capabilities.
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
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-slate-500">
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
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              120+ API Methods
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
                  HippocampAI Dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 grid grid-cols-12 gap-4">
              {/* Sidebar */}
              <div className="col-span-3 space-y-4">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="text-xs font-medium text-slate-700 mb-2">Memory Types</div>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-xs text-slate-600">
                      <input type="checkbox" checked readOnly className="rounded border-slate-300 text-cyan-500" />
                      Preferences
                    </label>
                    <label className="flex items-center gap-2 text-xs text-slate-600">
                      <input type="checkbox" checked readOnly className="rounded border-slate-300 text-cyan-500" />
                      Facts
                    </label>
                    <label className="flex items-center gap-2 text-xs text-slate-600">
                      <input type="checkbox" readOnly className="rounded border-slate-300" />
                      Events
                    </label>
                    <label className="flex items-center gap-2 text-xs text-slate-600">
                      <input type="checkbox" readOnly className="rounded border-slate-300" />
                      Procedural
                    </label>
                    <label className="flex items-center gap-2 text-xs text-slate-600">
                      <input type="checkbox" checked readOnly className="rounded border-slate-300 text-cyan-500" />
                      Prospective
                    </label>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="text-xs font-medium text-slate-700 mb-2">Knowledge Graph</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">entities: 142</span>
                    <span className="px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded text-xs">relations: 89</span>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="col-span-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-800">Memories <span className="text-slate-400">156</span></div>
                  <input type="text" placeholder="Recall memories..." className="px-3 py-1.5 text-xs border border-slate-200 rounded-lg w-32" readOnly />
                </div>
                <div className="space-y-2">
                  {[
                    { type: "preference", time: "2 hours ago", content: "Prefers oat milk in coffee, works remotely on Tuesdays" },
                    { type: "fact", time: "1 day ago", content: "Project deadline is March 15th, budget approved" },
                    { type: "procedural", time: "3 days ago", content: "User responds better to concise, technical answers" },
                  ].map((memory, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-1.5 py-0.5 rounded text-xs ${
                          memory.type === "fact" ? "bg-green-100 text-green-700" :
                          memory.type === "procedural" ? "bg-purple-100 text-purple-700" :
                          "bg-amber-100 text-amber-700"
                        }`}>
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
                <div className="text-xs font-medium text-slate-700 mb-3">Memory Analytics</div>
                <div className="space-y-3">
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
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Retrieval</div>
                    <div className="flex gap-1">
                      <span className="px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded text-xs">vector</span>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">BM25</span>
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">graph</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Agents Connected</div>
                    <div className="text-sm font-medium text-slate-700">3 active agents</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Health</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm text-green-600 font-medium">Auto-healing active</span>
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
