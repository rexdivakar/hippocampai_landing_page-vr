"use client"

import { motion } from "framer-motion"
import { Database, Search, TrendingDown, Star, Users, Cpu } from "lucide-react"

const capabilities = [
  {
    icon: Database,
    title: "Long-term Memory",
    description: "Persistent storage with vector embeddings. Memories survive restarts, scale across users, and maintain semantic relationships.",
    technical: "Qdrant-backed vector storage with metadata indexing"
  },
  {
    icon: Search,
    title: "Hybrid Retrieval",
    description: "Combines semantic search with BM25 keyword matching. Configurable weights let you tune precision vs recall for your use case.",
    technical: "40% accuracy improvement over vector-only search"
  },
  {
    icon: TrendingDown,
    title: "Consolidation & Decay",
    description: "Sleep phase consolidation merges related memories. Importance scores decay over time, keeping your memory store relevant.",
    technical: "Inspired by human memory consolidation during sleep"
  },
  {
    icon: Star,
    title: "Importance Scoring",
    description: "Not all memories are equal. Assign and track importance scores that influence retrieval ranking and pruning decisions.",
    technical: "Configurable decay rates and access-based boosting"
  },
  {
    icon: Users,
    title: "Multi-tenant Isolation",
    description: "Built-in user and session scoping. Each user gets isolated memory spaces with zero configuration required.",
    technical: "Automatic namespace isolation with session tracking"
  },
  {
    icon: Cpu,
    title: "Agent-friendly APIs",
    description: "Designed for autonomous agents. Simple primitives that compose into complex memory workflows.",
    technical: "Python-first SDK with async support"
  }
]

export function Capabilities() {
  return (
    <section className="py-24 px-6 border-t border-border/50 bg-secondary/30" id="capabilities">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Core Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            System-level primitives for building memory-enabled AI applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <capability.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{capability.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {capability.description}
              </p>
              <p className="text-xs text-muted-foreground/70 font-mono">
                {capability.technical}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
