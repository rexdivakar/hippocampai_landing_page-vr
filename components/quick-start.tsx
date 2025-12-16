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
    code: "pip install\nhippocamp-ai",
    singleLine: "pip install hippocamp-ai",
  },
  {
    step: "2",
    title: "Initialize",
    description: "Set up your engine",
    code: 'engine =\nMemoryEngine(api_key="your_key")',
    singleLine: 'engine = MemoryEngine(api_key="your_key")',
  },
  {
    step: "3",
    title: "Use",
    description: "Store and retrieve",
    code: 'engine.store("Your\nfirst memory")',
    singleLine: 'engine.store("Your first memory")',
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
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get started in 3 steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-semibold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gray-900 rounded-xl p-4 pr-12 min-h-[72px] flex items-center">
                    <code className="text-sm text-cyan-400 font-mono whitespace-pre-wrap">{step.code}</code>
                  </div>
                  <button
                    onClick={() => copyCode(step.singleLine, index)}
                    className="absolute right-3 top-3 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
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
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300 z-10" />
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
