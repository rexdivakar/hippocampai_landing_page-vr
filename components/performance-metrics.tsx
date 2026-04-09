"use client"

import { motion } from "framer-motion"
import { TrendingUp, Database, Clock, Zap, Activity, HardDrive } from "lucide-react"

const metrics = [
  {
    icon: TrendingUp,
    value: "+40%",
    label: "Retrieval Accuracy",
    sublabel: "3-way fusion vs vector-only",
    color: "cyan"
  },
  {
    icon: Zap,
    value: "50-100x",
    label: "Faster with Cache",
    sublabel: "Redis caching layer",
    color: "purple"
  },
  {
    icon: Database,
    value: "1000+",
    label: "Requests / sec",
    sublabel: "production throughput",
    color: "green"
  },
  {
    icon: Clock,
    value: "30 sec",
    label: "Deploy Time",
    sublabel: "pip install or Docker",
    color: "amber"
  }
]

const latency = [
  { label: "Ingestion (p50)", value: "< 50 ms", bar: 20 },
  { label: "Recall (p50)", value: "< 80 ms", bar: 32 },
  { label: "Recall (p95)", value: "< 200 ms", bar: 60 },
  { label: "Recall (p99)", value: "< 400 ms", bar: 80 },
  { label: "Graph traversal", value: "< 120 ms", bar: 42 },
  { label: "Context assembly", value: "< 100 ms", bar: 36 },
]

const storageStats = [
  { label: "Deduplication savings", value: "30–70%", color: "cyan" },
  { label: "Hot/warm/cold tiering", value: "Automatic", color: "green" },
  { label: "HNSW index params", value: "M=32 · EF=128", color: "purple" },
  { label: "Cache hit rate (typical)", value: "> 80%", color: "amber" },
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
            Built for production workloads — run the{" "}
            <a
              href="https://github.com/rexdivakar/HippocampAI/tree/main/bench"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline"
            >
              benchmark suite
            </a>{" "}
            yourself to verify
          </p>
        </motion.div>

        {/* Top stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
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

        {/* Latency breakdown + storage */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Latency */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-slate-200 p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Activity className="w-5 h-5 text-cyan-500" />
              <h3 className="font-semibold text-slate-800">Latency Benchmarks</h3>
            </div>
            <div className="space-y-3">
              {latency.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-slate-600">{item.label}</span>
                    <span className="text-sm font-mono font-medium text-slate-800">{item.value}</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
              <p className="text-xs text-slate-400 pt-1">Measured on commodity hardware · Qdrant HNSW M=32 EF=128</p>
            </div>
          </motion.div>

          {/* Storage stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-slate-200 p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <HardDrive className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold text-slate-800">Storage Efficiency</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {storageStats.map((s) => {
                const colorMap: Record<string, string> = {
                  cyan: "bg-cyan-50 border-cyan-100 text-cyan-700",
                  green: "bg-green-50 border-green-100 text-green-700",
                  purple: "bg-purple-50 border-purple-100 text-purple-700",
                  amber: "bg-amber-50 border-amber-100 text-amber-700",
                }
                return (
                  <div key={s.label} className={`rounded-lg border p-3 ${colorMap[s.color]}`}>
                    <div className="font-semibold text-base">{s.value}</div>
                    <div className="text-xs mt-0.5 opacity-80">{s.label}</div>
                  </div>
                )
              })}
            </div>
            <div className="space-y-2">
              {[
                "Ingestion target: > 50 ops / sec",
                "Tiered storage: hot → warm → cold auto-migration",
                "Export/import: JSON, Parquet, CSV",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
