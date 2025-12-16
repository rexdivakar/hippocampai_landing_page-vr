"use client"

import { useState } from "react"
import { Brain, Zap, Database, Moon, Search, Users, Tag, Shield, BookOpen, Code, Terminal, Settings, Layers, ArrowRight, Copy, Check, ExternalLink, FileText, Server, Key, Cpu, HardDrive, GitBranch } from "lucide-react"
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
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-xs text-gray-400 font-mono">{language}</span>
          <button
            onClick={() => copyCode(code, id)}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-gray-700"
          >
            {copiedCode === id ? (
              <><Check className="h-3.5 w-3.5 text-emerald-400" /> Copied!</>
            ) : (
              <><Copy className="h-3.5 w-3.5" /> Copy</>
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-gray-300 font-mono">{code}</code>
        </pre>
      </div>
    </div>
  )

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">{/* Sidebar */}

          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-cyan-500" />
                Documentation
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? "bg-cyan-50 text-cyan-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <section.icon className="h-4 w-4" />
                    {section.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
                <a
                  href="https://github.com/rexdivakar/HippocampAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  View on GitHub
                </a>
                <Link
                  href="/examples"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 transition-colors"
                >
                  <Code className="h-4 w-4" />
                  View Examples
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              
              {/* Overview */}
              {activeSection === "overview" && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-cyan-100 rounded-xl">
                      <Brain className="h-8 w-8 text-cyan-600" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-1">HippocampAI</h1>
                      <p className="text-gray-500">Enterprise Memory for AI Agents</p>
                    </div>
                  </div>

                  <div className="prose prose-gray max-w-none">
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      HippocampAI is a universal, self-improving memory layer for LLM applications. Named after the hippocampus - the part of the brain responsible for memory formation - it provides semantic understanding, auto-deduplication, and hybrid retrieval to power personalized AI experiences.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      {[
                        { icon: Search, title: "Hybrid Retrieval", desc: "Combines BM25 keyword search with vector similarity for 40% better accuracy than vector-only approaches." },
                        { icon: Database, title: "Auto-Deduplication", desc: "Automatically detects and merges similar memories, saving 30-70% storage while improving quality." },
                        { icon: Moon, title: "Sleep Phase", desc: "Unique memory consolidation inspired by human cognition. Periodically optimizes and prunes memories." },
                        { icon: Users, title: "Multi-User Support", desc: "Isolated memory spaces per user with session tracking. Perfect for multi-tenant applications." },
                        { icon: Tag, title: "Smart Tagging", desc: "Automatic tag extraction and categorization. Filter memories by type, importance, or custom metadata." },
                        { icon: Shield, title: "Self-Hosted", desc: "Full control over your data. Deploy with Docker Compose in 30 seconds on your infrastructure." },
                      ].map((feature) => (
                        <div key={feature.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                          <feature.icon className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">{feature.title}</h4>
                            <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Architecture Overview</h2>
                    <p className="text-gray-600 mb-4">
                      HippocampAI follows a pipeline architecture that processes memories through several stages:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        {["Ingestion", "Embedding", "Deduplication", "Storage", "Retrieval"].map((step, i) => (
                          <div key={step} className="flex items-center gap-2">
                            <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium shadow-sm">
                              {step}
                            </div>
                            {i < 4 && <ArrowRight className="h-4 w-4 text-gray-400" />}
                          </div>
                        ))}
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {[
                        { name: "Python", desc: "Core language" },
                        { name: "FastAPI", desc: "API framework" },
                        { name: "Qdrant", desc: "Vector database" },
                        { name: "OpenAI", desc: "Embeddings" },
                        { name: "Docker", desc: "Deployment" },
                        { name: "SQLite", desc: "Metadata storage" },
                      ].map((tech) => (
                        <span key={tech.name} className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-full text-sm" title={tech.desc}>
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Why HippocampAI?</h2>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Open Source:</strong> Apache 2.0 license, free to use and modify</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Production Ready:</strong> Battle-tested with comprehensive error handling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Easy Integration:</strong> Simple Python SDK, works with any LLM framework</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Privacy First:</strong> Self-hosted, your data never leaves your infrastructure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}


              {/* Installation */}
              {activeSection === "installation" && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Installation</h1>
                  <p className="text-gray-600 mb-6">Get HippocampAI up and running in your environment.</p>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Using pip (Recommended)</h2>
                  <p className="text-gray-600 mb-4">The simplest way to install HippocampAI:</p>
                  <CodeBlock code="pip install hippocamp-ai" language="bash" id="pip-install" />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">From Source</h2>
                  <p className="text-gray-600 mb-4">For the latest development version:</p>
                  <CodeBlock 
                    code={`git clone https://github.com/rexdivakar/HippocampAI.git
cd HippocampAI
pip install -e .`}
                    language="bash"
                    id="source-install"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Using Docker</h2>
                  <p className="text-gray-600 mb-4">For a complete setup with Qdrant vector database included:</p>
                  <CodeBlock 
                    code={`# Clone the repository
git clone https://github.com/rexdivakar/HippocampAI.git
cd HippocampAI

# Copy environment template
cp .env.example .env

# Edit .env and add your OpenAI API key
# OPENAI_API_KEY=sk-your-key-here

# Start all services
docker-compose up -d

# Check status
docker-compose ps`}
                    language="bash"
                    id="docker-install"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Requirements</h2>
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <ul className="space-y-2 text-gray-600">
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
                        Docker & Docker Compose (optional, for Qdrant)
                      </li>
                    </ul>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Environment Variables</h2>
                  <p className="text-gray-600 mb-4">Create a <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">.env</code> file with the following:</p>
                  <CodeBlock 
                    code={`# Required
OPENAI_API_KEY=sk-your-openai-api-key

# Qdrant Configuration (optional if using Docker)
QDRANT_HOST=localhost
QDRANT_PORT=6333
QDRANT_API_KEY=  # Optional, for Qdrant Cloud

# Optional Settings
HIPPOCAMP_COLLECTION=memories
HIPPOCAMP_EMBEDDING_MODEL=text-embedding-3-small
HIPPOCAMP_DEDUP_THRESHOLD=0.85
HIPPOCAMP_LOG_LEVEL=INFO`}
                    language="bash"
                    id="env-vars"
                  />

                  <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <h4 className="font-medium text-amber-800 mb-2">⚠️ Important</h4>
                    <p className="text-sm text-amber-700">
                      Never commit your <code className="px-1 py-0.5 bg-amber-100 rounded">.env</code> file to version control. 
                      Add it to your <code className="px-1 py-0.5 bg-amber-100 rounded">.gitignore</code>.
                    </p>
                  </div>
                </div>
              )}

              {/* Quick Start */}
              {activeSection === "quick-start" && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Quick Start</h1>
                  <p className="text-gray-600 mb-6">Get up and running with HippocampAI in just a few minutes.</p>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Initialize the Engine</h2>
                  <p className="text-gray-600 mb-4">First, create a MemoryEngine instance with your configuration:</p>
                  <CodeBlock 
                    code={`from hippocamp import MemoryEngine
import os

# Initialize with environment variable
engine = MemoryEngine(
    api_key=os.getenv("OPENAI_API_KEY"),
    qdrant_host="localhost",
    qdrant_port=6333
)

# Or initialize with direct API key
engine = MemoryEngine(api_key="sk-your-key-here")`}
                    language="python"
                    id="init-engine"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Store Memories</h2>
                  <p className="text-gray-600 mb-4">Store information that your AI should remember:</p>
                  <CodeBlock 
                    code={`# Store a simple memory
memory = engine.store(
    content="User prefers dark mode interface",
    user_id="user_123"
)
print(f"Stored memory with ID: {memory.id}")

# Store with metadata and tags
memory = engine.store(
    content="User mentioned they love hiking in the mountains",
    user_id="user_123",
    metadata={
        "type": "preference",
        "category": "hobbies",
        "source": "conversation"
    },
    tags=["hobby", "outdoor", "personal"],
    importance=0.8  # Higher importance (0-1)
)

# Store conversation events
engine.store(
    content="User asked about weather in Seattle",
    user_id="user_123",
    session_id="chat_session_1",
    metadata={"type": "event", "intent": "weather_query"}
)`}
                    language="python"
                    id="store-memory"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Search Memories</h2>
                  <p className="text-gray-600 mb-4">Retrieve relevant memories using semantic search:</p>
                  <CodeBlock 
                    code={`# Basic semantic search
memories = engine.search(
    query="What are the user's hobbies?",
    user_id="user_123",
    limit=5
)

for memory in memories:
    print(f"Content: {memory.content}")
    print(f"Relevance: {memory.relevance:.2f}")
    print(f"Tags: {memory.tags}")
    print(f"Created: {memory.created_at}")
    print("---")

# Search with filters
memories = engine.search(
    query="user preferences",
    user_id="user_123",
    limit=10,
    min_relevance=0.7,
    tags=["preference"]  # Filter by tags
)

# Hybrid search with custom weights
memories = engine.search(
    query="dark mode settings",
    user_id="user_123",
    semantic_weight=0.7,  # Vector similarity
    keyword_weight=0.3    # BM25 keyword matching
)`}
                    language="python"
                    id="search-memory"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Use Sessions</h2>
                  <p className="text-gray-600 mb-4">Track conversations with session management:</p>
                  <CodeBlock 
                    code={`# Create a conversation session
session = engine.create_session(
    user_id="user_123",
    session_id="chat_session_1"
)

# Add messages to the session
session.add_message(
    role="user",
    content="I'm planning a hiking trip to the mountains"
)

session.add_message(
    role="assistant", 
    content="That sounds exciting! Which mountains are you considering?"
)

# Get conversation context
context = session.get_context(limit=10)
print(f"Session has {len(context)} messages")

# Get relevant memories for the conversation
relevant = session.get_relevant_memories(
    query="hiking trip planning",
    limit=5
)`}
                    language="python"
                    id="session-usage"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Run Sleep Phase</h2>
                  <p className="text-gray-600 mb-4">Optimize your memory store periodically:</p>
                  <CodeBlock 
                    code={`# Run memory consolidation
result = engine.sleep_phase(
    user_id="user_123",
    consolidate=True,       # Merge similar memories
    decay_importance=True,  # Reduce old memory scores
    prune_threshold=0.3     # Remove low-value memories
)

print(f"Memories consolidated: {result.consolidated}")
print(f"Memories pruned: {result.pruned}")
print(f"Storage saved: {result.storage_saved_percent}%")`}
                    language="python"
                    id="sleep-phase"
                  />
                </div>
              )}


              {/* Core Concepts */}
              {activeSection === "core-concepts" && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Core Concepts</h1>
                  <p className="text-gray-600 mb-6">Understanding the key concepts behind HippocampAI.</p>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Hybrid Retrieval</h2>
                  <p className="text-gray-600 mb-4">
                    HippocampAI combines two search methods for optimal results:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                      <h4 className="font-medium text-cyan-800 mb-2">Vector Similarity</h4>
                      <p className="text-sm text-cyan-700">Uses embeddings to find semantically similar content. Great for understanding meaning and context.</p>
                    </div>
                    <div className="p-4 bg-violet-50 rounded-xl border border-violet-200">
                      <h4 className="font-medium text-violet-800 mb-2">BM25 Keyword Search</h4>
                      <p className="text-sm text-violet-700">Traditional keyword matching for exact terms. Ensures important keywords aren't missed.</p>
                    </div>
                  </div>
                  <CodeBlock 
                    code={`# Configure hybrid search weights
memories = engine.search(
    query="user interface dark mode",
    user_id="user_123",
    semantic_weight=0.7,  # 70% vector similarity
    keyword_weight=0.3,   # 30% BM25 keywords
    limit=10
)

# The combined score provides 40% better accuracy
# than vector-only search in most cases`}
                    language="python"
                    id="hybrid-search"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Auto-Deduplication</h2>
                  <p className="text-gray-600 mb-4">
                    When storing memories, HippocampAI automatically detects similar content and either merges or skips duplicates:
                  </p>
                  <CodeBlock 
                    code={`# Configure deduplication threshold
engine = MemoryEngine(
    api_key="your_key",
    dedup_threshold=0.85  # 85% similarity = duplicate
)

# These will be deduplicated:
engine.store(content="User likes dark mode", user_id="u1")
engine.store(content="User prefers dark mode interface", user_id="u1")
# Only one memory stored, saving storage

# Check deduplication stats
stats = engine.get_stats(user_id="u1")
print(f"Dedup savings: {stats.dedup_savings}%")`}
                    language="python"
                    id="dedup-config"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Sleep Phase Consolidation</h2>
                  <p className="text-gray-600 mb-4">
                    Inspired by how human memory consolidates during sleep, this feature periodically optimizes your memory store:
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-4">
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
                  <CodeBlock 
                    code={`# Run sleep phase (recommended: daily or weekly)
result = engine.sleep_phase(
    user_id="user_123",
    consolidate=True,
    decay_importance=True,
    prune_threshold=0.3
)

# Schedule with cron or background task
# 0 3 * * * python -c "engine.sleep_phase('user_123')"`}
                    language="python"
                    id="sleep-phase-concept"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Importance Scoring</h2>
                  <p className="text-gray-600 mb-4">
                    Each memory has an importance score (0-1) that affects retrieval priority:
                  </p>
                  <CodeBlock 
                    code={`# Store with explicit importance
engine.store(
    content="User's birthday is March 15",
    user_id="user_123",
    importance=0.95  # Very important
)

# Importance affects search ranking
memories = engine.search(
    query="important dates",
    user_id="user_123",
    importance_weight=0.5  # Factor importance into ranking
)

# Importance decays over time if not accessed
# Access a memory to boost its importance
engine.access_memory(memory_id="mem_123")`}
                    language="python"
                    id="importance-scoring"
                  />
                </div>
              )}

              {/* Memory Types */}
              {activeSection === "memory-types" && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Memory Types</h1>
                  <p className="text-gray-600 mb-6">HippocampAI supports different types of memories for various use cases.</p>

                  <div className="space-y-6">
                    <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-cyan-200 text-cyan-800 text-xs font-medium rounded">event</span>
                        <h3 className="font-semibold text-gray-900">Events</h3>
                      </div>
                      <p className="text-gray-600 mb-3">Conversation messages, user actions, and interactions.</p>
                      <CodeBlock 
                        code={`engine.store(
    content="User asked about product pricing",
    user_id="user_123",
    metadata={"type": "event", "action": "inquiry"}
)`}
                        language="python"
                        id="event-type"
                      />
                    </div>

                    <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-rose-200 text-rose-800 text-xs font-medium rounded">preference</span>
                        <h3 className="font-semibold text-gray-900">Preferences</h3>
                      </div>
                      <p className="text-gray-600 mb-3">User settings, likes, dislikes, and personal choices.</p>
                      <CodeBlock 
                        code={`engine.store(
    content="User prefers email notifications over SMS",
    user_id="user_123",
    metadata={"type": "preference", "category": "notifications"},
    importance=0.8
)`}
                        language="python"
                        id="preference-type"
                      />
                    </div>

                    <div className="p-5 bg-violet-50 rounded-xl border border-violet-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-violet-200 text-violet-800 text-xs font-medium rounded">fact</span>
                        <h3 className="font-semibold text-gray-900">Facts</h3>
                      </div>
                      <p className="text-gray-600 mb-3">Factual information, knowledge, and data points.</p>
                      <CodeBlock 
                        code={`engine.store(
    content="User's company has 50 employees",
    user_id="user_123",
    metadata={"type": "fact", "category": "company_info"},
    importance=0.7
)`}
                        language="python"
                        id="fact-type"
                      />
                    </div>

                    <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-amber-200 text-amber-800 text-xs font-medium rounded">custom</span>
                        <h3 className="font-semibold text-gray-900">Custom Types</h3>
                      </div>
                      <p className="text-gray-600 mb-3">Define your own memory types with custom metadata.</p>
                      <CodeBlock 
                        code={`engine.store(
    content="User completed onboarding tutorial",
    user_id="user_123",
    metadata={
        "type": "milestone",
        "milestone_name": "onboarding_complete",
        "completed_at": "2024-01-15"
    },
    tags=["milestone", "onboarding"]
)`}
                        language="python"
                        id="custom-type"
                      />
                    </div>
                  </div>
                </div>
              )}


              {/* API Reference */}
              {activeSection === "api-reference" && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">API Reference</h1>
                  <p className="text-gray-600 mb-6">Complete reference for the HippocampAI Python SDK.</p>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">MemoryEngine</h2>
                  <p className="text-gray-600 mb-4">The main class for interacting with HippocampAI.</p>
                  
                  <div className="bg-gray-50 rounded-xl p-5 mb-6">
                    <h3 className="font-mono text-sm font-semibold text-gray-900 mb-3">Constructor</h3>
                    <CodeBlock 
                      code={`MemoryEngine(
    api_key: str,                    # OpenAI API key for embeddings
    qdrant_host: str = "localhost",  # Qdrant server host
    qdrant_port: int = 6333,         # Qdrant server port
    collection_name: str = "memories",
    embedding_model: str = "text-embedding-3-small",
    dedup_threshold: float = 0.85,   # Similarity threshold for dedup
    embeddings: BaseEmbeddings = None  # Custom embedding provider
)`}
                      language="python"
                      id="constructor"
                    />
                  </div>

                  <h3 className="font-semibold text-gray-900 mt-8 mb-4">Methods</h3>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h4 className="font-mono text-sm font-semibold text-cyan-600">store()</h4>
                        <p className="text-sm text-gray-500 mt-1">Store a new memory in the database.</p>
                      </div>
                      <div className="p-4">
                        <CodeBlock 
                          code={`engine.store(
    content: str,              # Memory content (required)
    user_id: str,              # User identifier (required)
    session_id: str = None,    # Optional session ID
    metadata: dict = None,     # Custom metadata
    tags: List[str] = None,    # Tags for filtering
    importance: float = 0.5    # Importance score (0-1)
) -> Memory

# Returns a Memory object with:
# - id: str
# - content: str
# - user_id: str
# - embedding: List[float]
# - metadata: dict
# - tags: List[str]
# - importance: float
# - created_at: datetime`}
                          language="python"
                          id="store-method"
                        />
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h4 className="font-mono text-sm font-semibold text-cyan-600">search()</h4>
                        <p className="text-sm text-gray-500 mt-1">Search for relevant memories using hybrid retrieval.</p>
                      </div>
                      <div className="p-4">
                        <CodeBlock 
                          code={`engine.search(
    query: str,                     # Search query (required)
    user_id: str,                   # User identifier (required)
    limit: int = 10,                # Maximum results
    min_relevance: float = 0.0,     # Minimum relevance score
    tags: List[str] = None,         # Filter by tags
    metadata_filter: dict = None,   # Filter by metadata
    semantic_weight: float = 0.7,   # Vector search weight
    keyword_weight: float = 0.3,    # BM25 search weight
    importance_weight: float = 0.0  # Importance score weight
) -> List[Memory]

# Each Memory includes a relevance score (0-1)`}
                          language="python"
                          id="search-method"
                        />
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h4 className="font-mono text-sm font-semibold text-cyan-600">create_session()</h4>
                        <p className="text-sm text-gray-500 mt-1">Create a conversation session for tracking messages.</p>
                      </div>
                      <div className="p-4">
                        <CodeBlock 
                          code={`engine.create_session(
    user_id: str,       # User identifier (required)
    session_id: str     # Session identifier (required)
) -> Session

# Session methods:
# - add_message(role: str, content: str)
# - get_context(limit: int = 10) -> List[Message]
# - get_relevant_memories(query: str, limit: int = 5)`}
                          language="python"
                          id="session-method"
                        />
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h4 className="font-mono text-sm font-semibold text-cyan-600">sleep_phase()</h4>
                        <p className="text-sm text-gray-500 mt-1">Run memory consolidation and optimization.</p>
                      </div>
                      <div className="p-4">
                        <CodeBlock 
                          code={`engine.sleep_phase(
    user_id: str,                   # User identifier (required)
    consolidate: bool = True,       # Merge similar memories
    decay_importance: bool = True,  # Reduce old memory scores
    prune_threshold: float = 0.3    # Remove memories below this
) -> SleepPhaseResult

# Returns:
# - consolidated: int (memories merged)
# - pruned: int (memories removed)
# - storage_saved_percent: float`}
                          language="python"
                          id="sleep-method"
                        />
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h4 className="font-mono text-sm font-semibold text-cyan-600">delete_memory()</h4>
                        <p className="text-sm text-gray-500 mt-1">Delete a specific memory by ID.</p>
                      </div>
                      <div className="p-4">
                        <CodeBlock 
                          code={`engine.delete_memory(
    memory_id: str,    # Memory ID to delete
    user_id: str       # User identifier for verification
) -> bool  # True if deleted successfully`}
                          language="python"
                          id="delete-method"
                        />
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h4 className="font-mono text-sm font-semibold text-cyan-600">get_stats()</h4>
                        <p className="text-sm text-gray-500 mt-1">Get memory statistics for a user.</p>
                      </div>
                      <div className="p-4">
                        <CodeBlock 
                          code={`engine.get_stats(user_id: str) -> Stats

# Returns:
# - total_memories: int
# - total_sessions: int
# - storage_used_mb: float
# - dedup_savings_percent: float
# - avg_importance: float`}
                          language="python"
                          id="stats-method"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {/* Configuration */}
              {activeSection === "configuration" && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Configuration</h1>
                  <p className="text-gray-600 mb-6">Configure HippocampAI for your specific needs.</p>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Environment Variables</h2>
                  <CodeBlock 
                    code={`# Required
OPENAI_API_KEY=sk-your-openai-api-key

# Qdrant Configuration
QDRANT_HOST=localhost
QDRANT_PORT=6333
QDRANT_API_KEY=  # For Qdrant Cloud

# HippocampAI Settings
HIPPOCAMP_COLLECTION=memories
HIPPOCAMP_EMBEDDING_MODEL=text-embedding-3-small
HIPPOCAMP_DEDUP_THRESHOLD=0.85
HIPPOCAMP_LOG_LEVEL=INFO

# Performance Tuning
HIPPOCAMP_BATCH_SIZE=100
HIPPOCAMP_CACHE_TTL=3600`}
                    language="bash"
                    id="env-config"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Embedding Providers</h2>
                  
                  <h3 className="font-semibold text-gray-900 mt-6 mb-3">OpenAI (Default)</h3>
                  <CodeBlock 
                    code={`engine = MemoryEngine(
    api_key="sk-your-openai-key",
    embedding_model="text-embedding-3-small"  # or "text-embedding-3-large"
)`}
                    language="python"
                    id="openai-config"
                  />

                  <h3 className="font-semibold text-gray-900 mt-6 mb-3">Ollama (Local Models)</h3>
                  <CodeBlock 
                    code={`from hippocamp.embeddings import OllamaEmbeddings

# First, pull the model: ollama pull nomic-embed-text
embeddings = OllamaEmbeddings(
    model="nomic-embed-text",
    base_url="http://localhost:11434"
)

engine = MemoryEngine(embeddings=embeddings)`}
                    language="python"
                    id="ollama-config"
                  />

                  <h3 className="font-semibold text-gray-900 mt-6 mb-3">Sentence Transformers</h3>
                  <CodeBlock 
                    code={`from hippocamp.embeddings import SentenceTransformerEmbeddings

embeddings = SentenceTransformerEmbeddings(
    model_name="all-MiniLM-L6-v2"
)

engine = MemoryEngine(embeddings=embeddings)`}
                    language="python"
                    id="st-config"
                  />

                  <h3 className="font-semibold text-gray-900 mt-6 mb-3">Custom Embeddings</h3>
                  <CodeBlock 
                    code={`from hippocamp.embeddings import BaseEmbeddings
from typing import List

class CustomEmbeddings(BaseEmbeddings):
    def __init__(self, api_key: str):
        self.api_key = api_key
    
    def embed(self, text: str) -> List[float]:
        # Your embedding logic here
        # Must return a list of floats
        return embedding_vector
    
    def embed_batch(self, texts: List[str]) -> List[List[float]]:
        # Optional: batch embedding for efficiency
        return [self.embed(t) for t in texts]

engine = MemoryEngine(embeddings=CustomEmbeddings("key"))`}
                    language="python"
                    id="custom-embeddings"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Vector Database Options</h2>
                  
                  <h3 className="font-semibold text-gray-900 mt-6 mb-3">Qdrant (Recommended)</h3>
                  <CodeBlock 
                    code={`# Local Qdrant
engine = MemoryEngine(
    api_key="openai-key",
    qdrant_host="localhost",
    qdrant_port=6333
)

# Qdrant Cloud
engine = MemoryEngine(
    api_key="openai-key",
    qdrant_host="your-cluster.qdrant.io",
    qdrant_port=6333,
    qdrant_api_key="your-qdrant-api-key"
)`}
                    language="python"
                    id="qdrant-config"
                  />
                </div>
              )}

              {/* Deployment */}
              {activeSection === "deployment" && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Deployment</h1>
                  <p className="text-gray-600 mb-6">Deploy HippocampAI to production.</p>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Docker Compose (Recommended)</h2>
                  <p className="text-gray-600 mb-4">The easiest way to deploy with all dependencies:</p>
                  <CodeBlock 
                    code={`version: '3.8'

services:
  hippocamp-api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
      - QDRANT_HOST=qdrant
      - QDRANT_PORT=6333
    depends_on:
      - qdrant
    restart: unless-stopped

  qdrant:
    image: qdrant/qdrant:latest
    ports:
      - "6333:6333"
      - "6334:6334"
    volumes:
      - qdrant_data:/qdrant/storage
    restart: unless-stopped

  # Optional: Dashboard UI
  hippocamp-ui:
    build: ./ui
    ports:
      - "3000:3000"
    depends_on:
      - hippocamp-api

volumes:
  qdrant_data:`}
                    language="yaml"
                    id="docker-compose"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Quick Deploy Commands</h2>
                  <CodeBlock 
                    code={`# Clone repository
git clone https://github.com/rexdivakar/HippocampAI.git
cd HippocampAI

# Set environment variables
export OPENAI_API_KEY=sk-your-key

# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f hippocamp-api

# Stop services
docker-compose down`}
                    language="bash"
                    id="quick-deploy"
                  />

                  <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Production Checklist</h2>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <ul className="space-y-3">
                      {[
                        "Use persistent volumes for Qdrant data",
                        "Set up proper authentication for the API",
                        "Configure rate limiting for OpenAI calls",
                        "Set up monitoring and alerting",
                        "Regular backups of Qdrant data",
                        "Use environment variables for secrets",
                        "Enable HTTPS with proper certificates",
                        "Set resource limits for containers",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Best Practices */}
              {activeSection === "best-practices" && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Best Practices</h1>
                  <p className="text-gray-600 mb-6">Tips for getting the most out of HippocampAI.</p>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Memory Storage</h2>
                  <div className="space-y-4 mb-8">
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                      <h4 className="font-medium text-emerald-800 mb-2">✓ Do: Be specific and concise</h4>
                      <CodeBlock 
                        code={`# Good
engine.store(content="User prefers dark mode", user_id="u1")

# Bad - too vague
engine.store(content="User said something about settings", user_id="u1")`}
                        language="python"
                        id="bp-specific"
                      />
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                      <h4 className="font-medium text-emerald-800 mb-2">✓ Do: Use meaningful tags</h4>
                      <CodeBlock 
                        code={`engine.store(
    content="User's favorite color is blue",
    user_id="u1",
    tags=["preference", "color", "personal"]
)`}
                        language="python"
                        id="bp-tags"
                      />
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                      <h4 className="font-medium text-emerald-800 mb-2">✓ Do: Set appropriate importance</h4>
                      <CodeBlock 
                        code={`# High importance for critical info
engine.store(content="User is allergic to peanuts", importance=0.95)

# Lower importance for casual mentions
engine.store(content="User mentioned liking coffee", importance=0.4)`}
                        language="python"
                        id="bp-importance"
                      />
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Search Optimization</h2>
                  <div className="space-y-4 mb-8">
                    <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                      <h4 className="font-medium text-cyan-800 mb-2">Use filters to narrow results</h4>
                      <CodeBlock 
                        code={`# Filter by tags for faster, more relevant results
memories = engine.search(
    query="user preferences",
    user_id="u1",
    tags=["preference"],
    min_relevance=0.7
)`}
                        language="python"
                        id="bp-filter"
                      />
                    </div>
                    <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                      <h4 className="font-medium text-cyan-800 mb-2">Tune hybrid weights for your use case</h4>
                      <CodeBlock 
                        code={`# More semantic for conversational queries
engine.search(query="what does user like", semantic_weight=0.8)

# More keyword for specific terms
engine.search(query="API key settings", keyword_weight=0.5)`}
                        language="python"
                        id="bp-weights"
                      />
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Tips</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Run sleep_phase() during off-peak hours to optimize storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Use batch operations when storing multiple memories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Set reasonable limits on search results (10-20 is usually enough)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Use local embeddings (Ollama) for high-volume, cost-sensitive apps</span>
                    </li>
                  </ul>
                </div>
              )}

            </div>
          </main>
        </div>
      </div>
    </div>
  )
}