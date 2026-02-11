"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, Github, BookOpen } from "lucide-react"
import Link from "next/link"

const codeExamples: Record<string, string> = {
  "Remember & Recall": `from hippocampai import MemoryClient

# Initialize client
client = MemoryClient()

# Store a memory
client.remember(
    "User prefers oat milk and works remotely on Tuesdays",
    user_id="alice",
    type="preference"
)

# Recall relevant memories
results = client.recall("work preferences", user_id="alice")
for r in results:
    print(f"{r.memory.text} (relevance: {r.score:.2f}")`,
  "Knowledge Graph": `# Knowledge graph is built automatically on every remember()
client.remember(
    "Alice manages the ML team and reports to Bob",
    user_id="org_123",
    type="fact"
)

# Query entities and relationships
entities = client.graph.get_entities(user_id="org_123")
relations = client.graph.get_relations(entity="Alice")

# Graph-aware retrieval (vector + BM25 + graph)
results = client.recall(
    "Who does Alice work with?",
    user_id="org_123",
    use_graph=True
)`,
  "Multi-Agent": `# Shared memory space for agent collaboration
client.remember(
    "Customer reported billing issue #4521",
    user_id="support_team",
    agent_id="triage_agent",
    type="event"
)

# Another agent recalls shared context
results = client.recall(
    "open billing issues",
    user_id="support_team",
    agent_id="resolution_agent"
)`,
  "Sleep Phase": `# Run memory consolidation (like human sleep)
result = client.sleep_phase(
    user_id="alice",
    consolidate=True,
    decay_importance=True,
    prune_threshold=0.3
)

print(f"Consolidated: {result.consolidated}")
print(f"Pruned: {result.pruned}")
print(f"Health score: {result.health_score}")`
}

export function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState("Remember & Recall")
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-6" id="developer-experience">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">
              Simple API, powerful features
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Get started in minutes with our intuitive Python SDK. 102+ methods covering
              memory storage, retrieval, knowledge graphs, multi-agent coordination, and more.
            </p>

            {/* Install command */}
            <div className="bg-slate-900 rounded-lg p-3 mb-6 flex items-center justify-between">
              <code className="text-sm text-cyan-400 font-mono">pip install hippocampai</code>
              <span className="text-xs text-slate-500 font-mono">PyPI</span>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.keys(codeExamples).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/rexdivakar/HippocampAI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-full text-sm font-medium hover:bg-cyan-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                API Reference
              </Link>
            </div>
          </motion.div>

          {/* Right side - Code */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-slate-400 ml-2">example.py</span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? (
                    <><Check className="w-4 h-4 text-green-400" /> Copied</>
                  ) : (
                    <><Copy className="w-4 h-4" /> Copy</>
                  )}
                </button>
              </div>

              {/* Code */}
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm text-slate-300 font-mono whitespace-pre">
                  {codeExamples[activeTab]}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
