"use client"

import { motion } from "framer-motion"
import { Brain, Database, Workflow } from "lucide-react"

export function WhatIs() {
  return (
    <section className="py-24 px-6 border-t border-border/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            What is HippocampAI?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            HippocampAI is an open-source memory engine that gives LLMs the ability to 
            remember, reason over, and consolidate information across sessions. Named after 
            the brain region responsible for memory formation, it provides the infrastructure 
            for building AI systems that learn and adapt over time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Database,
              title: "Persistent Storage",
              description: "Memories survive beyond sessions. Store, retrieve, and manage long-term context with structured metadata and semantic indexing."
            },
            {
              icon: Brain,
              title: "Intelligent Retrieval",
              description: "Hybrid search combining semantic similarity, keyword matching, and importance scoring. Find the right memories at the right time."
            },
            {
              icon: Workflow,
              title: "Memory Lifecycle",
              description: "Consolidation, decay, and pruning. Memories evolve over time — important ones strengthen, irrelevant ones fade."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card/50"
            >
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
