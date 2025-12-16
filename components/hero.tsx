"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Github, Star } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-4 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/30 to-white" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm text-cyan-700 border border-cyan-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Open Source • Apache 2.0 License
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              AI Agents Forget.
              <br />
              <span className="text-cyan-500">HippocampAI Remembers.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A universal, self-improving memory layer for LLM applications. Power personalized AI experiences with semantic understanding, auto-deduplication, and hybrid retrieval.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4"
          >
            <a
              href="https://github.com/rexdivakar/HippocampAI#quick-start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 h-11 rounded-full transition-colors shadow-lg shadow-cyan-500/25"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/rexdivakar/HippocampAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 h-11 rounded-full transition-colors"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-6 pt-6 text-sm text-gray-500"
          >
            <a
              href="https://github.com/rexdivakar/HippocampAI/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-600 transition-colors"
            >
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>Open Source</span>
            </a>
            <span className="text-gray-300">|</span>
            <span>Production Ready</span>
            <span className="text-gray-300">|</span>
            <span>Self-Hosted</span>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/50 overflow-hidden">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-white rounded-md text-xs text-gray-500 border border-gray-200">
                  localhost:8000/memories
                </div>
              </div>
            </div>
            
            {/* Dashboard Content Preview */}
            <div className="p-6 bg-gray-50">
              <div className="grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <div className="col-span-3 space-y-3">
                  <div className="bg-white rounded-lg border border-gray-200 p-3">
                    <div className="text-xs font-medium text-gray-500 mb-2">Filters</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        <span className="text-xs text-gray-600">Event</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-xs text-gray-600">Preference</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-3">
                    <div className="text-xs font-medium text-gray-500 mb-2">Popular Tags</div>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-cyan-50 text-cyan-600 text-xs rounded-full">#event</span>
                      <span className="px-2 py-1 bg-cyan-50 text-cyan-600 text-xs rounded-full">#preference</span>
                      <span className="px-2 py-1 bg-cyan-50 text-cyan-600 text-xs rounded-full">#conversation</span>
                    </div>
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="col-span-5 bg-white rounded-lg border border-gray-200 p-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Memories</span>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">15</span>
                    </div>
                    <input type="text" placeholder="Search memories..." className="h-7 w-32 px-2 text-xs border border-gray-200 rounded-md" />
                  </div>
                  <div className="space-y-2">
                    {[
                      { type: "event", text: "conda activate hippo", time: "10 days ago" },
                      { type: "preference", text: "i prefer biscuits", time: "11 days ago" },
                      { type: "event", text: "User: how are you?", time: "11 days ago" },
                    ].map((item, i) => (
                      <div key={i} className="p-2 border border-gray-100 rounded-lg hover:border-cyan-200 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-1.5 py-0.5 text-xs rounded ${item.type === 'event' ? 'bg-cyan-100 text-cyan-600' : 'bg-rose-100 text-rose-600'}`}>{item.type}</span>
                          <span className="text-xs text-gray-400">{item.time}</span>
                        </div>
                        <div className="text-sm text-gray-700 truncate">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Detail Panel */}
                <div className="col-span-4 bg-white rounded-lg border border-gray-200 p-3">
                  <div className="text-sm font-medium mb-3">Memory Details</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Content</div>
                      <div className="p-2 bg-gray-50 rounded text-sm">conda activate hippo</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Tags</div>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-cyan-50 text-cyan-600 text-xs rounded-full">#event</span>
                        <span className="px-2 py-1 bg-cyan-50 text-cyan-600 text-xs rounded-full">#important</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-xs text-gray-500">Confidence</div>
                        <div className="text-sm font-medium">0.90</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Importance</div>
                        <div className="text-sm font-medium">8.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
