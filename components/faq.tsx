"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, Search, X } from "lucide-react"

const faqs = [
  {
    question: "What is HippocampAI?",
    answer: "HippocampAI is an open-source, production-ready memory engine that gives AI systems human-like memory capabilities. Named after the brain region responsible for memory formation, it provides persistent memory storage, knowledge graphs, hybrid retrieval, prospective memory, batch operations, multi-agent collaboration, and 120+ API methods for building memory-enabled AI applications.",
  },
  {
    question: "How does the Knowledge Graph work?",
    answer: "HippocampAI automatically builds a knowledge graph on every remember() call. It extracts entities and relationships from unstructured text in real-time, enabling graph-aware retrieval that combines vector similarity, BM25 keyword matching, and graph traversal via Reciprocal Rank Fusion (RRF) for 40% better accuracy than vector-only search.",
  },
  {
    question: "What embedding and LLM providers are supported?",
    answer: "HippocampAI supports OpenAI (GPT-4o + text-embedding-3), Anthropic Claude, Groq (LLaMA / Mixtral), Ollama (fully offline / local), Sentence Transformers from HuggingFace, or any custom provider. Install only what you need: pip install hippocampai[openai], hippocampai[anthropic], hippocampai[groq], or hippocampai[all,dev] for everything.",
  },
  {
    question: "Which LLM should I use?",
    answer: "For production: OpenAI (GPT-4o) or Anthropic (Claude 3.5+) give the best entity extraction and procedural rule quality. For fast / cheap inference: Groq with LLaMA 3.1 is a strong default. For fully offline / private deployments: Ollama with Qwen 2.5 7B-instruct works well. Groq retries are capped at 3×20s so API timeouts stay under 90 seconds.",
  },
  {
    question: "How does multi-agent collaboration work?",
    answer: "Multiple AI agents can share memory spaces for coordination. Each agent can remember() and recall() from shared namespaces using a user_id + agent_id scope. Agent-scoped access ensures proper isolation while allowing collaboration where needed. Ideal for pipelines where a triage agent stores context that a resolution agent later retrieves.",
  },
  {
    question: "What is Sleep Phase consolidation?",
    answer: "Inspired by how human memory works during sleep, the Sleep Phase periodically consolidates memories by merging related information, updating importance scores based on access patterns, and pruning low-value memories below a configurable threshold. Call client.sleep_phase(user_id='...') manually or let the Celery background worker run it automatically.",
  },
  {
    question: "What is Prospective Memory?",
    answer: "Prospective memory is \"remembering to do something in the future.\" You create intents that fire either at a specific time (with optional daily/weekly/monthly/custom_cron recurrence) or when a recall() query matches keywords or embedding similarity. Triggered intents surface automatically in recall() results — no extra code required.",
  },
  {
    question: "How do Batch Operations work?",
    answer: "Three REST endpoints let you store, fetch, or delete hundreds of memories in a single call: POST /v1/memories/batch, POST /v1/memories/batch/get, and POST /v1/memories/batch/delete. Individual item failures are logged but never abort the whole batch. There's also POST /v1/memories/deduplicate with dry_run=true so you can preview what would be removed before committing.",
  },
  {
    question: "How do I deploy HippocampAI?",
    answer: "Two paths: (1) Lightweight library — pip install hippocampai, point at a Qdrant instance, done. (2) Full platform — docker compose up -d spins up the API server, React dashboard, Qdrant, Redis, Celery workers, Prometheus, and Grafana in ~30 seconds. For SaaS features (auth, rate limiting, multi-tenant) use pip install hippocampai[saas].",
  },
  {
    question: "What are the hardware requirements?",
    answer: "Minimum for development: 2 vCPUs, 4 GB RAM, Qdrant + Redis. Recommended for production: 4+ vCPUs, 8 GB RAM, persistent volume for Qdrant data. Knowledge graph extraction and LLM-backed consolidation are CPU-light but require outbound calls to your LLM provider unless running Ollama locally.",
  },
  {
    question: "How does data privacy work? Is it GDPR-compliant?",
    answer: "HippocampAI is self-hosted — your data never leaves your infrastructure. There is no cloud sync or telemetry. For GDPR: you control data retention, can delete all memories for a user_id with a single call, and the audit logging system provides a complete trail. Session data and vector embeddings are stored only in your Qdrant and Redis instances.",
  },
  {
    question: "Can I migrate from another memory system?",
    answer: "Yes. Use the import endpoint (client.import_memories(path='backup.json', user_id='...')) to bulk-load memories from JSON, Parquet, or CSV. This covers migration from mem0, LangChain memory, or any custom solution. Export your existing data first with client.export(user_id='...', format='json').",
  },
  {
    question: "How do I monitor memory health?",
    answer: "HippocampAI ships with a Prometheus /metrics endpoint (available in app.py since v0.5.1) and a pre-built Grafana dashboard at port 3002. The auto-healing pipeline continuously monitors duplicate rates, importance score distributions, and graph connectivity. You can also call client.health_check() to get a per-user health score.",
  },
  {
    question: "What are Memory Triggers?",
    answer: "Memory Triggers are event-driven actions that fire when specific memory lifecycle events occur (on_remember, on_recall, on_update, on_delete, on_conflict, on_expire). Configure webhooks, websocket notifications, or log actions with filter conditions (eq, gt, lt, contains, matches). Fire history is tracked per trigger.",
  },
  {
    question: "Is HippocampAI production-ready?",
    answer: "Yes. HippocampAI handles 1000+ requests/sec with Redis caching (50-100x faster), auto-heals memory issues, and includes comprehensive error handling. It supports tiered storage (hot/warm/cold) for cost optimization, export/import for backup, offline mode with operation queueing, and audit logging for compliance. v0.5.1 also fixes RemoteBackend URL bugs and caps Groq timeouts at 90 seconds.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [query, setQuery] = useState("")

  const filtered = query.trim()
    ? faqs.filter(
        (f) =>
          f.question.toLowerCase().includes(query.toLowerCase()) ||
          f.answer.toLowerCase().includes(query.toLowerCase())
      )
    : faqs

  return (
    <section className="py-20 px-6" id="faq">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about HippocampAI
          </p>
        </motion.div>

        {/* Search box */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpenIndex(null) }}
              placeholder="Search questions… e.g. docker, GDPR, batch"
              className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {query && (
            <p className="text-xs text-slate-400 mt-2 pl-1">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>
          )}
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          <AnimatePresence>
            {filtered.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15, delay: index * 0.03 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-10 text-slate-500">
              <p className="mb-2">No matching questions.</p>
              <button onClick={() => setQuery("")} className="text-cyan-600 hover:underline text-sm">Clear search</button>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a
            href="https://github.com/rexdivakar/HippocampAI/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/25"
          >
            Ask on GitHub Discussions
          </a>
        </motion.div>
      </div>
    </section>
  )
}
