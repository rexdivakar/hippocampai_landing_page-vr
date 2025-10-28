"use client"

import { motion } from "framer-motion"
import { Terminal, Package, Rocket } from "lucide-react"

const steps = [
  {
    icon: Package,
    title: "Install",
    description: "Get started with a single pip command",
    code: "pip install hippocamp-ai",
  },
  {
    icon: Terminal,
    title: "Initialize",
    description: "Set up your memory engine in seconds",
    code: 'engine = MemoryEngine(api_key="your_key")',
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Start storing and retrieving memories",
    code: 'engine.store("Your first memory")',
  },
]

export function QuickStart() {
  return (
    <section className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get started in minutes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to add long-term memory to your AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all duration-500">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 mb-6">{step.description}</p>
                <div className="p-4 bg-black/50 rounded-lg border border-white/10">
                  <code className="text-sm text-emerald-400 font-mono">{step.code}</code>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
