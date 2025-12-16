"use client"

import { motion } from "framer-motion"

const techStack = [
  "Python",
  "FastAPI", 
  "Qdrant",
  "OpenAI",
  "Docker",
  "SQLite",
  "Ollama",
  "LangChain",
]

export function CompanyLogos() {
  return (
    <section className="py-12 border-y border-gray-100 bg-white">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mb-8"
        >
          Built with modern, production-ready technologies
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-2 bg-gray-50 rounded-full text-gray-600 font-medium text-sm hover:bg-cyan-50 hover:text-cyan-600 transition-colors cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
