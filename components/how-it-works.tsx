"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Layers, Cpu, Filter, Database, Search, Moon, GitBranch,
  ArrowRight, MessageSquare, Settings, FileText, Tag
} from "lucide-react"

const pipelineStages = [
  {
    id: "ingestion",
    icon: Layers,
    title: "Ingestion",
    subtitle: "remember() API call",
    color: "cyan",
    details: {
      description: "Content enters the system through the Python SDK (remember/recall) or REST API with rich metadata support.",
      features: [
        "Content normalization and cleaning",
        "Automatic entity & relationship extraction",
        "User, session, and agent scoping",
        "Custom metadata attachment",
        "Importance scoring (0-1)"
      ]
    }
  },
  {
    id: "embedding",
    icon: Cpu,
    title: "Embedding",
    subtitle: "OpenAI, Anthropic, Ollama",
    color: "purple",
    details: {
      description: "Text is converted to vector representations using your choice of embedding provider.",
      features: [
        "OpenAI, Anthropic, Groq, Ollama support",
        "Sentence Transformers / HuggingFace",
        "Safe embedding model migration",
        "Batch processing for efficiency",
        "Custom embedding providers"
      ]
    }
  },
  {
    id: "deduplication",
    icon: Filter,
    title: "Deduplication",
    subtitle: "Semantic similarity check",
    color: "green",
    details: {
      description: "Before storage, cosine similarity is computed to detect and handle duplicate content.",
      features: [
        "85% similarity threshold (configurable)",
        "Automatic duplicate detection",
        "Smart memory merging",
        "30-70% storage savings",
        "Preserves unique information"
      ]
    }
  },
  {
    id: "knowledge-graph",
    icon: GitBranch,
    title: "Knowledge Graph",
    subtitle: "Entity & relation extraction",
    color: "amber",
    details: {
      description: "Real-time extraction of entities and relationships builds a structured knowledge graph alongside vector storage.",
      features: [
        "Automatic entity extraction",
        "Relationship mapping",
        "Custom schema definitions",
        "Incremental graph building",
        "Graph-aware retrieval support"
      ]
    }
  },
  {
    id: "storage",
    icon: Database,
    title: "Storage",
    subtitle: "Qdrant + Redis + SQLite",
    color: "cyan",
    details: {
      description: "Vectors stored in Qdrant with HNSW indexing, Redis caching for 50-100x speed, metadata persisted to SQLite.",
      features: [
        "Qdrant vector database",
        "Redis caching (50-100x faster)",
        "SQLite metadata storage",
        "Tiered storage (hot/warm/cold)",
        "Namespace isolation per user/agent"
      ]
    }
  },
  {
    id: "retrieval",
    icon: Search,
    title: "Retrieval",
    subtitle: "3-way fusion (vector + BM25 + graph)",
    color: "rose",
    details: {
      description: "3-way Reciprocal Rank Fusion combines vector similarity, BM25 keyword matching, and graph traversal.",
      features: [
        "Vector similarity search",
        "BM25 keyword matching",
        "Knowledge graph traversal",
        "Reciprocal Rank Fusion (RRF)",
        "40% better accuracy vs vector-only"
      ]
    }
  }
]

const categories = [
  {
    icon: MessageSquare,
    title: "Memory Types",
    color: "cyan",
    items: ["Preferences", "Facts & knowledge", "Events & conversations", "Procedural (behavioral)", "Prospective (future)", "Custom metadata"]
  },
  {
    icon: Cpu,
    title: "Processing",
    color: "purple",
    items: ["Multi-provider embeddings", "Knowledge graph extraction", "Importance scoring", "Relevance feedback loops", "Context assembly + token budgeting"]
  },
  {
    icon: Database,
    title: "Storage & Caching",
    color: "green",
    items: ["Qdrant vector DB (HNSW)", "Redis caching (50-100x)", "DuckDB (sessions + consolidation)", "Tiered storage (hot/warm/cold)", "Export/import (JSON, Parquet, CSV)"]
  },
  {
    icon: Moon,
    title: "Sleep Phase",
    color: "amber",
    items: ["Memory consolidation", "Importance decay", "Auto-healing", "Predictive analytics", "Session summarization"]
  }
]

const techStack = ["Python", "FastAPI", "Qdrant", "Redis", "DuckDB", "OpenAI", "Anthropic", "Groq", "Ollama", "Celery", "Docker", "React"]

export function HowItWorks() {
  const [activeStage, setActiveStage] = useState<string | null>(null)

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors: Record<string, { bg: string; border: string; text: string; activeBg: string }> = {
      cyan: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-600", activeBg: "bg-cyan-100" },
      purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-600", activeBg: "bg-purple-100" },
      green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-600", activeBg: "bg-green-100" },
      amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-600", activeBg: "bg-amber-100" },
      rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-600", activeBg: "bg-rose-100" },
    }
    return colors[color] || colors.cyan
  }

  return (
    <section className="py-20 px-6 bg-slate-50/50" id="how-it-works">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            How HippocampAI Works
          </h2>
          <p className="text-lg text-slate-600">
            A robust pipeline designed for reliability and performance at scale
          </p>
        </motion.div>

        {/* Pipeline Flow */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {pipelineStages.map((stage, index) => {
              const colors = getColorClasses(stage.color, activeStage === stage.id)
              const isActive = activeStage === stage.id
              
              return (
                <div key={stage.id} className="flex items-center gap-2 md:gap-4">
                  <motion.button
                    onClick={() => setActiveStage(isActive ? null : stage.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      isActive 
                        ? `${colors.activeBg} ${colors.border} shadow-lg` 
                        : `${colors.bg} ${colors.border} hover:shadow-md`
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-2`}>
                      <stage.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="text-sm font-semibold text-slate-800">{stage.title}</div>
                    <div className="text-xs text-slate-500 text-center max-w-[100px]">{stage.subtitle}</div>
                  </motion.button>
                  {index < pipelineStages.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-slate-300 hidden md:block" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Active Stage Details */}
          {activeStage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 pt-8 border-t border-slate-200"
            >
              {pipelineStages.filter(s => s.id === activeStage).map(stage => {
                const colors = getColorClasses(stage.color, true)
                return (
                  <div key={stage.id} className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                          <stage.icon className={`w-5 h-5 ${colors.text}`} />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800">{stage.title}</h3>
                      </div>
                      <p className="text-slate-600">{stage.details.description}</p>
                    </div>
                    <div className={`${colors.bg} rounded-xl p-4 border ${colors.border}`}>
                      <div className="text-sm font-medium text-slate-700 mb-3">Features</div>
                      <ul className="space-y-2">
                        {stage.details.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {categories.map((category, index) => {
            const colors = getColorClasses(category.color, false)
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                    <category.icon className={`w-4 h-4 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-slate-800">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
