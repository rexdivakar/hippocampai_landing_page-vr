"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check, Copy } from "lucide-react"

const codeExamples = [
  {
    title: "Basic Usage",
    code: `from hippocamp import MemoryEngine

# Initialize the engine
engine = MemoryEngine(api_key="your_api_key")

# Store a memory
engine.store(
    content="User prefers dark mode",
    metadata={"user_id": "123", "category": "preferences"}
)

# Retrieve relevant memories
memories = engine.search("What are user preferences?")
print(memories)`,
  },
  {
    title: "Conversation Context",
    code: `# Track conversation history
conversation = engine.create_conversation("user_123")

# Add messages
conversation.add_message(
    role="user",
    content="I love hiking in the mountains"
)

# Get contextual memories
context = conversation.get_context(
    query="outdoor activities",
    limit=5
)`,
  },
  {
    title: "Advanced Filtering",
    code: `# Complex memory queries
memories = engine.search(
    query="product feedback",
    filters={
        "sentiment": "positive",
        "date_range": {"start": "2024-01-01", "end": "2024-12-31"},
        "tags": ["feature-request", "ui"]
    },
    limit=10,
    min_relevance=0.8
)`,
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
    <section className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Simple API, powerful features
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get started in minutes with our intuitive Python SDK. No complex setup required.
            </p>

            <div className="flex gap-4 mb-8">
              {codeExamples.map((example, index) => (
                <button
                  key={example.title}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === index
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/20"
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/rexdivakar/HippocampAI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-colors duration-300"
              >
                View on GitHub
              </a>
              <a
                href="/docs"
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Read Docs
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-emerald-500/30 bg-black/50 backdrop-blur-xl overflow-hidden shadow-2xl shadow-emerald-500/10">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm text-gray-300 font-mono">{codeExamples[activeTab].code}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
