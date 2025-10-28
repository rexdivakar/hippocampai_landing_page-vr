"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Shield, Code2, Database, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Intelligent Memory",
    description: "Advanced semantic understanding with vector embeddings for contextual recall",
    gradient: "from-emerald-500/20 to-teal-500/20",
    image: "/ai-brain-neural-network-visualization.jpg",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-100ms query latency with optimized vector search",
    gradient: "from-blue-500/20 to-cyan-500/20",
    image: "/speed-performance-dashboard.jpg",
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description: "Built-in security, compliance, and data privacy controls",
    gradient: "from-purple-500/20 to-pink-500/20",
    image: "/security-shield-protection.png",
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Simple Python SDK with comprehensive documentation",
    gradient: "from-orange-500/20 to-red-500/20",
    image: "/code-editor-python.jpg",
  },
  {
    icon: Database,
    title: "Scalable Storage",
    description: "Distributed architecture handling millions of memories",
    gradient: "from-green-500/20 to-emerald-500/20",
    image: "/database-servers-cloud.jpg",
  },
  {
    icon: Sparkles,
    title: "Auto-Optimization",
    description: "Self-tuning algorithms that improve over time",
    gradient: "from-yellow-500/20 to-orange-500/20",
    image: "/ai-optimization-graph.jpg",
  },
]

export function BentoFeatures() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Everything you need for AI memory
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Built from the ground up for modern AI applications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${feature.gradient} p-8 hover:border-emerald-500/50 transition-all duration-500`}
            >
              <div className="relative z-10">
                <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img src={feature.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
