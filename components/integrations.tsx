"use client"

import { motion } from "framer-motion"

const integrations = [
  {
    category: "AI",
    title: "LLM & Embedding Providers",
    items: [
      { name: "OpenAI", desc: "GPT + Embeddings" },
      { name: "Anthropic", desc: "Claude models" },
      { name: "Groq", desc: "Fast inference" },
      { name: "Ollama", desc: "Local models" },
      { name: "HuggingFace", desc: "Sentence Transformers" },
      { name: "Custom", desc: "Any provider" },
    ]
  },
  {
    category: "DB",
    title: "Storage Backends",
    items: [
      { name: "Qdrant", desc: "Default (recommended)" },
      { name: "Redis", desc: "50-100x caching" },
      { name: "SQLite", desc: "Metadata store" },
      { name: "Tiered", desc: "Hot/warm/cold" },
    ]
  },
  {
    category: "FW",
    title: "Frameworks & Platforms",
    items: [
      { name: "LangChain", desc: "Memory adapter" },
      { name: "LlamaIndex", desc: "RAG pipelines" },
      { name: "AutoGen", desc: "Multi-agent" },
      { name: "Celery", desc: "Background tasks" },
      { name: "FastAPI", desc: "REST API" },
      { name: "React", desc: "Dashboard UI" },
    ]
  }
]

export function Integrations() {
  return (
    <section className="py-20 px-6" id="integrations">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            Works with your stack
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Seamlessly integrate with popular LLM providers, storage backends, and AI frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {integrations.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  group.category === "AI" ? "bg-purple-100 text-purple-700" :
                  group.category === "DB" ? "bg-green-100 text-green-700" :
                  "bg-cyan-100 text-cyan-700"
                }`}>
                  {group.category}
                </span>
                <h3 className="font-semibold text-slate-800">{group.title}</h3>
              </div>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="text-sm text-slate-400">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
