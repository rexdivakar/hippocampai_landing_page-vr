"use client"

import { motion } from "framer-motion"
import { Check, X, Minus } from "lucide-react"

const features = [
  { name: "Semantic Search", hippocamp: true, mem0: true, langchain: true, custom: "partial" },
  { name: "Auto-Deduplication", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Hybrid Retrieval (BM25 + Vector)", hippocamp: true, mem0: false, langchain: "partial", custom: false },
  { name: "Self-Hosted Option", hippocamp: true, mem0: false, langchain: true, custom: true },
  { name: "Built-in Dashboard UI", hippocamp: true, mem0: true, langchain: false, custom: false },
  { name: "Multi-User / Multi-Session", hippocamp: true, mem0: true, langchain: "partial", custom: "partial" },
  { name: "Importance Scoring", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Sleep Phase Consolidation", hippocamp: true, mem0: false, langchain: false, custom: false },
  { name: "Open Source (Apache 2.0)", hippocamp: true, mem0: false, langchain: true, custom: true },
  { name: "Docker Compose Deploy", hippocamp: true, mem0: false, langchain: "partial", custom: "partial" },
]

const renderStatus = (status: boolean | string) => {
  if (status === true) {
    return <Check className="h-5 w-5 text-emerald-500" />
  }
  if (status === false) {
    return <X className="h-5 w-5 text-gray-300" />
  }
  return <Minus className="h-5 w-5 text-amber-500" />
}

export function Comparison() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="comparison">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How we compare
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how HippocampAI stacks up against other memory solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm min-w-[640px]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-cyan-600">
                    <div className="flex flex-col items-center">
                      <span>HippocampAI</span>
                      <span className="text-xs font-normal text-gray-500">Open Source</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-600">
                    <div className="flex flex-col items-center">
                      <span>Mem0</span>
                      <span className="text-xs font-normal text-gray-500">Cloud</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-600">
                    <div className="flex flex-col items-center">
                      <span>LangChain</span>
                      <span className="text-xs font-normal text-gray-500">Memory</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-600">
                    <div className="flex flex-col items-center">
                      <span>Custom</span>
                      <span className="text-xs font-normal text-gray-500">Solution</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="py-3 px-6 text-sm text-gray-700">{feature.name}</td>
                    <td className="py-3 px-4 text-center bg-cyan-50/30">
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
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span>Full support</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="h-4 w-4 text-amber-500" />
              <span>Partial support</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="h-4 w-4 text-gray-300" />
              <span>Not available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
