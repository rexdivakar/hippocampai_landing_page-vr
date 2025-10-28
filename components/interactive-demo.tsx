"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Sparkles } from "lucide-react"

export function InteractiveDemo() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Array<{ content: string; relevance: number }>>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    if (!query.trim()) return

    setIsSearching(true)

    // Simulate search
    setTimeout(() => {
      setResults([
        { content: "User prefers dark mode interface", relevance: 0.95 },
        { content: "Last active on mobile device", relevance: 0.87 },
        { content: "Interested in AI and machine learning", relevance: 0.82 },
      ])
      setIsSearching(false)
    }, 1000)
  }

  return (
    <section className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Try it yourself
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the power of semantic memory search in real-time
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Ask anything about stored memories..."
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-50"
            >
              {isSearching ? <Sparkles className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>

          {results.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 space-y-4">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Memory {index + 1}</span>
                    <span className="text-sm text-emerald-400">{(result.relevance * 100).toFixed(0)}% relevant</span>
                  </div>
                  <p className="text-white">{result.content}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
