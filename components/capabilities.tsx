"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  Database, Search, TrendingDown, Star, Users, Cpu,
  GitBranch, Bell, Brain, Puzzle, Shield, BarChart3,
  Clock, Layers, MessageSquare, FileStack, Globe, CalendarClock
} from "lucide-react"

type Tag = "All" | "Retrieval" | "Multi-Agent" | "Storage" | "Automation" | "Platform" | "New in v0.5.1"

const capabilities: {
  icon: React.ElementType
  title: string
  description: string
  technical: string
  color: string
  tags: Tag[]
}[] = [
  {
    icon: Brain,
    title: "Knowledge Graph",
    description: "Real-time entity and relationship extraction on every remember() call. Build structured knowledge automatically from unstructured text.",
    technical: "3-way RRF fusion: vector + BM25 + graph retrieval",
    color: "cyan",
    tags: ["Retrieval"],
  },
  {
    icon: Search,
    title: "Hybrid Retrieval",
    description: "Combines semantic search, BM25 keyword matching, and graph-aware retrieval with Reciprocal Rank Fusion for optimal results.",
    technical: "40% accuracy improvement over vector-only search",
    color: "green",
    tags: ["Retrieval"],
  },
  {
    icon: Users,
    title: "Multi-Agent Collaboration",
    description: "Shared memory spaces for agent coordination. Multiple AI agents can read, write, and reason over collective memories.",
    technical: "Agent-scoped access with shared namespaces",
    color: "purple",
    tags: ["Multi-Agent"],
  },
  {
    icon: TrendingDown,
    title: "Sleep Phase Consolidation",
    description: "Bio-inspired memory consolidation merges related memories, decays importance scores, and prunes low-value data automatically.",
    technical: "Inspired by human memory consolidation during sleep",
    color: "amber",
    tags: ["Automation"],
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Pattern detection, habit tracking, and behavioral insights. Predict memory usage patterns and forecast future needs.",
    technical: "Cross-session analytics with temporal reasoning",
    color: "rose",
    tags: ["Automation"],
  },
  {
    icon: Shield,
    title: "Auto-Healing",
    description: "Automatic detection and repair of memory issues. Health monitoring, duplicate detection, and quality tracking built in.",
    technical: "Self-monitoring with configurable health thresholds",
    color: "green",
    tags: ["Automation", "Platform"],
  },
  {
    icon: Bell,
    title: "Memory Triggers",
    description: "Event-driven actions via webhooks, websocket, and log triggers. React to memory events in real-time across your system.",
    technical: "Configurable trigger rules with filter conditions",
    color: "cyan",
    tags: ["Automation"],
  },
  {
    icon: Cpu,
    title: "Procedural Memory",
    description: "Self-optimizing prompts via learned behavioral rules. Your AI learns how to communicate better over time.",
    technical: "Feedback loops with exponential decay scoring",
    color: "purple",
    tags: ["Automation"],
  },
  {
    icon: Puzzle,
    title: "Plugin System",
    description: "Extensible architecture with custom processors, scorers, retrievers, and filters. Build exactly the memory system you need.",
    technical: "Custom schemas, tiered storage, export/import",
    color: "amber",
    tags: ["Platform"],
  },
  {
    icon: Database,
    title: "SaaS Platform",
    description: "Full multi-tenant platform with authentication, rate limiting, Celery background tasks, and a React dashboard.",
    technical: "pip install hippocampai[saas] for full platform",
    color: "rose",
    tags: ["Platform"],
  },
  {
    icon: Star,
    title: "Importance Scoring",
    description: "Not all memories are equal. Automatic importance scoring with access-based boosting and configurable decay rates.",
    technical: "Time-weighted scoring with relevance feedback",
    color: "cyan",
    tags: ["Retrieval"],
  },
  {
    icon: GitBranch,
    title: "Memory Namespaces",
    description: "Hierarchical organization with permissions. Isolate memory spaces per user, session, team, or custom scope.",
    technical: "Bi-temporal facts with time-travel queries",
    color: "green",
    tags: ["Storage", "Multi-Agent"],
  },
  {
    icon: Clock,
    title: "Prospective Memory",
    description: "\"Remembering to remember\" — schedule future actions with time-based or event-based triggers. Supports daily, weekly, monthly, and custom cron recurrence.",
    technical: "POST /v1/prospective/ · 9 endpoints · croniter recurrence",
    color: "purple",
    tags: ["Automation", "New in v0.5.1"],
  },
  {
    icon: Layers,
    title: "Batch Operations",
    description: "Store, fetch, or delete hundreds of memories in a single API call. Deduplication endpoint with dry_run mode. Individual failures never abort the batch.",
    technical: "POST /v1/memories/batch · /batch/get · /batch/delete · /deduplicate",
    color: "cyan",
    tags: ["Storage", "New in v0.5.1"],
  },
  {
    icon: MessageSquare,
    title: "Session Management",
    description: "Track multi-turn conversations as structured sessions. Automatic LLM-powered summarization when sessions hit a threshold. Semantic search across sessions.",
    technical: "create / update / complete / delete · session summarization",
    color: "green",
    tags: ["Multi-Agent", "Platform"],
  },
  {
    icon: FileStack,
    title: "Context Assembly",
    description: "Smart context-pack generation for RAG. Token budget management automatically selects and ranks memories that fit within your model's context window.",
    technical: "token-budget aware · automatic context pack generation",
    color: "purple",
    tags: ["Retrieval", "Platform"],
  },
  {
    icon: CalendarClock,
    title: "Bi-Temporal Facts",
    description: "Track both valid time (when a fact was true) and transaction time (when recorded). Run time-travel queries to reconstruct any past state.",
    technical: "valid_time + transaction_time · historical state reconstruction",
    color: "amber",
    tags: ["Storage"],
  },
  {
    icon: Globe,
    title: "Remote Backend",
    description: "Point the Python library at a running HippocampAI API server instead of embedding storage locally. Great for microservices and serverless.",
    technical: "RemoteBackend(url=...) · 90s timeout · all SDK methods",
    color: "rose",
    tags: ["Platform", "New in v0.5.1"],
  },
]

