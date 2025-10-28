"use client"

import { motion } from "framer-motion"

const companies = [
  { name: "OpenAI", logo: "/openai-logo-inspired-abstract.png" },
  { name: "Anthropic", logo: "/anthropic-logo-abstract.png" },
  { name: "Hugging Face", logo: "/hugging-face-logo.png" },
  { name: "Cohere", logo: "/cohere-logo-inspired.png" },
  { name: "Stability AI", logo: "/stability-ai-logo.jpg" },
]

export function TrustedBy() {
  return (
    <section className="py-20 border-b border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-400 uppercase tracking-wider">Trusted by AI teams at</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={company.logo || "/placeholder.svg"} alt={company.name} className="h-8 w-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
