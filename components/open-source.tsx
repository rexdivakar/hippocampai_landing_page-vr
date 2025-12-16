"use client"

import { motion } from "framer-motion"
import { Star, Scale, Users, Code, Github, BookOpen, FileCode, MessageCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

const stats = [
  { icon: Star, label: "Open Source", sublabel: "Stars", color: "amber" },
  { icon: Scale, label: "Apache 2.0", sublabel: "License", color: "purple" },
  { icon: Users, label: "Welcome!", sublabel: "Contributors", color: "cyan" },
  { icon: Code, label: "Python", sublabel: "Language", color: "green" },
]

const links = [
  { icon: BookOpen, label: "Documentation", href: "/docs", internal: true },
  { icon: FileCode, label: "Examples", href: "/examples", internal: true },
  { icon: Star, label: "Issues", href: "https://github.com/rexdivakar/HippocampAI/issues" },
  { icon: MessageCircle, label: "Discussions", href: "https://github.com/rexdivakar/HippocampAI/discussions" },
]

export function OpenSource() {
  return (
    <section className="py-20 px-6 bg-slate-50/50" id="open-source">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">
            Open source & community driven
          </h2>
          <p className="text-lg text-slate-600">
            Join the community building the future of AI memory
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const colorClasses: Record<string, string> = {
              amber: "bg-amber-100 text-amber-600",
              purple: "bg-purple-100 text-purple-600",
              cyan: "bg-cyan-100 text-cyan-600",
              green: "bg-green-100 text-green-600",
            }
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 p-4 text-center"
              >
                <div className={`w-10 h-10 rounded-lg ${colorClasses[stat.color]} flex items-center justify-center mx-auto mb-2`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="font-semibold text-slate-800">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.sublabel}</div>
              </motion.div>
            )
          })}
        </div>

        {/* GitHub Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl border border-slate-200 p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                <Github className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">rexdivakar/HippocampAI</div>
                <div className="text-sm text-slate-500">Enterprise Memory for AI Agents</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/rexdivakar/HippocampAI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                <Star className="w-4 h-4" />
                Star on GitHub
              </a>
              <a
                href="https://github.com/rexdivakar/HippocampAI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                View Repo
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {links.map((link) => (
              link.internal ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-lg text-sm text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-lg text-sm text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
