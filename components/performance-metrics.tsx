"use client"

import { motion } from "framer-motion"
import { TrendingUp, Database, Clock, Zap } from "lucide-react"

const metrics = [
  {
    icon: TrendingUp,
    value: "+40%",
    label: "Retrieval Accuracy",
    sublabel: "vs vector-only search",
    color: "cyan"
  },
  {
    icon: Database,
    value: "30-70%",
    label: "Storage Savings",
    sublabel: "with deduplication",
    color: "amber"
  },
  {
    icon: Clock,
    value: "30 sec",
    label: "Deploy Time",
    sublabel: "with Docker Compose",
    color: "green"
  },
  {
    icon: Zap,
    value: "450 q/s",
    label: "Throughput",
    sublabel: "single server",
    color: "purple"
  }
]

export function PerformanceMetrics() {
  return (
    <section className="py-20 px-6" id="performance">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            Performance that scales
          </h2>
          <p className="text-lg text-slate-600">
            Built for production workloads with enterprise-grade reliability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const colorClasses: Record<string, { bg: string; text: string; value: string }> = {
              cyan: { bg: "bg-cyan-50", text: "text-cyan-600", value: "text-cyan-600" },
              amber: { bg: "bg-amber-50", text: "text-amber-600", value: "text-amber-600" },
              green: { bg: "bg-green-50", text: "text-green-600", value: "text-green-600" },
              purple: { bg: "bg-purple-50", text: "text-purple-600", value: "text-purple-600" },
            }
            const colors = colorClasses[metric.color]
            
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 p-6 text-center"
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div className={`text-3xl font-bold ${colors.value} mb-1`}>{metric.value}</div>
                <div className="font-medium text-slate-800">{metric.label}</div>
                <div className="text-sm text-slate-500">{metric.sublabel}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
