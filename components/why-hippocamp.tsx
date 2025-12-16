"use client"

import { motion } from "framer-motion"

const principles = [
  {
    title: "Memory is infrastructure, not a feature",
    description: "LLMs need persistent, structured memory to move beyond stateless interactions. HippocampAI treats memory as a first-class system component."
  },
  {
    title: "Retrieval quality matters more than quantity",
    description: "Hybrid search with importance scoring ensures you get the right memories, not just similar ones. Precision over recall when it counts."
  },
  {
    title: "Memories should evolve",
    description: "Static storage isn't enough. Consolidation, decay, and pruning keep your memory store relevant and efficient over time."
  },
  {
    title: "Self-hosted by default",
    description: "Your data stays on your infrastructure. No vendor lock-in, no data leaving your control. Deploy anywhere Docker runs."
  },
  {
    title: "Composable primitives",
    description: "Simple, well-defined APIs that compose into complex workflows. Build what you need without fighting the framework."
  },
  {
    title: "Production-ready from day one",
    description: "Error handling, retry logic, connection pooling. Built for real workloads, not just demos."
  }
]

export function WhyHippocamp() {
  return (
    <section className="py-24 px-6 border-t border-border/50 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Why HippocampAI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Engineering philosophy and explicit design choices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="space-y-2"
            >
              <h3 className="font-semibold">{principle.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
