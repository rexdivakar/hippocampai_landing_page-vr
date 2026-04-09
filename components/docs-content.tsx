"use client"

import { useState, useEffect } from "react"
import {
  BookOpen, Terminal, Zap, Layers, Code, Settings,
  Server, HelpCircle, Copy, Check, ChevronRight,
  Database, Search, Moon, Users, Tag, Shield,
  ArrowRight, ExternalLink, MessageSquare, Bot, FileText, Sparkles,
  GitBranch, Bell, Cpu, Puzzle, BarChart3, Network, Clock
} from "lucide-react"
import Link from "next/link"

const sections = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "installation", label: "Installation", icon: Terminal },
  { id: "quick-start", label: "Quick Start", icon: Zap },
  { id: "core-concepts", label: "Core Concepts", icon: Layers },
  { id: "memory-types", label: "Memory Types", icon: Database },
  { id: "knowledge-graph", label: "Knowledge Graph", icon: GitBranch },
  { id: "multi-agent", label: "Multi-Agent", icon: Users },
  { id: "sessions", label: "Sessions", icon: MessageSquare },
  { id: "context-assembly", label: "Context Assembly", icon: FileText },
  { id: "bitemporal", label: "Bi-Temporal Facts", icon: Tag },
  { id: "api-reference", label: "API Reference", icon: Code },
  { id: "prospective-memory", label: "Prospective Memory", icon: Clock },
  { id: "batch-ops", label: "Batch Operations", icon: Layers },
  { id: "security", label: "Security & Auth", icon: Shield },
  { id: "monitoring", label: "Monitoring", icon: HelpCircle },
  { id: "configuration", label: "Configuration", icon: Settings },
  { id: "deployment", label: "Deployment", icon: Server },
  { id: "infrastructure", label: "Infrastructure", icon: Network },
  { id: "best-practices", label: "Best Practices", icon: Shield },
]

