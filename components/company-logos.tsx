"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const companies = [
  { name: "Rewind", logo: "/openai-logo-inspired-abstract.png" },
  { name: "Agent.ai", logo: "/anthropic-logo-abstract.png" },
  { name: "PWC", logo: "/hugging-face-logo.png" },
  { name: "Microsoft", logo: "/cohere-logo-inspired.png" },
  { name: "NVIDIA", logo: "/mistral-ai-logo.png" },
  { name: "Mastra", logo: "/google-ai-logo.png" },
  { name: "AWS", logo: "/openai-logo-inspired-abstract.png" },
]

export function CompanyLogos() {
  return (
    <section className="py-20 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">Used by 50k+ Developers From</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
