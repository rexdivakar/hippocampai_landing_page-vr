"use client"

import { motion } from "framer-motion"
import { MessageSquare, Bot, FileText, Users, Sparkles } from "lucide-react"

const useCases = [
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Build chatbots that remember user preferences, conversation history, and context across sessions.",
    tags: [
      { label: "Customer support bots", color: "cyan" },
      { label: "Personal assistants", color: "cyan" },
      { label: "Therapy chatbots", color: "cyan" },
    ]
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Create autonomous agents that learn from interactions and make informed decisions based on past experiences.",
    tags: [
      { label: "Task automation", color: "green" },
      { label: "Research assistants", color: "green" },
      { label: "Code generation", color: "green" },
    ]
  },
  {
    icon: FileText,
    title: "Document Q&A",
    description: "Enable semantic search over large document collections with context-aware retrieval.",
    tags: [
      { label: "Knowledge bases", color: "purple" },
      { label: "Legal document search", color: "purple" },
      { label: "Research papers", color: "purple" },
    ]
  },
  {
    icon: Users,
    title: "Multi-User Systems",
    description: "Manage separate memory spaces for different users while maintaining privacy and isolation.",
    tags: [
      { label: "SaaS platforms", color: "amber" },
      { label: "Enterprise tools", color: "amber" },
      { label: "Educational apps", color: "amber" },
    ]
  },
  {
    icon: Sparkles,
    title: "Personalization",
    description: "Deliver tailored content and suggestions by learning from user behavior and preferences.",
    tags: [
      { label: "E-commerce", color: "rose" },
      { label: "Content curation", color: "rose" },
      { label: "Learning paths", color: "rose" },
    ]
  }
]

const tagColors: Record<string, string> = {
  cyan: "bg-cyan-100 text-cyan-700",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  amber: "bg-amber-100 text-amber-700",
  rose: "bg-rose-100 text-rose-700",
}

export function UseCases() {
  return (
    <section className="py-20 px-6 bg-slate-50/50" id="use-cases">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            Built for every use case
          </h2>
          <p className="text-lg text-slate-600">
            HippocampAI powers memory for diverse AI applications across industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <div className={`w-10 h-10 rounded-lg ${tagColors[useCase.tags[0].color].split(' ')[0]} flex items-center justify-center mb-4`}>
                <useCase.icon className={`w-5 h-5 ${tagColors[useCase.tags[0].color].split(' ')[1]}`} />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{useCase.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${tagColors[tag.color]}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