// Brain logo component
function BrainLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8C20 8 16 8 14 10C12 12 12 14 12 16C10 16 8 18 8 20C8 22 9 24 11 25C11 27 12 29 14 30C16 31 18 31 20 31M20 8C20 8 24 8 26 10C28 12 28 14 28 16C30 16 32 18 32 20C32 22 31 24 29 25C29 27 28 29 26 30C24 31 22 31 20 31M20 8V31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 16C14 16 16 18 20 18C24 18 26 16 26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 22C12 22 15 24 20 24C25 24 28 22 28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function DocsContent() {
  const [activeSection, setActiveSection] = useState("overview")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash && sections.some(s => s.id === hash)) {
      setActiveSection(hash)
    }
  }, [])

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const CodeBlock = ({ code, language = "python", id }: { code: string; language?: string; id: string }) => (
    <div className="relative group my-4">
      <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-800/50">
          <span className="text-xs text-slate-400 font-mono">{language}</span>
          <button
            onClick={() => copyCode(code, id)}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            {copiedCode === id ? (
              <><Check className="h-3.5 w-3.5 text-emerald-400" /> Copied</>
            ) : (
              <><Copy className="h-3.5 w-3.5" /> Copy</>
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-slate-300 font-mono">{code}</code>
        </pre>
      </div>
    </div>
  )

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24 bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-4 w-4 text-cyan-500" />
                <h3 className="font-semibold text-slate-800">Documentation</h3>
              </div>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? "bg-cyan-50 text-cyan-700 font-medium"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <section.icon className="h-4 w-4" />
                    {section.label}
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <a
                  href="https://github.com/rexdivakar/HippocampAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-600 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  View on GitHub
                </a>
                <Link
                  href="/examples"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-600 transition-colors"
                >
                  <Code className="h-4 w-4" />
                  View Examples
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 bg-white rounded-xl border border-slate-200 p-8">

            {/* Overview */}
            {activeSection === "overview" && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan-50 rounded-xl border border-cyan-100">
                    <BrainLogo className="h-10 w-10 text-cyan-500" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900">HippocampAI</h1>
                    <p className="text-slate-500">Enterprise Memory Engine for Intelligent AI Systems</p>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  HippocampAI is a production-ready, open-source memory engine that transforms how AI systems
                  remember, reason, and learn from interactions. It provides persistent, intelligent memory
                  capabilities with 120+ API methods covering knowledge graphs, hybrid retrieval, prospective memory,
                  batch operations, multi-agent collaboration, and more.
                </p>

                <p className="text-slate-600 leading-relaxed mb-8">
                  Named after the hippocampus — the brain region responsible for memory formation — it gives
                  AI systems human-like memory capabilities: storing preferences, tracking facts, detecting
                  behavioral patterns, and delivering personalized experiences across sessions.
                </p>

                <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-100 mb-8">
                  <p className="text-sm text-cyan-800 font-medium">Current Release: v0.5.1</p>
                  <p className="text-sm text-cyan-700 mt-1">Prospective memory (time &amp; event triggers), batch operations, deduplication API, RemoteBackend fixes, QueryRouter stem-prefix matching, and Groq timeout improvements.</p>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: GitBranch, title: "Knowledge Graph", desc: "Real-time entity & relationship extraction on every remember() call. Graph-aware retrieval with 3-way RRF fusion." },
                    { icon: Search, title: "Hybrid Retrieval", desc: "Vector similarity + BM25 keyword + graph traversal combined via Reciprocal Rank Fusion for 40% better accuracy." },
                    { icon: Users, title: "Multi-Agent Collaboration", desc: "Shared memory spaces for agent coordination. Multiple agents can remember and recall from collective knowledge." },
                    { icon: Moon, title: "Sleep Phase Consolidation", desc: "Bio-inspired memory consolidation: merge related memories, decay importance scores, prune low-value data." },
                    { icon: Bell, title: "Memory Triggers", desc: "Event-driven webhooks, websocket, and log actions that fire on memory creation, updates, or retrieval." },
                    { icon: Cpu, title: "Procedural Memory", desc: "Self-optimizing prompts via learned behavioral rules. AI learns to communicate better over time." },
                    { icon: BarChart3, title: "Predictive Analytics", desc: "Pattern detection, habit tracking, and behavioral insights with cross-session temporal reasoning." },
                    { icon: Shield, title: "Auto-Healing", desc: "Automatic detection and repair of memory issues. Health monitoring and quality tracking built in." },
                    { icon: Puzzle, title: "Plugin System", desc: "Custom processors, scorers, retrievers, and filters. Custom schemas, tiered storage, export/import." },
                    { icon: Database, title: "SaaS Platform", desc: "Full multi-tenant platform with auth, rate limiting, Celery background tasks, and React dashboard." },
                    { icon: Sparkles, title: "Prospective Memory", desc: "Schedule future actions with time-based or event-based triggers. Recurrence (daily/weekly/cron), priority ordering, full lifecycle management." },
                    { icon: Layers, title: "Batch Operations", desc: "Store/get/delete N memories in a single call. Deduplication with dry_run mode. Single-memory GET by ID." },
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <feature.icon className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-slate-800">{feature.title}</h4>
                        <p className="text-sm text-slate-500 mt-1">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Architecture Overview</h2>
                <p className="text-slate-600 mb-4">
                  HippocampAI follows a pipeline architecture with knowledge graph integration:
                </p>
                <div className="bg-slate-50 rounded-xl p-6 mb-6 border border-slate-100">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {["Ingestion", "Embedding", "Dedup", "Knowledge Graph", "Storage", "Retrieval"].map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">
                          {step}
                        </div>
                        {i < 5 && <ArrowRight className="h-4 w-4 text-slate-400" />}
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Package Structure</h2>
                <p className="text-slate-600 mb-4">HippocampAI is organized into two packages for flexibility:</p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
                  <ul className="space-y-2 text-slate-600">
                    <li><strong>hippocampai.core</strong> — Core memory engine (lightweight, no SaaS deps). For library integration and embedded use.</li>
                    <li><strong>hippocampai.platform</strong> — SaaS platform (API, auth, Celery, monitoring). For self-hosted SaaS deployment.</li>
                  </ul>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "FastAPI", "Qdrant", "Redis", "OpenAI", "Anthropic", "Groq", "Ollama", "Docker", "Celery", "React"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Why HippocampAI?</h2>
                <ul className="space-y-3 text-slate-600">
                  {[
                    { label: "Open Source", desc: "Apache 2.0 license, free to use and modify" },
                    { label: "120+ API Methods", desc: "Comprehensive coverage of all memory use cases" },
                    { label: "Production Ready", desc: "Redis caching (50-100x faster), 1000+ RPS, auto-healing" },
                    { label: "Multi-Provider", desc: "OpenAI, Anthropic, Groq, Ollama, or any custom provider" },
                    { label: "Privacy First", desc: "Self-hosted, your data never leaves your infrastructure" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>{item.label}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}


            {/* Installation */}
            {activeSection === "installation" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Installation</h1>
                <p className="text-slate-600 mb-6">Get HippocampAI up and running in your environment.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Core Library (Lightweight)</h2>
                <CodeBlock code="pip install hippocampai" language="bash" id="pip-install" />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">With Provider Extras</h2>
                <CodeBlock
                  code={`# With specific LLM providers
pip install "hippocampai[openai]"      # OpenAI support
pip install "hippocampai[anthropic]"   # Anthropic Claude
pip install "hippocampai[groq]"        # Groq support

# With SaaS features (API, auth, background tasks)
pip install "hippocampai[saas]"

# Everything (all features + development tools)
pip install "hippocampai[all,dev]"`}
                  language="bash"
                  id="pip-extras"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">From Source</h2>
                <CodeBlock
                  code={`git clone https://github.com/rexdivakar/HippocampAI.git
cd HippocampAI
pip install -e ".[all,dev]"`}
                  language="bash"
                  id="source-install"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Using Docker</h2>
                <CodeBlock
                  code={`git clone https://github.com/rexdivakar/HippocampAI.git
cd HippocampAI
cp .env.example .env
# Edit .env with your configuration
docker-compose up -d`}
                  language="bash"
                  id="docker-install"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Requirements</h2>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500" />Python 3.9 or higher</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500" />An LLM provider API key (OpenAI, Anthropic, Groq, or local via Ollama)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500" />Docker & Docker Compose (optional, for managed deployment)</li>
                  </ul>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Environment Variables</h2>
                <CodeBlock
                  code={`# LLM Provider (choose one)
LLM_PROVIDER=openai          # or: anthropic, groq, ollama
LLM_MODEL=gpt-4              # or: claude-3, llama3, etc.

# For local development
QDRANT_URL=http://localhost:6333

# For Ollama (local models, no API key needed)
LLM_PROVIDER=ollama
LLM_MODEL=qwen2.5:7b-instruct`}
                  language="bash"
                  id="env-vars"
                />
              </div>
            )}

            {/* Quick Start */}
            {activeSection === "quick-start" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Quick Start</h1>
                <p className="text-slate-600 mb-6">Get up and running with HippocampAI in 30 seconds.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Install</h2>
                <CodeBlock code="pip install hippocampai" language="bash" id="qs-install" />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">2. Your First Memory</h2>
                <CodeBlock
                  code={`from hippocampai import MemoryClient

# Initialize client
client = MemoryClient()

# Store a memory
memory = client.remember(
    "I prefer oat milk in my coffee and work remotely on Tuesdays",
    user_id="alice",
    type="preference"
)

# Recall memories
results = client.recall("work preferences", user_id="alice")
print(f"Found: {results[0].memory.text}")`}
                  language="python"
                  id="qs-first-memory"
                />

                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 my-6">
                  <p className="text-emerald-800 font-medium">That&apos;s it! You now have intelligent memory for your AI application.</p>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">3. Knowledge Graph (Automatic)</h2>
                <CodeBlock
                  code={`# Knowledge graph is built automatically on every remember()
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
)`}
                  language="python"
                  id="qs-knowledge-graph"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">4. Multi-Agent Memory</h2>
                <CodeBlock
                  code={`# Shared memory space for agent collaboration
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
)`}
                  language="python"
                  id="qs-multi-agent"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">5. Sleep Phase (Memory Consolidation)</h2>
                <CodeBlock
                  code={`result = client.sleep_phase(
    user_id="alice",
    consolidate=True,
    decay_importance=True,
    prune_threshold=0.3
)

print(f"Consolidated: {result.consolidated}")
print(f"Pruned: {result.pruned}")
print(f"Health score: {result.health_score}")`}
                  language="python"
                  id="qs-sleep-phase"
                />
              </div>
            )}


            {/* Core Concepts */}
            {activeSection === "core-concepts" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Core Concepts</h1>
                <p className="text-slate-600 mb-6">Understanding the key concepts behind HippocampAI.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">3-Way Hybrid Retrieval</h2>
                <p className="text-slate-600 mb-4">
                  HippocampAI combines three search methods via Reciprocal Rank Fusion (RRF) for optimal results:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                    <h4 className="font-medium text-cyan-800 mb-2">Vector Similarity</h4>
                    <p className="text-sm text-cyan-700">Semantic embedding search for understanding meaning and context.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <h4 className="font-medium text-purple-800 mb-2">BM25 Keywords</h4>
                    <p className="text-sm text-purple-700">Traditional keyword matching ensures exact terms aren&apos;t missed.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                    <h4 className="font-medium text-green-800 mb-2">Graph Traversal</h4>
                    <p className="text-sm text-green-700">Knowledge graph relationships provide structured context.</p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Knowledge Graph</h2>
                <p className="text-slate-600 mb-4">
                  On every <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm">remember()</code> call, HippocampAI automatically extracts entities
                  and relationships from unstructured text, building an incremental knowledge graph. This enables
                  graph-aware retrieval that understands connections between concepts.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Auto-Deduplication</h2>
                <p className="text-slate-600 mb-4">
                  Automatically detects similar content (configurable threshold, default 85%) and either merges or
                  skips duplicates. Typically saves 30-70% storage while improving retrieval quality.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Sleep Phase Consolidation</h2>
                <p className="text-slate-600 mb-4">Inspired by how human memory consolidates during sleep:</p>
                <ul className="space-y-2 text-slate-600 mb-4">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" /><span><strong>Consolidation:</strong> Merges related memories into coherent summaries</span></li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" /><span><strong>Importance Decay:</strong> Reduces scores of old, unused memories</span></li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" /><span><strong>Pruning:</strong> Removes low-value memories below threshold</span></li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" /><span><strong>Auto-Healing:</strong> Detects and repairs memory quality issues</span></li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Memory Triggers</h2>
                <p className="text-slate-600 mb-4">
                  Event-driven actions that fire when specific memory events occur. Configure webhooks,
                  websocket notifications, and log actions that react to memory creation, updates, or retrieval
                  in real-time.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Procedural Memory</h2>
                <p className="text-slate-600 mb-4">
                  Self-optimizing prompts via learned behavioral rules. Through relevance feedback loops with
                  exponential decay scoring, HippocampAI learns how your AI should communicate better over time.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Importance Scoring</h2>
                <p className="text-slate-600 mb-4">
                  Each memory has an importance score (0-1) that affects retrieval priority. Scores are boosted
                  by access patterns and decay over time. Relevance feedback from users further refines scoring.
                </p>
              </div>
            )}

            {/* Memory Types */}
            {activeSection === "memory-types" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Memory Types</h1>
                <p className="text-slate-600 mb-6">HippocampAI supports rich memory types beyond simple vectors.</p>

                <div className="space-y-4">
                  {[
                    { type: "preference", color: "amber", title: "Preferences", desc: "User settings, likes, dislikes, and personal choices.", code: `client.remember("User prefers email notifications", user_id="alice", type="preference")` },
                    { type: "fact", color: "green", title: "Facts", desc: "Factual information, knowledge, and data points. Supports bi-temporal tracking.", code: `client.remember("Company has 50 employees", user_id="alice", type="fact")` },
                    { type: "event", color: "cyan", title: "Events", desc: "Conversation messages, user actions, and interactions.", code: `client.remember("User asked about pricing", user_id="alice", type="event")` },
                    { type: "procedural", color: "purple", title: "Procedural", desc: "Behavioral rules learned from interaction patterns. Self-optimizing prompts.", code: `client.remember("User responds better to concise answers", user_id="alice", type="procedural")` },
                    { type: "goal", color: "rose", title: "Goals", desc: "User objectives, milestones, and progress tracking.", code: `client.remember("User wants to learn Python", user_id="alice", type="goal")` },
                    { type: "prospective", color: "cyan", title: "Prospective", desc: "Future-oriented reminders and scheduled actions. Fire at a specific time or when a recall query matches keywords/embeddings. Supports recurrence.", code: `# Create a time-based prospective intent\nintent = client.prospective.create(\n    user_id="alice",\n    text="Follow up on Q2 roadmap",\n    trigger_type="time",\n    trigger_at="2026-04-11T09:00:00",\n    recurrence="weekly",\n)` },
                    { type: "custom", color: "slate", title: "Custom Types", desc: "Define your own memory types with custom metadata and schemas.", code: `client.remember("Completed onboarding", user_id="alice", type="milestone", metadata={"step": 3})` },
                  ].map((item) => (
                    <div key={item.type} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 bg-${item.color}-100 text-${item.color}-700 text-xs font-medium rounded`}>{item.type}</span>
                        <h3 className="font-semibold text-slate-800">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-3">{item.desc}</p>
                      <CodeBlock code={item.code} language="python" id={`type-${item.type}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Knowledge Graph */}
            {activeSection === "knowledge-graph" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Knowledge Graph</h1>
                <p className="text-slate-600 mb-6">Real-time entity and relationship extraction with graph-aware retrieval.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Automatic Graph Building</h2>
                <p className="text-slate-600 mb-4">
                  Every <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm">remember()</code> call automatically extracts entities and
                  relationships, incrementally building a knowledge graph.
                </p>
                <CodeBlock
                  code={`# Entities and relationships are extracted automatically
client.remember(
    "Alice manages the ML team at Acme Corp and reports to Bob",
    user_id="org_123",
    type="fact"
)
# Extracted: Alice -> manages -> ML team
#            Alice -> works_at -> Acme Corp
#            Alice -> reports_to -> Bob`}
                  language="python"
                  id="kg-auto"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Querying the Graph</h2>
                <CodeBlock
                  code={`# Get entities
entities = client.graph.get_entities(user_id="org_123")

# Get relationships for an entity
relations = client.graph.get_relations(entity="Alice")

# Get the full subgraph around an entity
subgraph = client.graph.get_subgraph(entity="Alice", depth=2)`}
                  language="python"
                  id="kg-query"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Graph-Aware Retrieval</h2>
                <p className="text-slate-600 mb-4">
                  Enable 3-way RRF fusion (vector + BM25 + graph) for the best retrieval accuracy:
                </p>
                <CodeBlock
                  code={`# Standard recall (vector + BM25)
results = client.recall("team structure", user_id="org_123")

# Graph-aware recall (vector + BM25 + graph)
results = client.recall(
    "Who does Alice work with?",
    user_id="org_123",
    use_graph=True
)`}
                  language="python"
                  id="kg-retrieval"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Custom Schemas</h2>
                <p className="text-slate-600 mb-4">
                  Define custom entity and relationship types without code changes for domain-specific knowledge graphs.
                </p>
              </div>
            )}

            {/* Multi-Agent */}
            {activeSection === "multi-agent" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Multi-Agent Collaboration</h1>
                <p className="text-slate-600 mb-6">Shared memory spaces for agent coordination and collective knowledge building.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Shared Memory Spaces</h2>
                <p className="text-slate-600 mb-4">
                  Multiple agents can read, write, and reason over shared memories while maintaining agent-level attribution.
                </p>
                <CodeBlock
                  code={`# Agent 1: Triage agent stores customer issue
client.remember(
    "Customer reported billing issue #4521, premium tier",
    user_id="support_team",
    agent_id="triage_agent",
    type="event"
)

# Agent 2: Resolution agent recalls shared context
results = client.recall(
    "open billing issues for premium customers",
    user_id="support_team",
    agent_id="resolution_agent"
)

# Agent 3: Analytics agent tracks patterns
client.remember(
    "Billing issues increased 20% this week",
    user_id="support_team",
    agent_id="analytics_agent",
    type="fact"
)`}
                  language="python"
                  id="ma-shared"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Agent-Scoped Access</h2>
                <p className="text-slate-600 mb-4">
                  Each agent has its own namespace within shared memory spaces. Agents can access shared memories
                  while maintaining attribution of who stored what.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Memory Namespaces</h2>
                <p className="text-slate-600 mb-4">
                  Hierarchical organization with permissions. Isolate memory spaces per user, session, team,
                  or custom scope.
                </p>
                <CodeBlock
                  code={`# Team namespace
client.remember("Q4 target: $1M ARR", user_id="sales_team", type="goal")

# User-specific within team
client.remember("My target: 50 calls/week", user_id="sales_team/alice", type="goal")`}
                  language="python"
                  id="ma-namespaces"
                />
              </div>
            )}


            {/* Sessions */}
            {activeSection === "sessions" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Session Management</h1>
                <p className="text-slate-600 mb-6">
                  Sessions give you structured tracking of multi-turn conversations. Each session accumulates turns, and when it reaches a configurable threshold HippocampAI automatically summarizes it via LLM and persists the summary as a long-term memory — no manual plumbing required.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Basic Usage</h2>
                <CodeBlock
                  code={`from hippocampai import MemoryClient

client = MemoryClient()

# Create a session
session = client.sessions.create(
    user_id="alice",
    title="Q2 planning",
    metadata={"channel": "slack", "agent": "planner"},
)

# Add turns as the conversation progresses
client.sessions.add_turn(session.id, role="user",      content="What's the deadline?")
client.sessions.add_turn(session.id, role="assistant", content="March 15th per Jira.")
client.sessions.add_turn(session.id, role="user",      content="Who owns it?")
client.sessions.add_turn(session.id, role="assistant", content="Alice — she confirmed last week.")

# Complete — triggers LLM summarization if threshold reached
client.sessions.complete(session.id)

# Get the session
s = client.sessions.get(session.id)
print(s.summary)   # LLM-generated summary stored as a persistent memory`}
                  language="python"
                  id="sess-basic"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Semantic Search Across Sessions</h2>
                <CodeBlock
                  code={`# Search across all past sessions for a user
results = client.sessions.search(
    "deadline discussions",
    user_id="alice",
    limit=5
)

for r in results:
    print(f"Session: {r.session.title} — {r.excerpt}")`}
                  language="python"
                  id="sess-search"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Session Lifecycle</h2>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {["created", "→", "active", "→", "summarizing", "→", "completed"].map((s, i) => (
                    s === "→"
                      ? <span key={i} className="text-slate-400">→</span>
                      : <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-700">{s}</span>
                  ))}
                </div>
                <CodeBlock
                  code={`# Update metadata
client.sessions.update(session.id, metadata={"status": "reviewed"})

# List all sessions
sessions = client.sessions.list(user_id="alice", limit=20)

# Delete
client.sessions.delete(session.id)`}
                  language="python"
                  id="sess-lifecycle"
                />

                <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-100 mt-6">
                  <p className="text-sm text-cyan-800 font-medium">Auto-summarization</p>
                  <p className="text-sm text-cyan-700 mt-1">When a session's turn count reaches the configured threshold, HippocampAI runs LLM-based summarization in the background (via Celery) and stores the result as a <code>fact</code> memory with the session ID in metadata. All future recall() calls can surface this summary.</p>
                </div>
              </div>
            )}

            {/* Context Assembly */}
            {activeSection === "context-assembly" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Context Assembly</h1>
                <p className="text-slate-600 mb-6">
                  Context assembly automatically selects, ranks, and formats the most relevant memories to fit within your LLM's token budget. Instead of blindly stuffing a prompt with every recalled memory, HippocampAI gives you a precisely-sized context pack.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Assembling a Context Pack</h2>
                <CodeBlock
                  code={`from hippocampai import MemoryClient

client = MemoryClient()

# Ask for a context pack within a token budget
pack = client.context.assemble(
    query="What does Alice prefer at work?",
    user_id="alice",
    token_budget=2000,                      # tokens available for memory
    include_types=["preference", "fact"],   # optional type filter
    min_relevance=0.6,                      # optional relevance threshold
)

print(f"Token usage: {pack.token_count} / 2000")
print(f"Memories included: {len(pack.memories)}")
print(pack.text)   # formatted, ready to paste into a system prompt`}
                  language="python"
                  id="ctx-basic"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Using the Pack in a Prompt</h2>
                <CodeBlock
                  code={`pack = client.context.assemble(
    query=user_message,
    user_id="alice",
    token_budget=3000,
)

system_prompt = f"""You are a helpful assistant.

## What you know about this user:
{pack.text}

Answer based on the above context when relevant.
"""

# Now call your LLM with the assembled context
response = openai_client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user",   "content": user_message},
    ]
)`}
                  language="python"
                  id="ctx-prompt"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">How It Works</h2>
                <div className="space-y-3">
                  {[
                    { step: "1", title: "Recall", desc: "Runs a hybrid recall() with the provided query to fetch candidate memories." },
                    { step: "2", title: "Rank", desc: "Scores each memory by relevance, recency, and importance. Applies min_relevance filter." },
                    { step: "3", title: "Budget", desc: "Greedily selects memories from highest to lowest score until the token_budget is filled." },
                    { step: "4", title: "Format", desc: "Serializes selected memories into a human-readable text block ready for prompt injection." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-7 h-7 rounded-full bg-cyan-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{item.step}</div>
                      <div>
                        <div className="font-medium text-slate-800">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bi-Temporal */}
            {activeSection === "bitemporal" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Bi-Temporal Facts</h1>
                <p className="text-slate-600 mb-6">
                  Standard facts only track <em>when they were recorded</em>. Bi-temporal facts track two independent time axes: <strong>valid time</strong> (when the fact was true in the real world) and <strong>transaction time</strong> (when it was stored in the system). This lets you run time-travel queries and reconstruct any past state of your knowledge base.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-medium text-slate-800 mb-1">Valid Time</h4>
                    <p className="text-sm text-slate-500">When was this fact <em>true in reality</em>? Example: "Alice was CTO from Jan 2024 to Dec 2024."</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-medium text-slate-800 mb-1">Transaction Time</h4>
                    <p className="text-sm text-slate-500">When was this fact <em>recorded in the system</em>? Managed automatically — immutable once written.</p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Storing a Bi-Temporal Fact</h2>
                <CodeBlock
                  code={`from hippocampai import MemoryClient
from datetime import datetime

client = MemoryClient()

# Store a fact with explicit valid-time range
client.bitemporal.store(
    user_id="org_123",
    text="Alice is VP of Engineering",
    valid_from=datetime(2025, 1, 1),
    valid_to=datetime(2025, 12, 31),  # None = still valid
    type="fact",
)

# Store a correction — the old record is NOT deleted,
# only superseded for the overlapping valid period
client.bitemporal.store(
    user_id="org_123",
    text="Alice is Chief Technology Officer",
    valid_from=datetime(2026, 1, 1),
    valid_to=None,
    type="fact",
)`}
                  language="python"
                  id="bitemp-store"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Time-Travel Queries</h2>
                <CodeBlock
                  code={`# What was true on a specific date in the past?
facts = client.bitemporal.query(
    user_id="org_123",
    as_of_valid=datetime(2025, 6, 15),       # valid time
    as_of_transaction=None,                  # latest known info
)

# Full audit: what did we know, and when did we know it?
history = client.bitemporal.history(
    user_id="org_123",
    entity="Alice",
)

for entry in history:
    print(f"{entry.valid_from} – {entry.valid_to}: {entry.text}")
    print(f"  Recorded at: {entry.transaction_time}")`}
                  language="python"
                  id="bitemp-query"
                />

                <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mt-6">
                  <p className="text-sm text-amber-800 font-medium">When to use bi-temporal facts</p>
                  <p className="text-sm text-amber-700 mt-1">Use bi-temporal storage for facts that change over time and where audit trails matter: org charts, pricing, product specs, legal entities, or any domain where "what was true when?" is a real question.</p>
                </div>
              </div>
            )}

            {/* Security */}
            {activeSection === "security" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Security & Authentication</h1>
                <p className="text-slate-600 mb-6">
                  HippocampAI is self-hosted — your data never leaves your infrastructure. The SaaS platform tier adds JWT authentication, API key management, rate limiting, and a full audit trail.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Authentication (SaaS mode)</h2>
                <CodeBlock
                  code={`# Install SaaS tier
pip install "hippocampai[saas]"

# .env — set these before starting the server
JWT_SECRET_KEY=your-secret-key-min-32-chars
JWT_ALGORITHM=HS256
JWT_EXPIRY_HOURS=24

API_KEY_HEADER=X-API-Key
ENABLE_RATE_LIMITING=true
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW_SECONDS=60`}
                  language="bash"
                  id="sec-auth"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Audit Logging</h2>
                <CodeBlock
                  code={`# Audit log is written automatically for every API call.
# Configure retention and rotation in .env:
ENABLE_AUDIT_LOG=true
AUDIT_LOG_RETENTION_DAYS=90
AUDIT_LOG_PATH=./logs/audit.jsonl

# Each entry contains:
# timestamp, user_id, agent_id, operation, memory_id,
# ip_address, status_code, duration_ms`}
                  language="bash"
                  id="sec-audit"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Data Privacy</h2>
                <div className="space-y-3">
                  {[
                    { title: "Self-hosted", desc: "All data stays in your Qdrant and Redis instances. No cloud sync, no telemetry." },
                    { title: "Delete by user", desc: "client.delete_all(user_id='alice') removes all memories, sessions, and graph nodes for that user in one call. Suitable for GDPR right-to-erasure." },
                    { title: "Namespace isolation", desc: "Memory spaces are scoped by user_id and optionally agent_id — cross-user data leakage is structurally impossible." },
                    { title: "Encryption at rest", desc: "Not built-in — delegate to your Qdrant and Redis deployment (both support encrypted volumes / TLS)." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-slate-800">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Production Security Checklist</h2>
                <div className="space-y-2">
                  {[
                    "Set a strong JWT_SECRET_KEY (32+ random chars)",
                    "Enable HTTPS / TLS termination in front of the API",
                    "Set QDRANT_API_KEY and REDIS_PASSWORD in production",
                    "Enable ENABLE_RATE_LIMITING=true to prevent abuse",
                    "Rotate API keys regularly via the /auth/keys endpoints",
                    "Review audit logs weekly for anomalous access patterns",
                    "Run client.delete_all(user_id=...) for GDPR erasure requests",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Monitoring */}
            {activeSection === "monitoring" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Monitoring & Observability</h1>
                <p className="text-slate-600 mb-6">
                  HippocampAI ships with a Prometheus metrics endpoint, a pre-built Grafana dashboard, structured JSON logging, and an auto-healing pipeline that monitors memory health continuously.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Prometheus Metrics</h2>
                <CodeBlock
                  code={`# Available at GET /metrics (added in v0.5.1)
# Requires: pip install "hippocampai[saas]"
# Falls back to 501 if prometheus-client not installed

# Key metrics exposed:
hippocampai_memories_total          # total memories per user
hippocampai_recall_latency_seconds  # histogram p50/p95/p99
hippocampai_ingestion_rate_total    # ingestion ops/sec
hippocampai_cache_hit_ratio         # Redis cache hit rate
hippocampai_graph_entities_total    # knowledge graph size
hippocampai_health_score            # per-user memory health`}
                  language="bash"
                  id="mon-prom"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Grafana Dashboard</h2>
                <p className="text-slate-600 mb-4">
                  The Docker Compose stack starts Grafana at <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm">http://localhost:3002</code> with a pre-configured HippocampAI dashboard. It shows recall latency percentiles, ingestion throughput, cache hit ratio, and memory health scores.
                </p>
                <CodeBlock
                  code={`# Start the full observability stack
docker compose up -d

# Grafana: http://localhost:3002  (admin / admin)
# Prometheus: http://localhost:9090

# Prometheus scrape config (already in docker-compose.yml)
scrape_configs:
  - job_name: hippocampai
    static_configs:
      - targets: ['api:8000']`}
                  language="yaml"
                  id="mon-grafana"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Structured Logging</h2>
                <CodeBlock
                  code={`# All logs are JSON-structured (python-json-logger)
# Example log entry:
{
  "timestamp": "2026-04-09T10:23:44Z",
  "level": "INFO",
  "event": "memory.stored",
  "user_id": "alice",
  "memory_id": "mem_abc123",
  "type": "preference",
  "importance": 0.82,
  "duration_ms": 47
}

# Configure log level in .env:
LOG_LEVEL=INFO   # DEBUG | INFO | WARNING | ERROR`}
                  language="json"
                  id="mon-logs"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Auto-Healing</h2>
                <p className="text-slate-600 mb-4">
                  The auto-healing pipeline runs continuously in the background and checks for: duplicate memories, low-importance accumulation, graph inconsistencies, and stale session data. It surfaces issues via a per-user health score (0–1).
                </p>
                <CodeBlock
                  code={`# Check memory health
health = client.health_check(user_id="alice")
print(f"Health score: {health.score}")
print(f"Issues found: {health.issues}")

# Trigger manual healing
result = client.heal(user_id="alice")
print(f"Repaired: {result.repaired_count}")`}
                  language="python"
                  id="mon-heal"
                />
              </div>
            )}

            {/* API Reference */}
            {activeSection === "api-reference" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">API Reference</h1>
                <p className="text-slate-600 mb-2">Reference for the HippocampAI Python SDK (120+ methods).</p>
                <p className="text-sm text-slate-500 mb-6">See the <a href="https://github.com/rexdivakar/HippocampAI/blob/main/docs/API_REFERENCE.md" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">full API reference on GitHub</a> for all methods.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">MemoryClient</h2>
                <CodeBlock
                  code={`from hippocampai import MemoryClient

client = MemoryClient()

# Or with explicit configuration
from hippocampai.core import MemoryClient, Config

client = MemoryClient(config=Config(
    llm_provider="openai",     # or: anthropic, groq, ollama
    llm_model="gpt-4",
    qdrant_url="http://localhost:6333"
))`}
                  language="python"
                  id="api-client"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">client.remember()</h2>
                <CodeBlock
                  code={`memory = client.remember(
    text: str,                 # Memory content
    user_id: str,              # User identifier
    type: str = "general",     # preference, fact, event, procedural, goal
    agent_id: str = None,      # Agent identifier (multi-agent)
    metadata: dict = None,     # Custom metadata
    importance: float = 0.5    # 0-1 importance score
) -> Memory`}
                  language="python"
                  id="api-remember"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">client.recall()</h2>
                <CodeBlock
                  code={`results = client.recall(
    query: str,                # Search query
    user_id: str,              # User identifier
    limit: int = 10,           # Max results
    agent_id: str = None,      # Agent filter
    type: str = None,          # Filter by memory type
    use_graph: bool = False,   # Enable graph-aware retrieval
    min_relevance: float = 0.0
) -> list[RecallResult]`}
                  language="python"
                  id="api-recall"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">client.sleep_phase()</h2>
                <CodeBlock
                  code={`result = client.sleep_phase(
    user_id: str,
    consolidate: bool = True,
    decay_importance: bool = True,
    decay_rate: float = 0.05,
    prune_threshold: float = 0.3
) -> SleepResult`}
                  language="python"
                  id="api-sleep"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Knowledge Graph</h2>
                <CodeBlock
                  code={`# Graph operations
entities = client.graph.get_entities(user_id: str)
relations = client.graph.get_relations(entity: str)
subgraph = client.graph.get_subgraph(entity: str, depth: int = 2)`}
                  language="python"
                  id="api-graph"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Memory Triggers</h2>
                <CodeBlock
                  code={`# Register a webhook trigger
client.triggers.register(
    event="memory.created",
    action="webhook",
    url="https://your-app.com/hooks/memory",
    filter={"type": "event"}
)`}
                  language="python"
                  id="api-triggers"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Batch Operations</h2>
                <CodeBlock
                  code={`# Store many memories in one call
ids = client.batch_remember([
    {"text": "Prefers dark mode", "user_id": "alice"},
    {"text": "Timezone: America/New_York", "user_id": "alice"},
], user_id="alice")

# Fetch a single memory by ID
memory = client.get_memory(memory_id: str) -> Memory

# Bulk fetch by ID list (silently skips not-found IDs)
memories = client.batch_get(ids: list[str]) -> list[Memory]

# Bulk delete — returns {"deleted": N, "failed": M}
result = client.batch_delete(ids: list[str]) -> dict

# Deduplicate — dry_run=True shows what would be removed
report = client.deduplicate(user_id="alice", dry_run=True)`}
                  language="python"
                  id="api-batch"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Prospective Memory</h2>
                <CodeBlock
                  code={`# Create a time-based reminder
intent = client.prospective.create(
    user_id="alice",
    text="Review Q2 roadmap with Bob",
    trigger_type="time",           # or "event"
    trigger_at="2026-04-11T09:00:00",
    recurrence="weekly",           # none | daily | weekly | monthly | custom_cron
    priority=8,                    # 0-10
)

# Create an event-based trigger (fires when keywords match recall)
intent = client.prospective.create(
    user_id="alice",
    text="Check medical appointment status",
    trigger_type="event",
    trigger_keywords=["health", "doctor", "appointment"],
)

# Intents surface automatically during recall()
results = client.recall("health update", user_id="alice")
# → includes triggered intents

# Lifecycle management
client.prospective.complete(intent_id)
client.prospective.cancel(intent_id)
client.prospective.expire(user_id="alice")   # expire overdue intents`}
                  language="python"
                  id="api-prospective"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Export / Import</h2>
                <CodeBlock
                  code={`# Export memories (JSON, Parquet, or CSV)
client.export(user_id="alice", format="json", path="backup.json")

# Import memories
client.import_memories(path="backup.json", user_id="alice")`}
                  language="python"
                  id="api-export"
                />
              </div>
            )}

            {/* Prospective Memory */}
            {activeSection === "prospective-memory" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Prospective Memory</h1>
                <p className="text-slate-600 mb-6">
                  Prospective memory is the ability to <strong>remember to do something in the future</strong>.
                  HippocampAI v0.5.1 adds first-class support for scheduling future actions — either at a specific
                  time/recurrence, or when a particular topic arises in a recall query.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Trigger Types</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-medium text-slate-800 mb-1">Time-Based</h4>
                    <p className="text-sm text-slate-500">Fire at a specific datetime. Optional recurrence: <code>none</code>, <code>daily</code>, <code>weekly</code>, <code>monthly</code>, or a custom cron expression.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-medium text-slate-800 mb-1">Event-Based</h4>
                    <p className="text-sm text-slate-500">Fire when a <code>recall()</code> query matches trigger keywords, a regex pattern, or embedding similarity above a threshold.</p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Creating Intents</h2>
                <CodeBlock
                  code={`from hippocampai import MemoryClient

client = MemoryClient()

# Time-based: remind weekly
intent = client.prospective.create(
    user_id="alice",
    text="Review Q2 roadmap with Bob",
    trigger_type="time",
    trigger_at="2026-04-11T09:00:00",
    recurrence="weekly",   # none | daily | weekly | monthly | custom_cron
    priority=8,            # 0-10, higher = shown first when triggered
)

# Event-based: fire when health topic is recalled
intent = client.prospective.create(
    user_id="alice",
    text="Remind about follow-up appointment",
    trigger_type="event",
    trigger_keywords=["health", "doctor", "appointment"],
    # Or use embedding similarity:
    # trigger_query="medical health appointment",
    # similarity_threshold=0.75,
)`}
                  language="python"
                  id="prosp-create"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Recall Integration</h2>
                <p className="text-slate-600 mb-4">
                  Triggered intents surface automatically as <code>RetrievalResult</code> objects during any <code>recall()</code> call — no extra code needed.
                </p>
                <CodeBlock
                  code={`# Triggered prospective intents appear in recall results
results = client.recall("doctor update", user_id="alice")
for r in results:
    if r.is_prospective:
        print(f"[REMINDER] {r.memory.text} (priority {r.memory.priority})")
    else:
        print(f"[MEMORY] {r.memory.text}")`}
                  language="python"
                  id="prosp-recall"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Lifecycle Management</h2>
                <CodeBlock
                  code={`# Complete an intent (marks as done, stops recurrence)
client.prospective.complete(intent_id)

# Cancel without completing
client.prospective.cancel(intent_id)

# Expire all overdue intents for a user
client.prospective.expire(user_id="alice")

# Consolidate: merge similar intents
client.prospective.consolidate(user_id="alice")

# Parse natural language → intent fields (LLM + heuristic fallback)
parsed = client.prospective.parse(
    "remind me every Monday to check in with Bob",
    user_id="alice"
)`}
                  language="python"
                  id="prosp-lifecycle"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">REST API Endpoints</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Method</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Endpoint</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["POST", "/v1/prospective/", "Create a new intent"],
                        ["GET", "/v1/prospective/", "List all intents for a user"],
                        ["GET", "/v1/prospective/{id}", "Get a specific intent"],
                        ["PATCH", "/v1/prospective/{id}", "Update an intent"],
                        ["DELETE", "/v1/prospective/{id}", "Delete an intent"],
                        ["POST", "/v1/prospective/parse", "Parse NL text → intent fields"],
                        ["POST", "/v1/prospective/evaluate", "Evaluate triggers now"],
                        ["POST", "/v1/prospective/consolidate", "Merge similar intents"],
                        ["POST", "/v1/prospective/expire", "Expire overdue intents"],
                      ].map(([method, endpoint, desc]) => (
                        <tr key={endpoint} className="hover:bg-slate-50">
                          <td className="p-3 border border-slate-200">
                            <span className={`px-2 py-0.5 rounded text-xs font-mono font-medium ${method === "GET" ? "bg-green-100 text-green-700" : method === "DELETE" ? "bg-red-100 text-red-700" : method === "PATCH" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>{method}</span>
                          </td>
                          <td className="p-3 border border-slate-200 font-mono text-slate-600">{endpoint}</td>
                          <td className="p-3 border border-slate-200 text-slate-600">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Batch Operations */}
            {activeSection === "batch-ops" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Batch Operations</h1>
                <p className="text-slate-600 mb-6">
                  HippocampAI v0.5.1 adds first-class batch endpoints so you can store, fetch, or delete
                  hundreds of memories in a single API call. Individual failures are logged but never abort the batch.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Batch Store</h2>
                <CodeBlock
                  code={`ids = client.batch_remember([
    {"text": "Prefers dark mode", "type": "preference"},
    {"text": "Timezone: America/New_York", "type": "preference"},
    {"text": "Daily standup at 10am", "type": "event"},
], user_id="alice")
print(ids)  # ["mem_abc", "mem_def", "mem_ghi"]`}
                  language="python"
                  id="batch-store"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Batch Fetch &amp; Delete</h2>
                <CodeBlock
                  code={`# Fetch by explicit ID list — silently skips not-found IDs
memories = client.batch_get(["mem_abc", "mem_def", "mem_xyz"])

# Single memory by ID (404 if not found)
memory = client.get_memory("mem_abc")

# Delete by ID list — returns counts
result = client.batch_delete(["mem_abc", "mem_def"])
# → {"deleted": 2, "failed": 0}`}
                  language="python"
                  id="batch-fetch"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Deduplication</h2>
                <p className="text-slate-600 mb-4">
                  The deduplication endpoint exposes the built-in <code>Deduplicator</code> via API.
                  Use <code>dry_run=True</code> (the default) to inspect what would be removed before committing.
                </p>
                <CodeBlock
                  code={`# Inspect first (default: dry_run=True)
report = client.deduplicate(user_id="alice", dry_run=True)
print(f"Would remove {report.duplicate_count} duplicates")
print(report.groups)   # list of duplicate memory clusters

# Apply deduplication
report = client.deduplicate(user_id="alice", dry_run=False)`}
                  language="python"
                  id="batch-dedup"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">REST API Endpoints</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Method</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Endpoint</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["POST", "/v1/memories/batch", "Store N memories in one request"],
                        ["POST", "/v1/memories/batch/get", "Fetch N memories by ID list"],
                        ["POST", "/v1/memories/batch/delete", "Delete N memories; returns {deleted, failed}"],
                        ["POST", "/v1/memories/deduplicate", "Deduplicate; supports dry_run=true"],
                        ["GET", "/v1/memories/{memory_id}", "Fetch a single memory by ID (404 on miss)"],
                        ["GET", "/metrics", "Prometheus scrape endpoint"],
                      ].map(([method, endpoint, desc]) => (
                        <tr key={endpoint} className="hover:bg-slate-50">
                          <td className="p-3 border border-slate-200">
                            <span className={`px-2 py-0.5 rounded text-xs font-mono font-medium ${method === "GET" ? "bg-green-100 text-green-700" : method === "DELETE" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}>{method}</span>
                          </td>
                          <td className="p-3 border border-slate-200 font-mono text-slate-600">{endpoint}</td>
                          <td className="p-3 border border-slate-200 text-slate-600">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Configuration */}
            {activeSection === "configuration" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Configuration</h1>
                <p className="text-slate-600 mb-6">Configure HippocampAI for your use case.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Local Development</h2>
                <CodeBlock
                  code={`# .env file
QDRANT_URL=http://localhost:6333
LLM_PROVIDER=ollama
LLM_MODEL=qwen2.5:7b-instruct`}
                  language="bash"
                  id="config-local"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Cloud / Production</h2>
                <CodeBlock
                  code={`# .env file
QDRANT_URL=https://your-cluster.qdrant.io
QDRANT_API_KEY=your-qdrant-key

LLM_PROVIDER=openai
OPENAI_API_KEY=sk-your-key

# Redis caching (50-100x faster)
REDIS_URL=redis://localhost:6379

# SaaS features
CELERY_BROKER_URL=redis://localhost:6379/1`}
                  language="bash"
                  id="config-cloud"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">LLM Providers</h2>
                <p className="text-slate-600 mb-4">Supported providers and their configuration:</p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <ul className="space-y-2 text-slate-600">
                    <li><strong>OpenAI</strong> — GPT-4, GPT-3.5, text-embedding-3-small/large</li>
                    <li><strong>Anthropic</strong> — Claude 3.5 Sonnet, Claude 3 Opus/Haiku</li>
                    <li><strong>Groq</strong> — Fast inference with Llama, Mixtral models</li>
                    <li><strong>Ollama</strong> — Local models (no API key needed)</li>
                    <li><strong>HuggingFace</strong> — Sentence Transformers for embeddings</li>
                    <li><strong>Custom</strong> — Implement provider interface for any LLM/embedding</li>
                  </ul>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Tiered Storage</h2>
                <p className="text-slate-600 mb-4">
                  Configure hot/warm/cold storage tiers for efficient memory management:
                </p>
                <CodeBlock
                  code={`# Tiered storage configuration
STORAGE_HOT_MAX_AGE_DAYS=7      # Recent memories in fast storage
STORAGE_WARM_MAX_AGE_DAYS=30    # Older memories in standard storage
STORAGE_COLD_ARCHIVE=true       # Archive rarely accessed memories`}
                  language="bash"
                  id="config-tiered"
                />
              </div>
            )}


            {/* Deployment */}
            {activeSection === "deployment" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Deployment</h1>
                <p className="text-slate-600 mb-6">Deploy HippocampAI to production.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Option 1: Library Integration</h2>
                <p className="text-slate-600 mb-4">Embed HippocampAI directly in your Python application:</p>
                <CodeBlock
                  code={`# Lightweight - just 10 core dependencies
pip install hippocampai

from hippocampai import MemoryClient
client = MemoryClient()  # Uses default config`}
                  language="bash"
                  id="deploy-library"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Option 2: SaaS Platform</h2>
                <p className="text-slate-600 mb-4">Deploy as a full self-hosted platform with API, auth, and dashboard:</p>
                <CodeBlock
                  code={`pip install "hippocampai[saas]"

# Start the platform
from hippocampai.platform import run_api_server
run_api_server(host="0.0.0.0", port=8000)`}
                  language="python"
                  id="deploy-saas"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Option 3: Docker Compose</h2>
                <CodeBlock
                  code={`git clone https://github.com/rexdivakar/HippocampAI.git
cd HippocampAI
cp .env.example .env
# Edit .env with your configuration
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f`}
                  language="bash"
                  id="deploy-docker"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Production Checklist</h2>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />Configure LLM provider credentials securely</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />Set up Redis for caching (50-100x performance boost)</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />Configure persistent storage for Qdrant</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />Enable Celery workers for background tasks</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />Set up monitoring and telemetry</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />Schedule sleep_phase for off-peak hours</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />Configure backup/export strategy</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />Enable auto-healing for memory quality</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Infrastructure */}
            {activeSection === "infrastructure" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Infrastructure</h1>
                <p className="text-slate-600 mb-8">A detailed look at the technology stack powering HippocampAI and how each component fits into the architecture.</p>

                {/* Architecture Diagram */}
                <h2 className="text-xl font-semibold text-slate-800 mb-4">System Architecture</h2>
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 mb-8 overflow-x-auto">
                  <div className="min-w-[700px]">
                    {/* Top: Client Layer */}
                    <div className="text-center mb-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Client Layer</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="px-5 py-3 bg-white border-2 border-cyan-200 rounded-xl shadow-sm text-center">
                        <div className="text-sm font-semibold text-slate-800">Python SDK</div>
                        <div className="text-xs text-slate-500">remember() / recall()</div>
                      </div>
                      <div className="px-5 py-3 bg-white border-2 border-cyan-200 rounded-xl shadow-sm text-center">
                        <div className="text-sm font-semibold text-slate-800">REST API</div>
                        <div className="text-xs text-slate-500">FastAPI endpoints</div>
                      </div>
                      <div className="px-5 py-3 bg-white border-2 border-cyan-200 rounded-xl shadow-sm text-center">
                        <div className="text-sm font-semibold text-slate-800">React Dashboard</div>
                        <div className="text-xs text-slate-500">Admin UI</div>
                      </div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center my-2">
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-6 bg-slate-300" />
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-300" />
                      </div>
                    </div>

                    {/* Core Engine */}
                    <div className="text-center mb-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Core Engine</span>
                    </div>
                    <div className="border-2 border-purple-200 bg-purple-50/50 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-center gap-3 flex-wrap">
                        <div className="px-4 py-2 bg-white border border-purple-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">Ingestion</div>
                        <ArrowRight className="h-4 w-4 text-purple-300" />
                        <div className="px-4 py-2 bg-white border border-purple-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">Embedding</div>
                        <ArrowRight className="h-4 w-4 text-purple-300" />
                        <div className="px-4 py-2 bg-white border border-purple-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">Dedup</div>
                        <ArrowRight className="h-4 w-4 text-purple-300" />
                        <div className="px-4 py-2 bg-white border border-amber-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">Knowledge Graph</div>
                        <ArrowRight className="h-4 w-4 text-purple-300" />
                        <div className="px-4 py-2 bg-white border border-purple-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">Storage</div>
                        <ArrowRight className="h-4 w-4 text-purple-300" />
                        <div className="px-4 py-2 bg-white border border-purple-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">Retrieval</div>
                      </div>
                    </div>

                    {/* Arrow down to three columns */}
                    <div className="flex justify-around my-2 px-12">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="w-0.5 h-6 bg-slate-300" />
                          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-300" />
                        </div>
                      ))}
                    </div>

                    {/* Storage Layer */}
                    <div className="text-center mb-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Storage Layer</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="p-4 bg-white border-2 border-cyan-200 rounded-xl text-center shadow-sm">
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg mx-auto flex items-center justify-center mb-2">
                          <Database className="h-5 w-5 text-cyan-600" />
                        </div>
                        <div className="text-sm font-semibold text-slate-800">Qdrant</div>
                        <div className="text-xs text-slate-500 mt-1">Vector Storage + HNSW Index</div>
                      </div>
                      <div className="p-4 bg-white border-2 border-red-200 rounded-xl text-center shadow-sm">
                        <div className="w-10 h-10 bg-red-100 rounded-lg mx-auto flex items-center justify-center mb-2">
                          <Zap className="h-5 w-5 text-red-600" />
                        </div>
                        <div className="text-sm font-semibold text-slate-800">Redis</div>
                        <div className="text-xs text-slate-500 mt-1">Cache + BM25 Index</div>
                      </div>
                      <div className="p-4 bg-white border-2 border-blue-200 rounded-xl text-center shadow-sm">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg mx-auto flex items-center justify-center mb-2">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="text-sm font-semibold text-slate-800">SQLite</div>
                        <div className="text-xs text-slate-500 mt-1">Metadata + Graph Store</div>
                      </div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center my-2">
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-6 bg-slate-300" />
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-300" />
                      </div>
                    </div>

                    {/* LLM Providers */}
                    <div className="text-center mb-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">LLM & Embedding Providers</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      {[
                        { name: "OpenAI", color: "bg-emerald-100 border-emerald-200 text-emerald-700" },
                        { name: "Anthropic", color: "bg-orange-100 border-orange-200 text-orange-700" },
                        { name: "Groq", color: "bg-indigo-100 border-indigo-200 text-indigo-700" },
                        { name: "Ollama", color: "bg-slate-100 border-slate-200 text-slate-700" },
                        { name: "HuggingFace", color: "bg-yellow-100 border-yellow-200 text-yellow-700" },
                      ].map((provider) => (
                        <div key={provider.name} className={`px-4 py-2 rounded-lg border text-sm font-medium ${provider.color}`}>
                          {provider.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Infrastructure Components */}
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Infrastructure Components</h2>
                <div className="space-y-4 mb-8">
                  {/* Qdrant */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-start gap-4 p-5">
                      <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Database className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-slate-800">Qdrant</h3>
                          <span className="px-2 py-0.5 bg-cyan-50 text-cyan-700 rounded text-xs font-medium border border-cyan-200">Vector Database</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          Primary vector storage backend using HNSW (Hierarchical Navigable Small World) indexing for fast approximate nearest neighbor search. Stores all memory embeddings with metadata payloads.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            HNSW indexing for sub-millisecond search
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Namespace isolation per user/agent
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Metadata filtering on queries
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Horizontal scaling with sharding
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
                      <span className="text-xs text-slate-500">Default port: <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">6333</code> — Runs as standalone service or via Docker</span>
                    </div>
                  </div>

                  {/* Redis */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-start gap-4 p-5">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Zap className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-slate-800">Redis</h3>
                          <span className="px-2 py-0.5 bg-red-50 text-red-700 rounded text-xs font-medium border border-red-200">Cache + Index</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          In-memory data store used for two critical functions: (1) caching frequently accessed memories for 50-100x faster retrieval, and (2) maintaining BM25 keyword indices for hybrid search.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            50-100x faster retrieval via caching
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            BM25 keyword index storage
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            TTL-based cache expiration
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Session and rate-limit tracking
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
                      <span className="text-xs text-slate-500">Default port: <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">6379</code> — Required for hybrid retrieval and production caching</span>
                    </div>
                  </div>

                  {/* SQLite */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-start gap-4 p-5">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-slate-800">SQLite</h3>
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200">Metadata + Graph</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          Embedded database for metadata persistence and knowledge graph storage. Stores memory records, entity-relationship graphs, user profiles, importance scores, and temporal data.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Knowledge graph entity/relation tables
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Memory metadata and scoring
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Bi-temporal fact tracking
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Zero-config, embedded, no service needed
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
                      <span className="text-xs text-slate-500">File-based: <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">hippocampai.db</code> — No separate service required</span>
                    </div>
                  </div>

                  {/* FastAPI */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-start gap-4 p-5">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Server className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-slate-800">FastAPI</h3>
                          <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs font-medium border border-green-200">API Framework</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          High-performance async Python web framework powering the REST API layer. Provides auto-generated OpenAPI docs, request validation, and async request handling for all 120+ API methods.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            120+ REST API endpoints
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Auto-generated OpenAPI/Swagger docs
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Async request handling (1000+ RPS)
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            WebSocket support for triggers
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
                      <span className="text-xs text-slate-500">Default port: <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">8000</code> — Powers both SaaS platform and self-hosted API</span>
                    </div>
                  </div>

                  {/* Docker */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-start gap-4 p-5">
                      <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Layers className="h-6 w-6 text-sky-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-slate-800">Docker</h3>
                          <span className="px-2 py-0.5 bg-sky-50 text-sky-700 rounded text-xs font-medium border border-sky-200">Containerization</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          Docker Compose orchestrates all services — API server, Qdrant, Redis, and Celery workers — in a single deployment. Provides one-command setup for development and production environments.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            One-command deployment via Compose
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Pre-configured service networking
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Volume persistence for data
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Health checks and auto-restart
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
                      <span className="text-xs text-slate-500">Setup: <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">docker compose up -d</code> — Launches full stack in ~30 seconds</span>
                    </div>
                  </div>

                  {/* Celery */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-start gap-4 p-5">
                      <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Cpu className="h-6 w-6 text-lime-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-slate-800">Celery</h3>
                          <span className="px-2 py-0.5 bg-lime-50 text-lime-700 rounded text-xs font-medium border border-lime-200">Task Queue</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          Distributed task queue for background processing. Handles sleep phase consolidation, batch embedding generation, memory triggers, export jobs, and scheduled maintenance tasks.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Sleep phase consolidation jobs
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Batch embedding generation
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Memory trigger execution
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                            Export/import batch processing
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 px-5 py-3 border-t border-slate-100">
                      <span className="text-xs text-slate-500">Broker: Redis — Used in SaaS platform deployment for async background tasks</span>
                    </div>
                  </div>
                </div>

                {/* LLM & Embedding Providers */}
                <h2 className="text-xl font-semibold text-slate-800 mb-4">LLM & Embedding Providers</h2>
                <p className="text-slate-600 mb-4">HippocampAI is provider-agnostic. Choose any embedding backend for vector generation and any LLM for knowledge graph extraction and procedural memory.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {[
                    {
                      name: "OpenAI",
                      icon: Sparkles,
                      color: "emerald",
                      role: "Embeddings & LLM",
                      desc: "text-embedding-3-small/large for vectors. GPT-4o for entity extraction and procedural memory generation.",
                      install: "pip install hippocampai[openai]"
                    },
                    {
                      name: "Anthropic",
                      icon: MessageSquare,
                      color: "orange",
                      role: "LLM for Extraction",
                      desc: "Claude models for knowledge graph entity/relationship extraction and advanced reasoning tasks.",
                      install: "pip install hippocampai[anthropic]"
                    },
                    {
                      name: "Groq",
                      icon: Zap,
                      color: "indigo",
                      role: "Fast LLM Inference",
                      desc: "Ultra-fast LLM inference for real-time entity extraction. Ideal for latency-sensitive workloads.",
                      install: "pip install hippocampai[groq]"
                    },
                    {
                      name: "Ollama",
                      icon: Server,
                      color: "slate",
                      role: "Local Models",
                      desc: "Run embedding and LLM models locally for air-gapped deployments. Full privacy, no external API calls.",
                      install: "pip install hippocampai[ollama]"
                    },
                    {
                      name: "HuggingFace",
                      icon: Cpu,
                      color: "yellow",
                      role: "Sentence Transformers",
                      desc: "Use any Sentence Transformers model for embeddings. Great for custom fine-tuned models.",
                      install: "pip install hippocampai[huggingface]"
                    },
                    {
                      name: "Custom",
                      icon: Puzzle,
                      color: "purple",
                      role: "Your Provider",
                      desc: "Implement the EmbeddingProvider interface to use any custom embedding or LLM service.",
                      install: "Extend base class"
                    },
                  ].map((provider) => {
                    const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
                      emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", iconBg: "bg-emerald-100" },
                      orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", iconBg: "bg-orange-100" },
                      indigo: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-700", iconBg: "bg-indigo-100" },
                      slate: { bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-700", iconBg: "bg-slate-200" },
                      yellow: { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700", iconBg: "bg-yellow-100" },
                      purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", iconBg: "bg-purple-100" },
                    }
                    const c = colorMap[provider.color]
                    return (
                      <div key={provider.name} className={`p-4 rounded-xl border ${c.border} ${c.bg}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-9 h-9 ${c.iconBg} rounded-lg flex items-center justify-center`}>
                            <provider.icon className={`h-4.5 w-4.5 ${c.text}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800">{provider.name}</h4>
                            <span className={`text-xs ${c.text}`}>{provider.role}</span>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{provider.desc}</p>
                        <code className={`text-xs ${c.text} font-mono`}>{provider.install}</code>
                      </div>
                    )
                  })}
                </div>

                {/* Data Flow Diagram */}
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Data Flow: Remember & Recall</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Remember Flow */}
                  <div className="bg-white rounded-xl border border-slate-200 p-5">
                    <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 bg-cyan-100 rounded flex items-center justify-center">
                        <ArrowRight className="h-3.5 w-3.5 text-cyan-600" />
                      </div>
                      remember() — Write Path
                    </h3>
                    <div className="space-y-3">
                      {[
                        { step: "1", label: "Client sends content + metadata", detail: "Python SDK / REST API" },
                        { step: "2", label: "Content normalized & cleaned", detail: "FastAPI ingestion layer" },
                        { step: "3", label: "Embedding generated", detail: "OpenAI / Anthropic / Ollama" },
                        { step: "4", label: "Dedup check (cosine similarity)", detail: "Qdrant similarity query" },
                        { step: "5", label: "Entities & relations extracted", detail: "LLM → SQLite graph store" },
                        { step: "6", label: "Vector stored in Qdrant", detail: "HNSW indexed" },
                        { step: "7", label: "Metadata persisted to SQLite", detail: "Scores, types, timestamps" },
                        { step: "8", label: "Cache updated in Redis", detail: "Hot path acceleration" },
                      ].map((item) => (
                        <div key={item.step} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-cyan-700">{item.step}</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-700">{item.label}</div>
                            <div className="text-xs text-slate-500">{item.detail}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recall Flow */}
                  <div className="bg-white rounded-xl border border-slate-200 p-5">
                    <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                        <Search className="h-3.5 w-3.5 text-purple-600" />
                      </div>
                      recall() — Read Path
                    </h3>
                    <div className="space-y-3">
                      {[
                        { step: "1", label: "Client sends query + filters", detail: "Python SDK / REST API", color: "purple" },
                        { step: "2", label: "Check Redis cache first", detail: "50-100x faster if cached", color: "purple" },
                        { step: "3", label: "Query embedding generated", detail: "Same provider as storage", color: "purple" },
                        { step: "4", label: "Vector similarity search", detail: "Qdrant HNSW nearest neighbors", color: "purple" },
                        { step: "5", label: "BM25 keyword matching", detail: "Redis keyword index", color: "purple" },
                        { step: "6", label: "Graph traversal (if enabled)", detail: "SQLite entity relationships", color: "purple" },
                        { step: "7", label: "Reciprocal Rank Fusion", detail: "3-way score combination", color: "purple" },
                        { step: "8", label: "Results returned & cached", detail: "Ranked by relevance", color: "purple" },
                      ].map((item) => (
                        <div key={item.step} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-purple-700">{item.step}</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-700">{item.label}</div>
                            <div className="text-xs text-slate-500">{item.detail}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Docker Compose Reference */}
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Docker Compose Reference</h2>
                <p className="text-slate-600 mb-4">The full production stack orchestrated via Docker Compose:</p>
                <CodeBlock
                  code={`# docker-compose.yml
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - QDRANT_HOST=qdrant
      - REDIS_URL=redis://redis:6379
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
    depends_on:
      - qdrant
      - redis

  qdrant:
    image: qdrant/qdrant:latest
    ports:
      - "6333:6333"
    volumes:
      - qdrant_data:/qdrant/storage

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  celery-worker:
    build: .
    command: celery -A hippocampai.platform worker -l info
    environment:
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis

  dashboard:
    build: ./dashboard
    ports:
      - "3000:3000"
    depends_on:
      - api

volumes:
  qdrant_data:
  redis_data:`}
                  language="yaml"
                  id="infra-docker-compose"
                />

                {/* Tiered Storage */}
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Tiered Storage Architecture</h2>
                <p className="text-slate-600 mb-4">HippocampAI automatically manages memory across hot, warm, and cold storage tiers based on access frequency and importance.</p>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-8">
                  <div className="grid grid-cols-3">
                    <div className="p-5 border-r border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <h4 className="font-semibold text-slate-800">Hot Tier</h4>
                      </div>
                      <ul className="space-y-1.5 text-sm text-slate-600">
                        <li>Redis in-memory cache</li>
                        <li>Recently accessed memories</li>
                        <li>Sub-millisecond latency</li>
                        <li>Auto-populated on recall</li>
                      </ul>
                    </div>
                    <div className="p-5 border-r border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <h4 className="font-semibold text-slate-800">Warm Tier</h4>
                      </div>
                      <ul className="space-y-1.5 text-sm text-slate-600">
                        <li>Qdrant vector store</li>
                        <li>All active memories</li>
                        <li>HNSW-indexed search</li>
                        <li>Primary storage layer</li>
                      </ul>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <h4 className="font-semibold text-slate-800">Cold Tier</h4>
                      </div>
                      <ul className="space-y-1.5 text-sm text-slate-600">
                        <li>SQLite / file export</li>
                        <li>Low-importance memories</li>
                        <li>Archived after decay</li>
                        <li>Restorable on demand</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Integration Points */}
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Framework Integrations</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "LangChain", desc: "Memory backend for LangChain agents. Drop-in replacement for ConversationBufferMemory with persistent, intelligent recall.", icon: GitBranch, color: "green" },
                    { name: "LlamaIndex", desc: "Custom retriever and storage integration. Use HippocampAI as a knowledge-graph-aware retrieval backend.", icon: Search, color: "purple" },
                    { name: "AutoGen", desc: "Shared memory for multi-agent conversations. All AutoGen agents can remember and recall from collective memory.", icon: Users, color: "cyan" },
                    { name: "React Dashboard", desc: "Built-in admin dashboard with real-time memory visualization, knowledge graph explorer, and analytics panels.", icon: Layers, color: "sky" },
                  ].map((integration) => {
                    const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
                      green: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-100" },
                      purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-100" },
                      cyan: { bg: "bg-cyan-50", text: "text-cyan-600", iconBg: "bg-cyan-100" },
                      sky: { bg: "bg-sky-50", text: "text-sky-600", iconBg: "bg-sky-100" },
                    }
                    const c = colorMap[integration.color]
                    return (
                      <div key={integration.name} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 ${c.iconBg} rounded-lg flex items-center justify-center`}>
                            <integration.icon className={`h-4 w-4 ${c.text}`} />
                          </div>
                          <h4 className="font-semibold text-slate-800">{integration.name}</h4>
                        </div>
                        <p className="text-sm text-slate-600">{integration.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Best Practices */}
            {activeSection === "best-practices" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Best Practices</h1>
                <p className="text-slate-600 mb-6">Recommendations for using HippocampAI effectively.</p>

                <div className="space-y-6">
                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Use Typed Memories</h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Always specify memory types for better organization and retrieval.
                    </p>
                    <CodeBlock
                      code={`# Good: Typed memories
client.remember("Prefers dark mode", user_id="alice", type="preference")
client.remember("Birthday is March 15", user_id="alice", type="fact")
client.remember("Asked about pricing", user_id="alice", type="event")`}
                      language="python"
                      id="bp-types"
                    />
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Leverage the Knowledge Graph</h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Store rich, descriptive memories that mention entities and relationships for automatic graph building.
                    </p>
                    <CodeBlock
                      code={`# Rich: entities and relationships are extracted
client.remember(
    "Alice from Engineering completed the ML pipeline project with Bob",
    user_id="org", type="fact"
)

# Recall with graph-aware retrieval
results = client.recall("Alice's projects", user_id="org", use_graph=True)`}
                      language="python"
                      id="bp-graph"
                    />
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Enable Redis Caching</h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Redis provides 50-100x performance improvement. Configure it for production.
                    </p>
                    <CodeBlock
                      code={`# Set REDIS_URL in your environment
# REDIS_URL=redis://localhost:6379
# That's it — caching is automatic when Redis is available`}
                      language="bash"
                      id="bp-redis"
                    />
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Run Sleep Phase Regularly</h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Schedule memory consolidation during off-peak hours to keep memory stores optimized.
                    </p>
                    <CodeBlock
                      code={`# Schedule via Celery beat or cron
result = client.sleep_phase(
    user_id="alice",
    consolidate=True,
    decay_importance=True,
    prune_threshold=0.3
)`}
                      language="python"
                      id="bp-sleep"
                    />
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Use Memory Triggers for Real-Time Updates</h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Set up triggers to react to memory events across your system.
                    </p>
                    <CodeBlock
                      code={`# Notify your app when important memories are stored
client.triggers.register(
    event="memory.created",
    action="webhook",
    url="https://your-app.com/hooks/memory",
    filter={"type": "event", "importance_gte": 0.8}
)`}
                      language="python"
                      id="bp-triggers"
                    />
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Export Regularly for Backup</h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Use the export/import feature for backup and data portability.
                    </p>
                    <CodeBlock
                      code={`# Export to JSON, Parquet, or CSV
client.export(user_id="alice", format="json", path="backup.json")
client.export(user_id="alice", format="parquet", path="backup.parquet")`}
                      language="python"
                      id="bp-export"
                    />
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