const ALL_TAGS: Tag[] = ["All", "Retrieval", "Multi-Agent", "Storage", "Automation", "Platform", "New in v0.5.1"]

const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  cyan: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-600", iconBg: "bg-cyan-100" },
  green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-600", iconBg: "bg-green-100" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-600", iconBg: "bg-purple-100" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-600", iconBg: "bg-amber-100" },
  rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-600", iconBg: "bg-rose-100" },
}

export function Capabilities() {
  const [activeTag, setActiveTag] = useState<Tag>("All")

  const filtered = activeTag === "All"
    ? capabilities
    : capabilities.filter((c) => c.tags.includes(activeTag))

  return (
    <section className="py-20 px-6 bg-slate-50/50" id="capabilities">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            Everything you need for AI memory
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From knowledge graphs to multi-agent collaboration — all the primitives for building memory-enabled AI applications
          </p>
        </motion.div>

        {/* Filter tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTag === tag
                  ? tag === "New in v0.5.1"
                    ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                    : "bg-slate-800 text-white shadow-md"
                  : tag === "New in v0.5.1"
                    ? "bg-cyan-50 text-cyan-700 border border-cyan-200 hover:bg-cyan-100"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {tag}
              {tag !== "All" && (
                <span className={`ml-1.5 text-xs ${activeTag === tag ? "opacity-70" : "opacity-40"}`}>
                  {tag === "New in v0.5.1"
                    ? capabilities.filter(c => c.tags.includes("New in v0.5.1")).length
                    : capabilities.filter(c => c.tags.includes(tag)).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((capability) => {
              const colors = colorMap[capability.color]
              const isNew = capability.tags.includes("New in v0.5.1")
              return (
                <motion.div
                  key={capability.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`relative bg-white rounded-xl border p-6 hover:shadow-md transition-all ${
                    isNew ? "border-cyan-200 ring-1 ring-cyan-100" : "border-slate-200 hover:border-cyan-200"
                  }`}
                >
                  {isNew && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
                      New
                    </span>
                  )}
                  <div className={`w-10 h-10 rounded-lg ${colors.iconBg} flex items-center justify-center mb-4`}>
                    <capability.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{capability.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {capability.description}
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    {capability.technical}
                  </p>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">No capabilities match this filter.</p>
        )}
      </div>
    </section>
  )
}
