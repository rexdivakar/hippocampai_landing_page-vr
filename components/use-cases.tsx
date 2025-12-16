"use client"

import { motion } from "framer-motion"
import { MessageSquare, Bot, FileText, Users, Sparkles } from "lucide-react"

const useCases = [
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Build chatbots that remember user preferences, conversation history, and context across sessions.",
    examples: ["Customer support bots", "Personal assistants", "Therapy chatbots"],
    color: "cyan",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Create autonomous agents that learn from interactions and make informed decisions based on past experiences.",
    examples: ["Task automation", "Research assistants", "Code generation"],
    color: "violet",
  },
  {
    icon: FileText,
    title: "Document Q&A",
    description: "Enable semantic search over large document collections with context-aware retrieval.",
    examples: ["Knowledge bases", "Legal document search", "Research papers"],
    color: "emerald",
  },
  {
    icon: Users,
    title: "Multi-User Systems",
    description: "Manage separate memory spaces for different users while maintaining privacy and isolation.",
    examples: ["SaaS platforms", "Enterprise tools", "Educational apps"],
    color: "amber",
  },
  {
    icon: Sparkles,
    title: "Personalization",
    description: "Deliver tailored content and suggestions by learning from user behavior and preferences.",
    examples: ["E-commerce", "Content curation", "Learning paths"],
    color: "rose",
  },
]

const colorClasses: Record<string, { bg: string; text: string; border: string; tag: string }> = {
  cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "hover:border-cyan-300", tag: "bg-cyan-100 text-cyan-700" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", border: "hover:border-violet-300", tag: "bg-violet-100 text-violet-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "hover:border-emerald-300", tag: "bg-emerald-100 text-emerald-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", border: "hover:border-amber-300", tag: "bg-amber-100 text-amber-700" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", border: "hover:border-rose-300", tag: "bg-rose-100 text-rose-700" },
}

export function UseCases() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="use-cases">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for every use case
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            HippocampAI powers memory for diverse AI applications across industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const colors = colorClasses[useCase.color]
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-2xl border border-gray-200 p-6 ${colors.border} transition-all duration-300 hover:shadow-lg`}
              >
                <div className={`inline-flex p-2.5 rounded-xl ${colors.bg} mb-4`}>
                  <useCase.icon className={`h-5 w-5 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example) => (
                    <span
                      key={example}
                      className={`px-2.5 py-1 text-xs rounded-full ${colors.tag}`}
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
