"use client"

import { motion } from "framer-motion"
import { Tag, Sparkles, ExternalLink } from "lucide-react"

const releases = [
  {
    version: "v0.5.0",
    type: "Latest Release",
    typeColor: "cyan",
    date: "Feb 2026",
    features: [
      "Knowledge graph with real-time entity extraction",
      "Graph-aware retrieval (vector + BM25 + graph RRF)",
      "Relevance feedback loop with decay scoring",
      "Memory triggers (webhooks, websocket, log actions)",
      "Procedural memory & prompt self-optimization",
      "Embedding model migration with Celery",
    ]
  },
  {
    version: "v0.4.0",
    type: "Feature Release",
    typeColor: "green",
    date: "Jan 2026",
    features: [
      "Multi-agent collaboration with shared memory",
      "Predictive analytics & pattern forecasting",
      "Auto-healing memory system",
      "React dashboard with full analytics UI",
      "Plugin system (processors, scorers, retrievers)",
      "Memory namespaces with permissions",
    ]
  },
  {
    version: "v0.3.0",
    type: "Feature Release",
    typeColor: "green",
    date: "Dec 2025",
    features: [
      "SaaS platform (auth, rate limiting, Celery)",
      "Export/import (JSON, Parquet, CSV)",
      "Tiered storage (hot/warm/cold)",
      "Offline mode with operation queueing",
      "Bi-temporal facts with time-travel queries",
      "Context assembly with token budgeting",
    ]
  },
  {
    version: "v0.2.0",
    type: "Stable Release",
    typeColor: "amber",
    date: "Nov 2025",
    features: [
      "Production-ready memory engine",
      "Sleep Phase memory consolidation",
      "Hybrid retrieval (BM25 + vector)",
      "Multi-user & session support",
    ]
  },
]

const roadmap = [
  { feature: "GraphRAG with advanced traversal", status: "In Progress" },
  { feature: "Real-time streaming memory updates", status: "Planned" },
  { feature: "Memory versioning & rollback", status: "Planned" },
  { feature: "Visual knowledge graph explorer", status: "Planned" },
  { feature: "Federated memory across instances", status: "Exploring" },
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
                cyan: "bg-cyan-100 text-cyan-700",
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
                        <Sparkles className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
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
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    item.status === "In Progress" ? "bg-cyan-100 text-cyan-700" :
                    item.status === "Planned" ? "bg-slate-100 text-slate-500" :
                    "bg-purple-100 text-purple-700"
                  }`}>
                    {item.status}
                  </span>
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
