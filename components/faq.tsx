"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does auto-deduplication work?",
    answer: "HippocampAI uses semantic similarity to detect duplicate or near-duplicate memories. When a new memory is stored, it's compared against existing memories using vector embeddings. If the similarity exceeds a configurable threshold (default 0.85), the memories are merged or the duplicate is discarded, saving 30-70% storage while improving retrieval quality.",
  },
  {
    question: "What embedding models are supported?",
    answer: "HippocampAI supports OpenAI embeddings (text-embedding-3-small by default), local models via Ollama, Sentence Transformers from HuggingFace, or any custom embedding function. Simply configure your preferred provider in the MemoryEngine initialization.",
  },
  {
    question: "How does hybrid retrieval improve accuracy?",
    answer: "Hybrid retrieval combines vector similarity search with BM25 keyword-based search. This approach captures both semantic meaning and exact keyword matches, resulting in 40% better retrieval accuracy compared to vector-only search. The weights between semantic and keyword search are configurable.",
  },
  {
    question: "What is Sleep Phase consolidation?",
    answer: "Sleep Phase is a unique feature inspired by how human memory works during sleep. It periodically consolidates memories by merging related information, updating importance scores based on access patterns, and pruning low-value memories. This keeps your memory store optimized and relevant over time.",
  },
  {
    question: "How do I deploy HippocampAI?",
    answer: "HippocampAI can be deployed in 30 seconds using Docker Compose. Simply clone the repository, configure your environment variables (OpenAI API key), and run 'docker-compose up'. The system includes Qdrant vector database and the HippocampAI API server.",
  },
  {
    question: "How do I handle multi-tenant applications?",
    answer: "HippocampAI supports multi-tenancy through user_id and session_id parameters. Each user has their own isolated memory space. You can also create separate sessions within a user to track different conversations or contexts. All queries are automatically scoped to prevent cross-user data leakage.",
  },
  {
    question: "Is HippocampAI production-ready?",
    answer: "Yes, HippocampAI is designed for production use. It includes comprehensive error handling, retry logic, connection pooling, and monitoring hooks. The system uses Qdrant for reliable vector storage and supports persistent data volumes for durability.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 bg-white" id="faq">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
          <p className="text-gray-600 mb-4">Still have questions?</p>
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
