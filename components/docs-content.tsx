"use client"

import { useState } from "react"
import { 
  BookOpen, Terminal, Zap, Layers, Code, Settings, 
  Server, HelpCircle, Copy, Check, ChevronRight,
  Database, Search, Moon, Users, Tag, Shield,
  ArrowRight, ExternalLink, MessageSquare, Bot, FileText, Sparkles
} from "lucide-react"
import Link from "next/link"

const sections = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "installation", label: "Installation", icon: Terminal },
  { id: "quick-start", label: "Quick Start", icon: Zap },
  { id: "core-concepts", label: "Core Concepts", icon: Layers },
  { id: "memory-types", label: "Memory Types", icon: Database },
  { id: "api-reference", label: "API Reference", icon: Code },
  { id: "configuration", label: "Configuration", icon: Settings },
  { id: "deployment", label: "Deployment", icon: Server },
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
                    <p className="text-slate-500">Enterprise Memory for AI Agents</p>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  HippocampAI is a universal, self-improving memory layer for LLM applications. Named after the 
                  hippocampus - the part of the brain responsible for memory formation - it provides semantic 
                  understanding, auto-deduplication, and hybrid retrieval to power personalized AI experiences.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Search, title: "Hybrid Retrieval", desc: "Combines BM25 keyword search with vector similarity for 40% better accuracy than vector-only approaches." },
                    { icon: Database, title: "Auto-Deduplication", desc: "Automatically detects and merges similar memories, saving 30-70% storage while improving quality." },
                    { icon: Moon, title: "Sleep Phase", desc: "Unique memory consolidation inspired by human cognition. Periodically optimizes and prunes memories." },
                    { icon: Users, title: "Multi-User Support", desc: "Isolated memory spaces per user with session tracking. Perfect for multi-tenant applications." },
                    { icon: Tag, title: "Smart Tagging", desc: "Automatic tag extraction and categorization. Filter memories by type, importance, or custom metadata." },
                    { icon: Shield, title: "Self-Hosted", desc: "Full control over your data. Deploy with Docker Compose in 30 seconds on your infrastructure." },
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
                  HippocampAI follows a pipeline architecture that processes memories through several stages:
                </p>
                <div className="bg-slate-50 rounded-xl p-6 mb-6 border border-slate-100">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {["Ingestion", "Embedding", "Deduplication", "Storage", "Retrieval"].map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">
                          {step}
                        </div>
                        {i < 4 && <ArrowRight className="h-4 w-4 text-slate-400" />}
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "FastAPI", "Qdrant", "OpenAI", "Docker", "SQLite"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Why HippocampAI?</h2>
                <ul className="space-y-3 text-slate-600">
                  {[
                    { label: "Open Source", desc: "Apache 2.0 license, free to use and modify" },
                    { label: "Production Ready", desc: "Battle-tested with comprehensive error handling" },
                    { label: "Easy Integration", desc: "Simple Python SDK, works with any LLM framework" },
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
                
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Using pip (Recommended)</h2>
                <CodeBlock code="pip install hippocampai" language="bash" id="pip-install" />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">From Source</h2>
                <CodeBlock 
                  code={`git clone https://github.com/rexdivakar/HippocampAI.git
cd HippocampAI
pip install -e .`}
                  language="bash"
                  id="source-install"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Using Docker</h2>
                <CodeBlock 
                  code={`git clone https://github.com/rexdivakar/HippocampAI.git
cd HippocampAI
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY
docker-compose up -d`}
                  language="bash"
                  id="docker-install"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Requirements</h2>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                      Python 3.9 or higher
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                      OpenAI API key (for embeddings)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                      Docker & Docker Compose (optional)
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Environment Variables</h2>
                <CodeBlock 
                  code={`# Required
OPENAI_API_KEY=sk-your-openai-api-key

# Qdrant Configuration
QDRANT_HOST=localhost
QDRANT_PORT=6333

# Optional Settings
HIPPOCAMP_COLLECTION=memories
HIPPOCAMP_EMBEDDING_MODEL=text-embedding-3-small
HIPPOCAMP_DEDUP_THRESHOLD=0.85`}
                  language="bash"
                  id="env-vars"
                />
              </div>
            )}

            {/* Quick Start */}
            {activeSection === "quick-start" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Quick Start</h1>
                <p className="text-slate-600 mb-6">Get up and running with HippocampAI in minutes.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Initialize the Engine</h2>
                <CodeBlock 
                  code={`from hippocamp import MemoryEngine

engine = MemoryEngine(
    api_key="your_openai_api_key",
    qdrant_host="localhost",
    qdrant_port=6333
)`}
                  language="python"
                  id="init-engine"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">2. Store Memories</h2>
                <CodeBlock 
                  code={`# Store a simple memory
engine.store(
    content="User prefers dark mode interface",
    user_id="user_123"
)

# Store with metadata and tags
engine.store(
    content="User loves hiking in the mountains",
    user_id="user_123",
    metadata={"type": "preference", "category": "hobbies"},
    tags=["hobby", "outdoor"],
    importance=0.8
)`}
                  language="python"
                  id="store-memory"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">3. Search Memories</h2>
                <CodeBlock 
                  code={`memories = engine.search(
    query="What are the user's hobbies?",
    user_id="user_123",
    limit=5
)

for memory in memories:
    print(f"Content: {memory.content}")
    print(f"Relevance: {memory.relevance:.2f}")`}
                  language="python"
                  id="search-memory"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">4. Run Sleep Phase</h2>
                <CodeBlock 
                  code={`result = engine.sleep_phase(
    user_id="user_123",
    consolidate=True,
    decay_importance=True,
    prune_threshold=0.3
)

print(f"Consolidated: {result.consolidated}")
print(f"Pruned: {result.pruned}")`}
                  language="python"
                  id="sleep-phase"
                />
              </div>
            )}


            {/* Core Concepts */}
            {activeSection === "core-concepts" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Core Concepts</h1>
                <p className="text-slate-600 mb-6">Understanding the key concepts behind HippocampAI.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Hybrid Retrieval</h2>
                <p className="text-slate-600 mb-4">
                  HippocampAI combines two search methods for optimal results:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                    <h4 className="font-medium text-cyan-800 mb-2">Vector Similarity</h4>
                    <p className="text-sm text-cyan-700">Uses embeddings to find semantically similar content. Great for understanding meaning and context.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <h4 className="font-medium text-purple-800 mb-2">BM25 Keyword Search</h4>
                    <p className="text-sm text-purple-700">Traditional keyword matching for exact terms. Ensures important keywords aren't missed.</p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Auto-Deduplication</h2>
                <p className="text-slate-600 mb-4">
                  When storing memories, HippocampAI automatically detects similar content (85% threshold) and either merges or skips duplicates. This typically saves 30-70% storage.
                </p>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Sleep Phase Consolidation</h2>
                <p className="text-slate-600 mb-4">
                  Inspired by how human memory consolidates during sleep:
                </p>
                <ul className="space-y-2 text-slate-600 mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                    <span><strong>Consolidation:</strong> Merges related memories into coherent summaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                    <span><strong>Importance Decay:</strong> Reduces scores of old, unused memories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                    <span><strong>Pruning:</strong> Removes low-value memories below threshold</span>
                  </li>
                </ul>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Importance Scoring</h2>
                <p className="text-slate-600 mb-4">
                  Each memory has an importance score (0-1) that affects retrieval priority. Importance decays over time unless the memory is accessed.
                </p>
              </div>
            )}

            {/* Memory Types */}
            {activeSection === "memory-types" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Memory Types</h1>
                <p className="text-slate-600 mb-6">HippocampAI supports different types of memories.</p>

                <div className="space-y-4">
                  {[
                    { type: "event", color: "cyan", title: "Events", desc: "Conversation messages, user actions, and interactions.", code: `engine.store(content="User asked about pricing", user_id="u1", metadata={"type": "event"})` },
                    { type: "preference", color: "rose", title: "Preferences", desc: "User settings, likes, dislikes, and personal choices.", code: `engine.store(content="User prefers email notifications", user_id="u1", metadata={"type": "preference"}, importance=0.8)` },
                    { type: "fact", color: "violet", title: "Facts", desc: "Factual information, knowledge, and data points.", code: `engine.store(content="User's company has 50 employees", user_id="u1", metadata={"type": "fact"})` },
                    { type: "custom", color: "amber", title: "Custom Types", desc: "Define your own memory types with custom metadata.", code: `engine.store(content="Completed onboarding", user_id="u1", metadata={"type": "milestone"}, tags=["milestone"])` },
                  ].map((item) => (
                    <div key={item.type} className={`p-5 bg-${item.color}-50 rounded-xl border border-${item.color}-100`}>
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


            {/* API Reference */}
            {activeSection === "api-reference" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">API Reference</h1>
                <p className="text-slate-600 mb-6">Complete reference for the HippocampAI Python SDK.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">MemoryEngine</h2>
                <CodeBlock 
                  code={`from hippocamp import MemoryEngine

engine = MemoryEngine(
    api_key: str,              # OpenAI API key
    qdrant_host: str = "localhost",
    qdrant_port: int = 6333,
    collection: str = "memories",
    embedding_model: str = "text-embedding-3-small",
    dedup_threshold: float = 0.85
)`}
                  language="python"
                  id="engine-init"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">engine.store()</h2>
                <CodeBlock 
                  code={`memory = engine.store(
    content: str,              # Memory content
    user_id: str,              # User identifier
    session_id: str = None,    # Optional session
    metadata: dict = None,     # Custom metadata
    tags: list[str] = None,    # Searchable tags
    importance: float = 0.5    # 0-1 importance score
) -> Memory`}
                  language="python"
                  id="store-sig"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">engine.search()</h2>
                <CodeBlock 
                  code={`memories = engine.search(
    query: str,                # Search query
    user_id: str,              # User identifier
    limit: int = 10,           # Max results
    min_relevance: float = 0.0,
    tags: list[str] = None,    # Filter by tags
    semantic_weight: float = 0.7,
    keyword_weight: float = 0.3
) -> list[Memory]`}
                  language="python"
                  id="search-sig"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">engine.sleep_phase()</h2>
                <CodeBlock 
                  code={`result = engine.sleep_phase(
    user_id: str,
    consolidate: bool = True,
    decay_importance: bool = True,
    decay_rate: float = 0.05,
    prune_threshold: float = 0.3
) -> SleepResult`}
                  language="python"
                  id="sleep-sig"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">engine.create_session()</h2>
                <CodeBlock 
                  code={`session = engine.create_session(
    user_id: str,
    session_id: str = None
) -> Session

# Session methods
session.add_message(role: str, content: str)
session.get_context(limit: int = 20) -> list[Message]
session.get_relevant_memories(query: str, limit: int = 5)`}
                  language="python"
                  id="session-sig"
                />
              </div>
            )}

            {/* Configuration */}
            {activeSection === "configuration" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Configuration</h1>
                <p className="text-slate-600 mb-6">Configure HippocampAI for your use case.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Environment Variables</h2>
                <CodeBlock 
                  code={`# Required
OPENAI_API_KEY=sk-your-key

# Qdrant
QDRANT_HOST=localhost
QDRANT_PORT=6333
QDRANT_API_KEY=  # For Qdrant Cloud

# HippocampAI Settings
HIPPOCAMP_COLLECTION=memories
HIPPOCAMP_EMBEDDING_MODEL=text-embedding-3-small
HIPPOCAMP_DEDUP_THRESHOLD=0.85
HIPPOCAMP_LOG_LEVEL=INFO`}
                  language="bash"
                  id="config-env"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Embedding Models</h2>
                <p className="text-slate-600 mb-4">Supported embedding models:</p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <ul className="space-y-2 text-slate-600">
                    <li><strong>text-embedding-3-small</strong> - Default, good balance of quality and cost</li>
                    <li><strong>text-embedding-3-large</strong> - Higher quality, more expensive</li>
                    <li><strong>text-embedding-ada-002</strong> - Legacy model</li>
                    <li><strong>Custom</strong> - Implement EmbeddingProvider interface</li>
                  </ul>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Deduplication Threshold</h2>
                <p className="text-slate-600 mb-4">
                  The dedup_threshold (0-1) controls how similar memories must be to be considered duplicates. 
                  Default is 0.85 (85% similarity).
                </p>
                <CodeBlock 
                  code={`# Stricter deduplication (fewer duplicates kept)
engine = MemoryEngine(api_key="...", dedup_threshold=0.9)

# Looser deduplication (more duplicates kept)
engine = MemoryEngine(api_key="...", dedup_threshold=0.7)`}
                  language="python"
                  id="config-dedup"
                />
              </div>
            )}


            {/* Deployment */}
            {activeSection === "deployment" && (
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Deployment</h1>
                <p className="text-slate-600 mb-6">Deploy HippocampAI to production.</p>

                <h2 className="text-xl font-semibold text-slate-800 mb-4">Docker Compose (Recommended)</h2>
                <p className="text-slate-600 mb-4">The easiest way to deploy with Qdrant included:</p>
                <CodeBlock 
                  code={`# Clone repository
git clone https://github.com/rexdivakar/HippocampAI.git
cd HippocampAI

# Configure environment
cp .env.example .env
# Edit .env with your OPENAI_API_KEY

# Start services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f`}
                  language="bash"
                  id="deploy-docker"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Docker Compose File</h2>
                <CodeBlock 
                  code={`version: '3.8'
services:
  hippocamp:
    build: .
    ports:
      - "8000:8000"
    environment:
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
      - QDRANT_HOST=qdrant
      - QDRANT_PORT=6333
    depends_on:
      - qdrant

  qdrant:
    image: qdrant/qdrant:latest
    ports:
      - "6333:6333"
    volumes:
      - qdrant_data:/qdrant/storage

volumes:
  qdrant_data:`}
                  language="yaml"
                  id="deploy-compose"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Qdrant Cloud</h2>
                <p className="text-slate-600 mb-4">For managed vector storage:</p>
                <CodeBlock 
                  code={`engine = MemoryEngine(
    api_key="sk-...",
    qdrant_host="your-cluster.qdrant.io",
    qdrant_port=6333,
    qdrant_api_key="your-qdrant-api-key"
)`}
                  language="python"
                  id="deploy-cloud"
                />

                <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Production Checklist</h2>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      Set secure API keys in environment variables
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      Configure persistent storage for Qdrant
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      Set up monitoring and logging
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      Schedule sleep_phase for off-peak hours
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      Configure backup strategy for data
                    </li>
                  </ul>
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
                    <h3 className="font-semibold text-slate-800 mb-2">Structure Your Memories</h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Use consistent metadata schemas and tags for better organization and retrieval.
                    </p>
                    <CodeBlock 
                      code={`# Good: Structured metadata
engine.store(
    content="User prefers dark mode",
    user_id="u1",
    metadata={"type": "preference", "category": "ui"},
    tags=["preference", "ui", "settings"]
)`}
                      language="python"
                      id="bp-structure"
                    />
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Set Appropriate Importance</h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Use importance scores to prioritize critical information.
                    </p>
                    <CodeBlock 
                      code={`# High importance for critical info
engine.store(content="User's birthday: March 15", user_id="u1", importance=0.95)

# Lower importance for casual mentions
engine.store(content="User mentioned liking coffee", user_id="u1", importance=0.4)`}
                      language="python"
                      id="bp-importance"
                    />
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Run Sleep Phase Regularly</h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Schedule sleep_phase during off-peak hours to optimize memory storage.
                    </p>
                    <CodeBlock 
                      code={`# Cron job example: Run daily at 3 AM
# 0 3 * * * python -c "
from hippocamp import MemoryEngine
engine = MemoryEngine(api_key='...')
for user_id in engine.get_active_users():
    engine.sleep_phase(user_id)
"`}
                      language="bash"
                      id="bp-sleep"
                    />
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Use Sessions for Conversations</h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Track conversation context with sessions for better continuity.
                    </p>
                    <CodeBlock 
                      code={`session = engine.create_session(user_id="u1", session_id="chat_001")
session.add_message(role="user", content="Hello!")
session.add_message(role="assistant", content="Hi there!")

# Get relevant context for responses
context = session.get_context(limit=10)
memories = session.get_relevant_memories(query="user preferences")`}
                      language="python"
                      id="bp-sessions"
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
