"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "AI Engineer at TechCorp",
    avatar: "/professional-woman-avatar.png",
    content: "HippocampAI transformed how our chatbot handles context. The semantic search is incredibly accurate.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO at StartupXYZ",
    avatar: "/professional-man-avatar.png",
    content: "We reduced our memory retrieval latency by 80%. The performance is outstanding.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "ML Researcher",
    avatar: "/researcher-woman-avatar.jpg",
    content: "The open-source nature and excellent documentation made integration seamless.",
    rating: 5,
  },
]

export function Testimonials() {
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
            Loved by developers
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of AI engineers building with HippocampAI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
