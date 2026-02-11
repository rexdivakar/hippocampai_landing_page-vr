"use client"

import { motion } from "framer-motion"
import {
  Database, Search, TrendingDown, Star, Users, Cpu,
  GitBranch, Bell, Brain, Puzzle, Shield, BarChart3
} from "lucide-react"

const capabilities = [
  {
    icon: Brain,
    title: "Knowledge Graph",
    description: "Real-time entity and relationship extraction on every remember() call. Build structured knowledge automatically from unstructured text.",
    technical: "3-way RRF fusion: vector + BM25 + graph retrieval",
    color: "cyan"
  },
  {
    icon: Search,
    title: "Hybrid Retrieval",
    description: "Combines semantic search, BM25 keyword matching, and graph-aware retrieval with Reciprocal Rank Fusion for optimal results.",
    technical: "40% accuracy improvement over vector-only search",
    color: "green"
  },
  {
    icon: Users,
    title: "Multi-Agent Collaboration",
    description: "Shared memory spaces for agent coordination. Multiple AI agents can read, write, and reason over collective memories.",
    technical: "Agent-scoped access with shared namespaces",
    color: "purple"
  },
  {
    icon: TrendingDown,
    title: "Sleep Phase Consolidation",
    description: "Bio-inspired memory consolidation merges related memories, decays importance scores, and prunes low-value data automatically.",
    technical: "Inspired by human memory consolidation during sleep",
    color: "amber"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Pattern detection, habit tracking, and behavioral insights. Predict memory usage patterns and forecast future needs.",
    technical: "Cross-session analytics with temporal reasoning",
    color: "rose"
  },
  {
    icon: Shield,
    title: "Auto-Healing",
    description: "Automatic detection and repair of memory issues. Health monitoring, duplicate detection, and quality tracking built in.",
    technical: "Self-monitoring with configurable health thresholds",
    color: "green"
  },
  {
    icon: Bell,
    title: "Memory Triggers",
    description: "Event-driven actions via webhooks, websocket, and log triggers. React to memory events in real-time across your system.",
    technical: "Configurable trigger rules with filter conditions",
    color: "cyan"
  },
  {
    icon: Cpu,
    title: "Procedural Memory",
    description: "Self-optimizing prompts via learned behavioral rules. Your AI learns how to communicate better over time.",
    technical: "Feedback loops with exponential decay scoring",
    color: "purple"
  },
  {
    icon: Puzzle,
    title: "Plugin System",
    description: "Extensible architecture with custom processors, scorers, retrievers, and filters. Build exactly the memory system you need.",
    technical: "Custom schemas, tiered storage, export/import",
    color: "amber"
  },
  {
    icon: Database,
    title: "SaaS Platform",
    description: "Full multi-tenant platform with authentication, rate limiting, Celery background tasks, and a React dashboard.",
    technical: "pip install hippocampai[saas] for full platform",
    color: "rose"
  },
  {
    icon: Star,
    title: "Importance Scoring",
    description: "Not all memories are equal. Automatic importance scoring with access-based boosting and configurable decay rates.",
    technical: "Time-weighted scoring with relevance feedback",
    color: "cyan"
  },
  {
    icon: GitBranch,
    title: "Memory Namespaces",
    description: "Hierarchical organization with permissions. Isolate memory spaces per user, session, team, or custom scope.",
    technical: "Bi-temporal facts with time-travel queries",
    color: "green"
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  cyan: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-600", iconBg: "bg-cyan-100" },
  green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-600", iconBg: "bg-green-100" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-600", iconBg: "bg-purple-100" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-600", iconBg: "bg-amber-100" },
  rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-600", iconBg: "bg-rose-100" },
}

export function Capabilities() {
  return (
    <section className="py-20 px-6 bg-slate-50/50" id="capabilities">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            Everything you need for AI memory
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From knowledge graphs to multi-agent collaboration — all the primitives for building memory-enabled AI applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const colors = colorMap[capability.color]
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:border-cyan-200 hover:shadow-md transition-all"
              >
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
        </div>
      </div>
    </section>
  )
}
