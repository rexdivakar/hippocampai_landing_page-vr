"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check, Github, BookOpen, ChevronDown } from "lucide-react"
import Link from "next/link"

const outputExamples: Record<string, string> = {
  "Remember & Recall": `# Output of client.recall(...)
[
  RecallResult(
    score=0.94,
    memory=Memory(
      id="mem_a1b2c3",
      text="User prefers oat milk and works remotely on Tuesdays",
      type="preference",
      user_id="alice",
      importance=0.82,
      created_at="2026-04-09T10:23:44Z"
    )
  ),
  RecallResult(score=0.78, memory=Memory(...)),
]`,
  "Batch Operations": `# Output of client.batch_remember(...)
["mem_abc123", "mem_def456", "mem_ghi789"]

# Output of client.get_memory("mem_abc123")
Memory(id="mem_abc123", text="Prefers dark mode", type="preference", ...)

# Output of client.deduplicate(dry_run=True)
DeduplicationReport(
  duplicate_count=3,
  groups=[
    ["mem_aaa", "mem_bbb"],   # near-identical preference entries
    ["mem_ccc", "mem_ddd", "mem_eee"],
  ]
)`,
  "Prospective Memory": `# Output of client.prospective.create(...)
ProspectiveIntent(
  id="intent_x9y8z7",
  text="Follow up with Bob about the Q2 roadmap",
  status=ProspectiveStatus.PENDING,
  trigger_type=ProspectiveTriggerType.TIME,
  trigger_at="2026-04-11T09:00:00",
  recurrence="weekly",
  priority=8,
  user_id="alice"
)

# During recall(), triggered intents appear automatically:
RecallResult(
  score=1.0,
  is_prospective=True,
  memory=Memory(text="Follow up with Bob...", priority=8)
)`,
  "Knowledge Graph": `# Output of client.graph.get_entities(...)
[
  Entity(name="Alice", type="person", confidence=0.97),
  Entity(name="ML team", type="team", confidence=0.91),
  Entity(name="Acme Corp", type="org", confidence=0.88),
]

# Output of client.graph.get_relations(entity="Alice")
[
  Relation(source="Alice", relation="manages", target="ML team"),
  Relation(source="Alice", relation="works_at", target="Acme Corp"),
  Relation(source="Alice", relation="reports_to", target="Bob"),
]`,
  "Multi-Agent": `# Output of client.recall(...)
[
  RecallResult(
    score=0.91,
    memory=Memory(
      text="Customer reported billing issue #4521",
      agent_id="triage_agent",
      user_id="support_team",
      type="event",
    )
  )
]`,
  "Sessions": `# Output of client.sessions.create(...)
Session(
  id="sess_q1w2e3",
  user_id="alice",
  title="Q2 planning",
  status="active",
  turn_count=0,
  summary=None
)

# After client.sessions.complete(...)
Session(
  id="sess_q1w2e3",
  status="completed",
  turn_count=4,
  summary="Alice discussed Q2 deadline (March 15th) and confirmed ownership."
)`,
  "Context Assembly": `# Output of client.context.assemble(...)
ContextPack(
  token_count=847,
  memories=[
    Memory(text="Prefers oat milk, works remotely Tuesdays", score=0.94),
    Memory(text="Timezone: America/New_York", score=0.88),
    Memory(text="Uses dark mode, keyboard shortcuts enthusiast", score=0.81),
  ],
  text="""
User preferences:
- Prefers oat milk, works remotely on Tuesdays
- Timezone: America/New_York
- Uses dark mode, keyboard shortcuts enthusiast
  """
)`,
  "Sleep Phase": `# Output of client.sleep_phase(...)
SleepResult(
  consolidated=12,    # memories merged
  pruned=3,           # low-importance memories removed
  decayed=47,         # importance scores updated
  health_score=0.91,  # 0-1, higher is better
  duration_ms=1842
)`,
}

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
  const [outputOpen, setOutputOpen] = useState(false)

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
                  onClick={() => { setActiveTab(tab); setOutputOpen(false) }}
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
              <pre className="p-6 overflow-x-auto max-h-72">
                <code className="text-sm text-slate-300 font-mono whitespace-pre">
                  {codeExamples[activeTab]}
                </code>
              </pre>

              {/* Output toggle */}
              {outputExamples[activeTab] && (
                <div className="border-t border-slate-700">
                  <button
                    onClick={() => setOutputOpen((o) => !o)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Output preview
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${outputOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {outputOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <pre className="p-4 pt-0 overflow-x-auto border-t border-slate-800 bg-slate-950 max-h-56">
                          <code className="text-xs text-emerald-300 font-mono whitespace-pre">
                            {outputExamples[activeTab]}
                          </code>
                        </pre>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
