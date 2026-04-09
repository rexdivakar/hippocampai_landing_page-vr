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
  "Batch Operations": `from hippocampai import MemoryClient

client = MemoryClient()

# Store many memories in one call — individual failures
# are logged but never abort the batch
ids = client.batch_remember([
    {"text": "Prefers dark mode", "user_id": "alice"},
    {"text": "timezone: America/New_York", "user_id": "alice"},
    {"text": "Team standup at 10am", "user_id": "alice"},
], user_id="alice")

# Fetch a specific memory by ID
memory = client.get_memory(ids[0])
print(memory.text)

# Deduplicate — dry_run=True to inspect first
report = client.deduplicate(user_id="alice", dry_run=True)
print(f"Would remove {report.duplicate_count} duplicates")`,
  "Prospective Memory": `from hippocampai import MemoryClient
from hippocampai.models import ProspectiveTriggerType

client = MemoryClient()

# Remind the agent to follow up in 2 days
intent = client.prospective.create(
    user_id="alice",
    text="Follow up with Bob about the Q2 roadmap",
    trigger_type=ProspectiveTriggerType.TIME,
    trigger_at="2026-04-11T09:00:00",
    recurrence="weekly",
    priority=8,
)

# Or fire when a relevant topic is recalled
intent = client.prospective.create(
    user_id="alice",
    text="Remind about medication when health topic appears",
    trigger_type=ProspectiveTriggerType.EVENT,
    trigger_keywords=["health", "medical", "doctor"],
)

# Triggered intents surface automatically during recall()
results = client.recall("health update", user_id="alice")
# → includes the prospective intent above`,
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
  "Sessions": `from hippocampai import MemoryClient

client = MemoryClient()

# Start a conversation session
session = client.sessions.create(
    user_id="alice",
    title="Q2 planning chat",
    metadata={"channel": "slack"},
)

# Add turns as the conversation progresses
client.sessions.add_turn(session.id, role="user",   content="What's the deadline?")
client.sessions.add_turn(session.id, role="assistant", content="March 15th per Jira.")

# When the session reaches a threshold HippocampAI
# auto-summarizes it via LLM and stores the summary
# as a persistent memory — no extra work needed.
client.sessions.complete(session.id)

# Search across all past sessions semantically
results = client.sessions.search(
    "deadline discussions",
    user_id="alice",
    limit=5
)`,
  "Context Assembly": `from hippocampai import MemoryClient

client = MemoryClient()

# Build a context pack that fits within a token budget
# — HippocampAI ranks and selects the most relevant
#   memories automatically
pack = client.context.assemble(
    query="What does Alice prefer?",
    user_id="alice",
    token_budget=2000,      # tokens available for memory
    include_types=["preference", "fact"],
)

# Use the assembled context in your LLM prompt
prompt = f"""
<context>
{pack.text}
</context>

User question: What does Alice prefer?
"""

print(f"Used {pack.token_count} / 2000 tokens")
print(f"Included {len(pack.memories)} memories")`,
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
              Get started in minutes with our intuitive Python SDK. 120+ methods covering
              memory storage, retrieval, batch operations, prospective memory, knowledge graphs, multi-agent coordination, and more.
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
