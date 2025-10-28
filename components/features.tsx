import { Brain, Layers, Zap, Shield, GitBranch, Database } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Semantic Understanding",
    description: "Advanced NLP and embedding models understand context and meaning, not just keywords.",
  },
  {
    icon: Layers,
    title: "Auto-Deduplication",
    description: "Intelligent deduplication saves storage and improves retrieval accuracy automatically.",
  },
  {
    icon: Zap,
    title: "Hybrid Retrieval",
    description: "Combines vector similarity and keyword search for optimal results every time.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Battle-tested with comprehensive error handling, monitoring, and resilience patterns.",
  },
  {
    icon: GitBranch,
    title: "Self-Hosted",
    description: "Full control over your data with easy deployment on your infrastructure.",
  },
  {
    icon: Database,
    title: "Extensible",
    description: "Plugin architecture supports custom providers, embeddings, and storage backends.",
  },
]

export function Features() {
  return (
    <section className="py-20 px-6 border-t border-white/10" id="features">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Why HippocampAI?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built for production AI systems that need reliable, scalable long-term memory
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
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
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
