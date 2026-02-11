"use client"

import { motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const steps = [
  {
    step: "1",
    title: "Install",
    description: "Get started with pip",
    code: "pip install\nhippocampai",
    singleLine: "pip install hippocampai",
  },
  {
    step: "2",
    title: "Initialize",
    description: "Create a memory client",
    code: "from hippocampai\nimport MemoryClient\nclient = MemoryClient()",
    singleLine: "from hippocampai import MemoryClient; client = MemoryClient()",
  },
  {
    step: "3",
    title: "Remember",
    description: "Store and recall",
    code: 'client.remember(\n  "Your first memory",\n  user_id="alice"\n)',
    singleLine: 'client.remember("Your first memory", user_id="alice")',
  },
]

export function QuickStart() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section className="py-20 px-6 bg-slate-50/50" id="quick-start">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            Get started in 3 steps
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Add long-term memory to your AI application in minutes
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 relative"
            >
              <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-semibold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-500">{step.description}</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-slate-900 rounded-xl p-4 pr-12 min-h-[72px] flex items-center">
                    <code className="text-sm text-cyan-400 font-mono whitespace-pre-wrap">{step.code}</code>
                  </div>
                  <button
                    onClick={() => copyCode(step.singleLine, index)}
                    className="absolute right-3 top-3 p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
                    title="Copy to clipboard"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-300 z-10" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/25"
          >
            View Full Documentation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
