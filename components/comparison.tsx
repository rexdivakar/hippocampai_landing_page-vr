"use client"

import { motion } from "framer-motion"
import { Check, X, Minus, Sparkles } from "lucide-react"

// Rows where only HippocampAI has full support get highlighted
const UNIQUE_ROWS = new Set([
  "Knowledge Graph",
  "Graph-Aware Retrieval (3-way RRF)",
  "Auto-Deduplication (+ API endpoint)",
  "Prospective Memory (future triggers)",
  "Batch Operations (store/get/delete)",
  "Context Assembly + Token Budgeting",
  "Bi-Temporal Facts (time-travel queries)",
  "Sleep Phase Consolidation",
  "Offline Mode + Operation Queue",
])

const features = [
  { name: "Semantic Search", hippocamp: true, mem0: true, langchain: true, custom: "partial" },
  { name: "Knowledge Graph", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Graph-Aware Retrieval (3-way RRF)", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Auto-Deduplication (+ API endpoint)", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Hybrid Retrieval (BM25 + Vector)", hippocamp: true, mem0: false, langchain: "partial", custom: false },
  { name: "Multi-Agent Collaboration", hippocamp: true, mem0: "partial", langchain: false, custom: false },
  { name: "Session Management", hippocamp: true, mem0: "partial", langchain: false, custom: false },
  { name: "Prospective Memory (future triggers)", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Batch Operations (store/get/delete)", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Context Assembly + Token Budgeting", hippocamp: true, mem0: false, langchain: "partial", custom: false },
  { name: "Bi-Temporal Facts (time-travel queries)", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Memory Triggers & Webhooks", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Procedural Memory", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Sleep Phase Consolidation", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Predictive Analytics", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Auto-Healing", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Export / Import (JSON, Parquet, CSV)", hippocamp: true, mem0: false, langchain: false, custom: "partial" },
  { name: "Offline Mode + Operation Queue", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Self-Hosted Option", hippocamp: true, mem0: false, langchain: true, custom: true },
  { name: "Built-in Dashboard UI", hippocamp: true, mem0: true, langchain: false, custom: false },
  { name: "Plugin System", hippocamp: true, mem0: false, langchain: "partial", custom: "partial" },
  { name: "Open Source (Apache 2.0)", hippocamp: true, mem0: false, langchain: true, custom: true },
]

const renderStatus = (status: boolean | string) => {
  if (status === true) {
    return <Check className="h-5 w-5 text-emerald-500" />
  }
  if (status === false) {
    return <X className="h-5 w-5 text-slate-300" />
  }
  return <Minus className="h-5 w-5 text-amber-500" />
}

export function Comparison() {
  return (
    <section className="py-20 px-6 bg-slate-50/50" id="comparison">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            How we compare
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how HippocampAI stacks up against other memory solutions
          </p>
        </motion.div>

        {/* Unique count callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full text-sm text-cyan-700">
            <Check className="w-4 h-4 text-cyan-500" />
            <span><strong>{UNIQUE_ROWS.size} features</strong> only available in HippocampAI — highlighted below</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden min-w-[640px]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-cyan-600">
                    <div className="flex flex-col items-center">
                      <span>HippocampAI</span>
                      <span className="text-xs font-normal text-slate-500">Open Source</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-600">
                    <div className="flex flex-col items-center">
                      <span>Mem0</span>
                      <span className="text-xs font-normal text-slate-500">Cloud</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-600">
                    <div className="flex flex-col items-center">
                      <span>LangChain</span>
                      <span className="text-xs font-normal text-slate-500">Memory</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-600">
                    <div className="flex flex-col items-center">
                      <span>Custom</span>
                      <span className="text-xs font-normal text-slate-500">Solution</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => {
                  const isUnique = UNIQUE_ROWS.has(feature.name)
                  return (
                  <tr
                    key={feature.name}
                    className={`border-b border-slate-100 ${isUnique ? "bg-cyan-50/40" : "bg-white hover:bg-slate-50/50"} transition-colors`}
                  >
                    <td className="py-3 px-6 text-sm text-slate-700 flex items-center gap-2">
                      {feature.name}
                      {isUnique && (
                        <span className="px-1.5 py-0.5 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full whitespace-nowrap">only us</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center bg-cyan-50/60">
                      <div className="flex justify-center">{renderStatus(feature.hippocamp)}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">{renderStatus(feature.mem0)}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">{renderStatus(feature.langchain)}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">{renderStatus(feature.custom)}</div>
                    </td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span>Full support</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="h-4 w-4 text-amber-500" />
              <span>Partial support</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="h-4 w-4 text-slate-300" />
              <span>Not available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
