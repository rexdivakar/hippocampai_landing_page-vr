import { TrendingUp, Database, Clock, Zap } from "lucide-react"

const metrics = [
  {
    icon: TrendingUp,
    value: "+40%",
    label: "Retrieval Accuracy",
    description: "vs vector-only search",
  },
  {
    icon: Database,
    value: "30-70%",
    label: "Storage Savings",
    description: "with deduplication",
  },
  {
    icon: Clock,
    value: "30 sec",
    label: "Deploy Time",
    description: "with Docker Compose",
  },
  {
    icon: Zap,
    value: "450 q/s",
    label: "Throughput",
    description: "single server",
  },
]

export function PerformanceMetrics() {
  return (
    <section className="py-20 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent rounded-xl transition-all duration-300" />
                <div className="relative space-y-3">
                  <Icon className="h-8 w-8 text-emerald-400" />
                  <div className="text-4xl font-bold text-emerald-400">{metric.value}</div>
                  <div className="space-y-1">
                    <div className="font-medium text-white">{metric.label}</div>
                    <div className="text-sm text-gray-400">{metric.description}</div>
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
