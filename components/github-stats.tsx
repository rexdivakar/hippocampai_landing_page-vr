"use client"

import { motion } from "framer-motion"
import { Star, GitFork, Users, FileCode, Github, ExternalLink, BookOpen, Bug } from "lucide-react"

const stats = [
  { icon: Star, label: "Stars", value: "Open Source", color: "amber" },
  { icon: GitFork, label: "License", value: "Apache 2.0", color: "cyan" },
  { icon: Users, label: "Contributors", value: "Welcome!", color: "violet" },
  { icon: FileCode, label: "Language", value: "Python", color: "emerald" },
]

const colorClasses: Record<string, { bg: string; text: string }> = {
  amber: { bg: "bg-amber-50", text: "text-amber-600" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-600" },
  violet: { bg: "bg-violet-50", text: "text-violet-600" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
}

const links = [
  { icon: BookOpen, label: "Documentation", href: "https://github.com/rexdivakar/HippocampAI#readme" },
  { icon: FileCode, label: "Examples", href: "https://github.com/rexdivakar/HippocampAI/tree/main/examples" },
  { icon: Bug, label: "Issues", href: "https://github.com/rexdivakar/HippocampAI/issues" },
  { icon: Users, label: "Discussions", href: "https://github.com/rexdivakar/HippocampAI/discussions" },
]

export function GitHubStats() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Open source & community driven
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the community building the future of AI memory
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const colors = colorClasses[stat.color]
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 p-5 text-center"
                >
                  <div className={`inline-flex p-2.5 rounded-xl ${colors.bg} mb-3`}>
                    <stat.icon className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center">
                  <Github className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">rexdivakar/HippocampAI</h3>
                  <p className="text-sm text-gray-500">Enterprise Memory for AI Agents</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/rexdivakar/HippocampAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  <Star className="h-4 w-4" />
                  Star on GitHub
                </a>
                <a
                  href="https://github.com/rexdivakar/HippocampAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  View Repo
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-gray-600 hover:text-cyan-600 transition-colors text-sm"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
