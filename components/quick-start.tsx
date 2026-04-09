"use client"

import { motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const installVariants = [
  { label: "hippocampai", desc: "Core library" },
  { label: "hippocampai[openai]", desc: "OpenAI" },
  { label: "hippocampai[anthropic]", desc: "Claude" },
  { label: "hippocampai[groq]", desc: "Groq" },
  { label: "hippocampai[saas]", desc: "Full platform" },
  { label: "hippocampai[all,dev]", desc: "Everything" },
]

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

const dockerCode = `# Clone and start all services
git clone https://github.com/rexdivakar/HippocampAI
cd HippocampAI
docker compose up -d

# Services:
# API       → http://localhost:8000
# Dashboard → http://localhost:3000
# Qdrant    → http://localhost:6333
# Redis     → localhost:6379
# Grafana   → http://localhost:3002`

export function QuickStart() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [copiedDocker, setCopiedDocker] = useState(false)
  const [activeTab, setActiveTab] = useState<"pip" | "docker">("pip")

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const copyDocker = () => {
    navigator.clipboard.writeText(dockerCode)
    setCopiedDocker(true)
    setTimeout(() => setCopiedDocker(false), 2000)
  }

  return (
    <section className="py-20 px-6 bg-slate-50/50" id="quick-start">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            Get started in minutes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Install as a lightweight library or spin up the full platform with Docker
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("pip")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "pip" ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            pip install
          </button>
          <button
            onClick={() => setActiveTab("docker")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "docker" ? "bg-slate-800 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            Docker Compose
          </button>
        </div>

        {activeTab === "pip" && (
          <motion.div
            key="pip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* 3 steps */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-5xl mx-auto mb-8">
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

            {/* Install variants — all on one line */}
            <div className="max-w-5xl mx-auto">
              <p className="text-xs text-slate-500 text-center mb-3 uppercase tracking-wider font-medium">Install only what you need</p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {installVariants.map((v) => (
                  <button
                    key={v.label}
                    onClick={() => navigator.clipboard.writeText(`pip install "${v.label}"`)}
                    title={`Copy: pip install "${v.label}"`}
                    className="group flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-mono text-slate-600 hover:border-cyan-300 hover:text-cyan-700 hover:bg-cyan-50 transition-colors"
                  >
                    <span>{v.label}</span>
                    <span className="text-slate-300 group-hover:text-cyan-400">·</span>
                    <span className="text-slate-400 font-sans group-hover:text-cyan-600">{v.desc}</span>
                    <Copy className="w-3 h-3 ml-1 text-slate-300 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "docker" && (
          <motion.div
            key="docker"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-slate-400 ml-2">terminal</span>
                </div>
                <button
                  onClick={copyDocker}
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {copiedDocker ? (
                    <><Check className="w-4 h-4 text-emerald-400" /> Copied</>
                  ) : (
                    <><Copy className="w-4 h-4" /> Copy</>
                  )}
                </button>
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm text-slate-300 font-mono whitespace-pre">{dockerCode}</code>
              </pre>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
              {[
                { name: "API Server", port: ":8000", color: "cyan" },
                { name: "React Dashboard", port: ":3000", color: "purple" },
                { name: "Qdrant UI", port: ":6333", color: "green" },
                { name: "Redis", port: ":6379", color: "rose" },
                { name: "Grafana", port: ":3002", color: "amber" },
                { name: "Prometheus", port: ":9090", color: "slate" },
              ].map((s) => (
                <div key={s.name} className="bg-white rounded-xl border border-slate-200 p-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">{s.name}</span>
                  <code className="text-xs text-slate-400 font-mono">{s.port}</code>
                </div>
              ))}
            </div>
          </motion.div>
        )}

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
