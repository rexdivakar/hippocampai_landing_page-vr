import { MessageSquare, Bot, FileText, Users, Sparkles } from "lucide-react"

const useCases = [
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Build chatbots that remember user preferences, conversation history, and context across sessions.",
    examples: ["Customer support bots", "Personal assistants", "Therapy chatbots"],
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Create autonomous agents that learn from interactions and make informed decisions based on past experiences.",
    examples: ["Task automation", "Research assistants", "Code generation"],
  },
  {
    icon: FileText,
    title: "Document Q&A",
    description: "Enable semantic search over large document collections with context-aware retrieval.",
    examples: ["Knowledge bases", "Legal document search", "Research papers"],
  },
  {
    icon: Users,
    title: "Multi-User Systems",
    description: "Manage separate memory spaces for different users while maintaining privacy and isolation.",
    examples: ["SaaS platforms", "Enterprise tools", "Educational apps"],
  },
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
    description:
      "Deliver tailored content and suggestions by learning from user behavior, preferences, and interaction patterns.",
    examples: ["E-commerce recommendations", "Content curation", "Learning paths"],
  },
]

export function UseCases() {
  return (
    <section className="py-20 px-6 border-t border-white/10" id="use-cases">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Use Cases</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            HippocampAI powers memory for diverse AI applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent rounded-xl transition-all duration-300" />
                <div className="relative space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.examples.map((example, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300 border border-white/10"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
