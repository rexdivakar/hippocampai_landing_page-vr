"use client"

import { motion } from "framer-motion"
import { Tag, Sparkles, Bug, Zap, ExternalLink } from "lucide-react"

const releases = [
  {
    version: "v1.0.0",
    date: "Dec 2025",
    type: "major",
    title: "Stable Release",
    changes: [
      { type: "feature", text: "Production-ready memory engine" },
      { type: "feature", text: "Sleep Phase memory consolidation" },
      { type: "feature", text: "Built-in dashboard UI with filters" },
      { type: "feature", text: "Hybrid retrieval (BM25 + vector)" },
      { type: "improvement", text: "40% better retrieval accuracy" },
    ],
  },
  {
    version: "v0.9.0",
    date: "Nov 2025",
    type: "minor",
    title: "Beta Release",
    changes: [
      { type: "feature", text: "Auto-deduplication with semantic similarity" },
      { type: "feature", text: "Multi-user and session support" },
      { type: "feature", text: "Importance scoring system" },
      { type: "improvement", text: "Docker Compose deployment" },
    ],
  },
  {
    version: "v0.8.0",
    date: "Oct 2025",
    type: "minor",
    title: "Alpha Release",
    changes: [
      { type: "feature", text: "Core memory engine" },
      { type: "feature", text: "Qdrant vector database integration" },
      { type: "feature", text: "OpenAI embeddings support" },
    ],
  },
]

const roadmap = [
  { title: "GraphRAG Integration", status: "Planned" },
  { title: "LangChain Memory Adapter", status: "Planned" },
  { title: "Webhook Notifications", status: "Planned" },
  { title: "Memory Analytics Dashboard", status: "Planned" },
]

const changeTypeIcons: Record<string, { icon: typeof Sparkles; color: string }> = {
  feature: { icon: Sparkles, color: "text-cyan-500" },
  improvement: { icon: Zap, color: "text-amber-500" },
  fix: { icon: Bug, color: "text-emerald-500" },
}

export function Changelog() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Changelog & Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest features and improvements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Changelog */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Releases</h3>
            {releases.map((release, index) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-cyan-500" />
                    <span className="font-semibold text-gray-900">{release.version}</span>
                  </div>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    release.type === "major" 
                      ? "bg-cyan-100 text-cyan-700" 
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {release.title}
                  </span>
                  <span className="text-sm text-gray-500">{release.date}</span>
                </div>
                <ul className="space-y-2">
                  {release.changes.map((change, i) => {
                    const { icon: Icon, color } = changeTypeIcons[change.type]
                    return (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon className={`h-4 w-4 ${color}`} />
                        {change.text}
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            ))}
            
            <a
              href="https://github.com/rexdivakar/HippocampAI/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 font-medium mt-2"
            >
              View all releases
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Roadmap */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Roadmap</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-5"
            >
              <ul className="space-y-4">
                {roadmap.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item.title}</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href="https://github.com/rexdivakar/HippocampAI/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  Request a feature →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
