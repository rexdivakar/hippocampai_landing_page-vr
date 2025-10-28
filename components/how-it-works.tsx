import { Code2, Database, Search, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Code2,
    title: "Initialize",
    description: "Set up HippocampAI with your preferred LLM provider and vector database in minutes.",
    code: `from hippocampai import HippocampAI

memory = HippocampAI(
  provider="openai",
  vector_db="qdrant"
)`,
  },
  {
    icon: Database,
    title: "Store Memories",
    description: "Add conversations, documents, or any text data to build your AI agent's knowledge base.",
    code: `await memory.add_memory(
  content="User prefers dark mode",
  metadata={"user_id": "123"}
)`,
  },
  {
    icon: Search,
    title: "Retrieve Context",
    description: "Query memories with semantic search to get relevant context for your AI responses.",
    code: `results = await memory.search(
  query="user preferences",
  limit=5
)`,
  },
  {
    icon: Sparkles,
    title: "Build Smarter Agents",
    description: "Use retrieved memories to create AI agents that remember and learn from past interactions.",
    code: `response = llm.generate(
  prompt=query,
  context=results
)`,
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-6 border-t border-white/10" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Get started with HippocampAI in four simple steps</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <Icon className="h-6 w-6 text-emerald-400" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="text-sm text-emerald-400 font-medium mb-1">Step {index + 1}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                    <div className="rounded-lg bg-black/50 border border-white/10 p-4">
                      <pre className="text-sm text-emerald-400 overflow-x-auto">
                        <code>{step.code}</code>
                      </pre>
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
