"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check, Copy } from "lucide-react"

const codeExamples = [
  {
    title: "Store Memory",
    code: `from hippocamp import MemoryEngine

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
  },
  {
    title: "Search Memories",
    code: `# Semantic search with filters
memories = engine.search(
    query="What are the user's UI preferences?",
    user_id="user_123",
    limit=5,
    min_relevance=0.7
)

for memory in memories:
    print(f"Content: {memory.content}")
    print(f"Relevance: {memory.relevance}")
    print(f"Tags: {memory.tags}")`,
  },
  {
    title: "Session Tracking",
    code: `# Create a conversation session
session = engine.create_session(
    user_id="user_123",
    session_id="chat_456"
)

# Add messages to session
session.add_message(
    role="user",
    content="I love hiking in the mountains"
)

# Get context for the conversation
context = session.get_context(limit=10)`,
  },
  {
    title: "Sleep Phase",
    code: `# Trigger memory consolidation
engine.sleep_phase(
    user_id="user_123",
    consolidate=True,      # Merge similar memories
    decay_importance=True, # Reduce old memory scores
    prune_threshold=0.3    # Remove low-value memories
)

# Check memory stats
stats = engine.get_stats(user_id="user_123")
print(f"Total memories: {stats.total}")
print(f"Storage saved: {stats.dedup_savings}%")`,
  },
]

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple API, powerful features
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get started in minutes with our intuitive Python SDK. Store, search, and manage memories with just a few lines of code.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {codeExamples.map((example, index) => (
                <button
                  key={example.title}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === index
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/rexdivakar/HippocampAI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-600 transition-colors text-sm shadow-lg shadow-cyan-500/25"
              >
                View on GitHub
              </a>
              <a
                href="https://github.com/rexdivakar/HippocampAI#api-reference"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition-colors text-sm"
              >
                API Reference
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-gray-500 font-mono">example.py</span>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto bg-gray-900 max-h-[400px]">
                <code className="text-sm text-gray-300 font-mono whitespace-pre">{codeExamples[activeTab].code}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
