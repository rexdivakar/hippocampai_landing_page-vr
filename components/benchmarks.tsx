"use client"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Line, LineChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const performanceData = [
  { name: "100", latency: 12.0, p95: 14.0, operations: 1.0 },
  { name: "500", latency: 5.6, p95: 5.6, operations: 2.5 },
  { name: "1K", latency: 2.5, p95: 3.0, operations: 36.0 },
  { name: "5K", latency: 5.7, p95: 5.7, operations: 40.0 },
  { name: "10K", latency: 4.8, p95: 4.8, operations: 85.0 },
]

export function Benchmarks() {
  const [metric, setMetric] = useState<"latency" | "operations">("latency")

  return (
    <section className="py-20 px-6" id="comparison">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-emerald-400">Performance Benchmarks</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Real-world retrieval latency and accuracy metrics</p>
        </div>

        <Card className="bg-gradient-to-br from-white/5 to-transparent border-white/10">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white">Performance Metrics</CardTitle>
                <CardDescription className="text-gray-400">
                  Latency, P95, and memory operations across different dataset sizes
                </CardDescription>
              </div>
              <Tabs value={metric} onValueChange={(v) => setMetric(v as "latency" | "operations")}>
                <TabsList className="bg-white/5 border border-white/10">
                  <TabsTrigger
                    value="latency"
                    className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400"
                  >
                    Performance
                  </TabsTrigger>
                  <TabsTrigger
                    value="operations"
                    className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400"
                  >
                    Operations
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                latency: {
                  label: "Latency (ms)",
                  color: "hsl(180, 100%, 50%)",
                },
                p95: {
                  label: "P95 (ms)",
                  color: "hsl(160, 100%, 50%)",
                },
                operations: {
                  label: "Memory Operations (K)",
                  color: "hsl(10, 100%, 60%)",
                },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                {metric === "latency" ? (
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="latency" fill="hsl(180, 100%, 50%)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="p95" fill="hsl(160, 100%, 50%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                ) : (
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="operations"
                      stroke="hsl(10, 100%, 60%)"
                      strokeWidth={2}
                      dot={{ fill: "hsl(10, 100%, 60%)", r: 4 }}
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </ChartContainer>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-cyan-400" />
                  <span className="text-sm text-gray-400">Latency</span>
                </div>
                <div className="text-2xl font-bold text-white">2.5-14ms</div>
              </div>
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="text-sm text-gray-400">P95</span>
                </div>
                <div className="text-2xl font-bold text-white">3.0-14ms</div>
              </div>
              <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="text-sm text-gray-400">Memory Operations</span>
                </div>
                <div className="text-2xl font-bold text-white">1K-85K</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
