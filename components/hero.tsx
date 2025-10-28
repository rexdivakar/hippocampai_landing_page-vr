import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Backed by Y Combinator
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
              AI Agents Forget.
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                HippocampAI Remembers.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto text-pretty">
              HippocampAI is a universal, self-improving memory layer for LLM applications, powering personalized AI
              experiences that cut costs and enhance user delight.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-black font-medium px-8 h-12 text-base rounded-lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
