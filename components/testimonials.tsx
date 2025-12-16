"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "AI Engineer",
    content: "HippocampAI transformed how our chatbot handles context. The semantic search is incredibly accurate and the deduplication saves us significant storage costs.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO at StartupXYZ",
    content: "We reduced our memory retrieval latency significantly. The hybrid search approach gives us the best of both worlds - semantic understanding and keyword precision.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "ML Researcher",
    content: "The open-source nature and excellent documentation made integration seamless. Sleep Phase consolidation is a game-changer for long-running agents.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    content: "Finally, a memory solution that just works. The Python SDK is intuitive and the self-hosting option gives us full control over our data.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    content: "Our AI assistant now remembers user preferences across sessions. The importance scoring helps surface the most relevant memories.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Founder at AgentStack",
    content: "The multi-tenant support is exactly what we needed for our SaaS platform. Each customer gets isolated memory spaces with zero configuration.",
    rating: 5,
  },
]

export function Testimonials() {
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
            Loved by developers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what developers are saying about HippocampAI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-cyan-200 mb-4" />
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{testimonial.content}</p>
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
