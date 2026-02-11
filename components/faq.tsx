"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is HippocampAI?",
    answer: "HippocampAI is an open-source, production-ready memory engine that gives AI systems human-like memory capabilities. Named after the brain region responsible for memory formation, it provides persistent memory storage, knowledge graphs, hybrid retrieval, multi-agent collaboration, and 102+ API methods for building memory-enabled AI applications.",
  },
  {
    question: "How does the Knowledge Graph work?",
    answer: "HippocampAI automatically builds a knowledge graph on every remember() call. It extracts entities and relationships from unstructured text in real-time, enabling graph-aware retrieval that combines vector similarity, BM25 keyword matching, and graph traversal via Reciprocal Rank Fusion (RRF) for superior accuracy.",
  },
  {
    question: "What embedding and LLM providers are supported?",
    answer: "HippocampAI supports OpenAI, Anthropic Claude, Groq, Ollama (local models), Sentence Transformers from HuggingFace, or any custom embedding/LLM provider. Install specific providers via pip extras: pip install hippocampai[openai], hippocampai[anthropic], or hippocampai[groq].",
  },
  {
    question: "How does multi-agent collaboration work?",
    answer: "Multiple AI agents can share memory spaces for coordination. Each agent can remember() and recall() from shared namespaces, enabling teams of agents to build collective knowledge. Agent-scoped access ensures proper isolation while allowing collaboration where needed.",
  },
  {
    question: "What is Sleep Phase consolidation?",
    answer: "Inspired by how human memory works during sleep, the Sleep Phase periodically consolidates memories by merging related information, updating importance scores based on access patterns, and pruning low-value memories. This keeps your memory store optimized and relevant over time.",
  },
  {
    question: "How do I deploy HippocampAI?",
    answer: "HippocampAI can be installed via pip (pip install hippocampai) for lightweight library use, or deployed as a full SaaS platform with pip install hippocampai[saas] which includes authentication, rate limiting, Celery background tasks, and a React dashboard. Docker Compose deployment is also supported.",
  },
  {
    question: "What are Memory Triggers?",
    answer: "Memory Triggers are event-driven actions that fire when specific memory events occur. You can configure webhooks, websocket notifications, and log actions that react to memory creation, updates, or retrieval events in real-time across your system.",
  },
  {
    question: "Is HippocampAI production-ready?",
    answer: "Yes. HippocampAI includes Redis caching (50-100x faster), auto-healing for memory issues, health monitoring, comprehensive error handling, and handles 500-1000+ requests per second. It supports tiered storage (hot/warm/cold), export/import for backup, and offline mode for resilience.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-6" id="faq">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about HippocampAI
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
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
