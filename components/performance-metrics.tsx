"use client"

import { motion } from "framer-motion"
import { TrendingUp, Database, Clock, Zap } from "lucide-react"

const metrics = [
  {
    icon: TrendingUp,
    value: "+40%",
    label: "Retrieval Accuracy",
    description: "vs vector-only search",
    color: "cyan",
  },
  {
    icon: Database,
    value: "30-70%",
    label: "Storage Savings",
    description: "with deduplication",
    color: "emerald",
  },
  {
    icon: Clock,
    value: "30 sec",
    label: "Deploy Time",
    description: "with Docker Compose",
    color: "violet",
  },
  {
    icon: Zap,
    value: "450 q/s",
    label: "Throughput",
    description: "single server",
    color: "amber",
  },
]

const colorClasses: Record<string, { bg: string; text: string }> = {
  cyan: { bg: "bg-cyan-50", text: "text-cyan-600" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
  violet: { bg: "bg-violet-50", text: "text-violet-600" },
  amber: { bg: "bg-amber-50", text: "text-amber-600" },
}

export function PerformanceMetrics() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Performance that scales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built for production workloads with enterprise-grade reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {metrics.map((metric, index) => {
            const colors = colorClasses[metric.color]
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl ${colors.bg} mb-4`}>
                  <metric.icon className={`h-6 w-6 ${colors.text}`} />
                </div>
                <div className={`text-3xl font-bold ${colors.text} mb-1`}>{metric.value}</div>
                <div className="font-medium text-gray-900 text-sm">{metric.label}</div>
                <div className="text-xs text-gray-500 mt-1">{metric.description}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
