"use client"

import { motion } from "framer-motion"
import { Tag, Sparkles, ExternalLink } from "lucide-react"

const releases = [
  {
    version: "v1.0.0",
    type: "Stable Release",
    typeColor: "green",
    date: "Dec 2025",
    features: [
      "Production-ready memory engine",
      "Sleep Phase memory consolidation",
      "Built-in dashboard UI with filters",
      "Hybrid retrieval (BM25 + vector)",
      "40% better retrieval accuracy"
    ]
  },
  {
    version: "v0.9.0",
    type: "Beta Release",
    typeColor: "amber",
    date: "Nov 2025",
    features: [
      "Auto-deduplication with semantic similarity",
      "Multi-user and session support",
      "Importance scoring system",
      "Docker Compose deployment"
    ]
  },
  {
    version: "v0.8.0",
    type: "Alpha Release",
    typeColor: "purple",
    date: "Oct 2025",
    features: [
      "Core memory engine",
      "Qdrant vector database integration",
      "OpenAI embeddings support"
    ]
  }
]

const roadmap = [
  { feature: "GraphRAG Integration", status: "Planned" },
  { feature: "LangChain Memory Adapter", status: "Planned" },
  { feature: "Webhook Notifications", status: "Planned" },
  { feature: "Memory Analytics Dashboard", status: "Planned" },
]

export function Changelog() {
  return (
    <section className="py-20 px-6" id="changelog">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            Changelog & Roadmap
          </h2>
          <p className="text-lg text-slate-600">
            Stay up to date with the latest features and improvements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Releases */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-semibold text-slate-800 mb-4">Recent Releases</h3>
            {releases.map((release, index) => {
              const typeColors: Record<string, string> = {
                green: "bg-green-100 text-green-700",
                amber: "bg-amber-100 text-amber-700",
                purple: "bg-purple-100 text-purple-700",
              }
              return (
                <motion.div
                  key={release.version}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-slate-200 p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Tag className="w-4 h-4 text-slate-400" />
                    <span className="font-semibold text-slate-800">{release.version}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeColors[release.typeColor]}`}>
                      {release.type}
                    </span>
                    <span className="text-sm text-slate-400">{release.date}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {release.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
            <a
              href="https://github.com/rexdivakar/HippocampAI/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 font-medium"
            >
              View all releases
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Roadmap */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Roadmap</h3>
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-slate-700">{item.feature}</span>
                  <span className="text-xs text-slate-400">{item.status}</span>
                </motion.div>
              ))}
              <a
                href="https://github.com/rexdivakar/HippocampAI/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-cyan-600 hover:text-cyan-700 font-medium pt-2"
              >
                Request a feature →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
