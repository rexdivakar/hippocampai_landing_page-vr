"use client"

import { motion } from "framer-motion"
import { ArrowRight, Database, Brain, Search, Filter, Layers, Moon, Server } from "lucide-react"

const steps = [
  {
    icon: Layers,
    title: "Ingestion",
    description: "Raw data enters via API",
  },
  {
    icon: Brain,
    title: "Embedding",
    description: "OpenAI or local models",
  },
  {
    icon: Filter,
    title: "Deduplication",
    description: "Semantic similarity check",
  },
  {
    icon: Database,
    title: "Storage",
    description: "Qdrant vector database",
  },
  {
    icon: Search,
    title: "Retrieval",
    description: "Hybrid search (BM25 + vector)",
  },
]

export function Architecture() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="architecture">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How HippocampAI Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A robust pipeline designed for reliability and performance at scale
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Pipeline Flow */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm hover:border-cyan-300 hover:shadow-lg transition-all">
                    <step.icon className="h-7 w-7 text-cyan-500" />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
                    <div className="text-xs text-gray-500 mt-1 max-w-[120px]">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-gray-300 hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Detailed Architecture Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
          >
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <Layers className="h-4 w-4 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Memory Types</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Events (conversations)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Preferences (user settings)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Facts (knowledge)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Custom metadata
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                    <Brain className="h-4 w-4 text-violet-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Processing</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    OpenAI embeddings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    Local model support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    Importance scoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    Tag extraction
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Database className="h-4 w-4 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Storage</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Qdrant vector DB
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    SQLite metadata
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Docker volumes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Persistent storage
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <Moon className="h-4 w-4 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Sleep Phase</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Memory consolidation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Importance decay
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Duplicate merging
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Auto-optimization
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            {["Python", "FastAPI", "Qdrant", "OpenAI", "Docker", "SQLite"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
