"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Copy, Check } from "lucide-react"

const integrations = {
  embeddingProviders: [
    { name: "OpenAI", description: "text-embedding-3-small" },
    { name: "Ollama", description: "Local models" },
    { name: "Sentence Transformers", description: "HuggingFace" },
    { name: "Custom", description: "Any embedding API" },
  ],
  vectorDatabases: [
    { name: "Qdrant", description: "Default (recommended)" },
    { name: "In-Memory", description: "Development" },
    { name: "Persistent", description: "Docker volumes" },
  ],
  frameworks: [
    { name: "LangChain", description: "Memory integration" },
    { name: "LlamaIndex", description: "RAG pipelines" },
    { name: "AutoGen", description: "Multi-agent" },
    { name: "Any Python", description: "Direct SDK" },
  ],
}

export function Integrations() {
  const [copied, setCopied] = useState(false)
  const installCommand = "pip install hippocamp-ai"

  const copyCommand = () => {
    navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4 bg-white" id="integrations">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Works with your stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with popular embedding providers, vector databases, and AI frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Embedding Providers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
                <span className="text-cyan-600 font-bold text-sm">AI</span>
              </div>
              <h3 className="font-semibold text-gray-900">Embedding Providers</h3>
            </div>
            <div className="space-y-3">
              {integrations.embeddingProviders.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 text-sm">{item.name}</span>
                  <span className="text-xs text-gray-500">{item.description}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vector Databases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                <span className="text-violet-600 font-bold text-sm">DB</span>
              </div>
              <h3 className="font-semibold text-gray-900">Vector Storage</h3>
            </div>
            <div className="space-y-3">
              {integrations.vectorDatabases.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-violet-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 text-sm">{item.name}</span>
                  <span className="text-xs text-gray-500">{item.description}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-sm">FW</span>
              </div>
              <h3 className="font-semibold text-gray-900">AI Frameworks</h3>
            </div>
            <div className="space-y-3">
              {integrations.frameworks.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 text-sm">{item.name}</span>
                  <span className="text-xs text-gray-500">{item.description}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Installation Command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-gray-900 rounded-3xl p-8 text-center relative">
            <p className="text-gray-400 text-sm mb-4">Install with pip</p>
            <div className="flex items-center justify-center gap-4">
              <code className="text-cyan-400 font-mono text-xl md:text-2xl">{installCommand}</code>
              <button
                onClick={copyCommand}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check className="h-5 w-5 text-emerald-400" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
