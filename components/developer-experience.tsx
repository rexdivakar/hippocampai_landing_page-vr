"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, Github, BookOpen } from "lucide-react"
import Link from "next/link"

const codeExamples: Record<string, string> = {
  "Store Memory": `from hippocamp import MemoryEngine

# Initialize the engine
engine = MemoryEngine(api_key="your_openai_key")

# Store a memory with metadata
engine.store(
    content="User prefers dark mode interface",
    user_id="user_123",
    metadata={
        "type": "preference",
        "category": "ui_settings"
    }
)`,
  "Search Memories": `# Search for relevant memories
memories = engine.search(
    query="What are the user's UI preferences?",
    user_id="user_123",
    limit=5
)

for memory in memories:
    print(f"{memory.content}")
    print(f"Relevance: {memory.relevance:.2f}")`,
  "Session Tracking": `# Create a conversation session
session = engine.create_session(
    user_id="user_123",
    session_id="chat_001"
)

# Add messages to session
session.add_message(role="user", content="Hello!")
session.add_message(role="assistant", content="Hi there!")

# Get conversation context
context = session.get_context(limit=10)`,
  "Sleep Phase": `# Run memory consolidation
result = engine.sleep_phase(
    user_id="user_123",
    consolidate=True,
    decay_importance=True,
    prune_threshold=0.3
)

print(f"Consolidated: {result.consolidated}")
print(f"Pruned: {result.pruned}")`
}

export function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState("Store Memory")
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
              Get started in minutes with our intuitive Python SDK. Store, search, and manage 
              memories with just a few lines of code.
            </p>

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
