import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Tag, Sparkles, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

const releases = [
  {
    version: "v0.5.1",
    type: "Latest Release",
    typeColor: "cyan",
    date: "April 9, 2026",
    summary: "Batch memory operations, deduplication API, RemoteBackend fixes, and QueryRouter improvements.",
    added: [
      "Batch memory endpoints — POST /v1/memories/batch, /batch/get, /batch/delete",
      "Deduplication endpoint — POST /v1/memories/deduplicate with dry_run=true support",
      "Single-memory GET — GET /v1/memories/{memory_id}, returns 404 if not found",
      "Prometheus /metrics endpoint in main app.py with 501 fallback when prometheus-client not installed",
      "SQL fallback in consolidation/db.py — creates tables inline when .sql file is absent",
      "Test suite for remote backend — 9 unit tests covering URL construction and consolidation DB",
    ],
    changed: [
      "RemoteBackend URL patterns corrected — all 6 methods had colon-style paths, now match actual FastAPI routes",
      "RemoteBackend default timeout raised from 30s to 90s",
      "RemoteBackend filter merging — session_id, min_importance, after, before now merged into filters dict",
      "QueryRouter matching switched to stem-prefix — plurals/conjugations now work (e.g. 'habits' → 'habit')",
      "Groq retry config reduced from 5×60s to 3×20s with explicit 30s HTTP timeout",
      "pyproject.toml: added **/*.sql glob so SQL files are included in installed package",
    ],
    fixed: [
      "/api/consolidation/status returning HTTP 500 due to missing SQL file at install time",
      "RemoteBackend.recall() silently returning empty results when server URL used colon-style verb paths",
      "recall() returning 0 results for plural or conjugated queries against QueryRouter-routed endpoints",
      "Groq LLM calls hanging for up to 5 minutes during transient API errors",
      "npm ci failing during Docker frontend build due to missing package.json",
    ],
  },
  {
    version: "v0.5.1",
    type: "Prospective Memory",
    typeColor: "purple",
    date: "February 13, 2026",
    summary: "First-class Prospective Memory — a new cognitive capability for AI agents to remember to do things in the future.",
    added: [
      "PROSPECTIVE memory type added to MemoryType enum",
      "Two trigger modes: time-based (datetime/cron) and event-based (keywords, regex, embedding similarity)",
      "ProspectiveIntent model with full lifecycle: pending → triggered → completed → expired → cancelled",
      "ProspectiveMemoryManager with CRUD, context evaluation, NL parsing, recurrence, expiry, consolidation",
      "Recurrence support: none, daily, weekly, monthly, custom_cron (via croniter)",
      "Priority-based ordering (0–10) for triggered intents",
      "Recall pipeline integration: triggered intents surface automatically as RetrievalResult objects",
      "ON_PROSPECTIVE_TRIGGER event added to trigger system",
      "Background evaluation loop in BackgroundTaskManager",
      "2 new Celery tasks: evaluate_prospective_triggers, expire_prospective_intents",
      "9 new REST API endpoints under /v1/prospective/ (intents CRUD, parse, evaluate, consolidate, expire)",
      "4 new config fields: enable_prospective_memory, prospective_max_intents_per_user, prospective_eval_interval_seconds, half_life_prospective",
      "Library exports: ProspectiveIntent, ProspectiveMemoryManager, ProspectiveStatus, ProspectiveTriggerType, RecurrencePattern",
      "33 unit tests covering CRUD, trigger matching, recurrence, lifecycle, NL parsing",
    ],
    changed: [],
    fixed: [],
  },
  {
    version: "v0.5.0",
    type: "Major Release",
    typeColor: "green",
    date: "February 11, 2026",
    summary: "Intelligent Memory Features — knowledge graph, feedback loops, triggers, procedural memory, and embedding migration.",
    added: [
      "Memory Relevance Feedback Loop with 30-day half-life EMA scoring",
      "Memory Triggers — on_remember, on_recall, on_update, on_delete, on_conflict, on_expire events",
      "Graph-Aware Retrieval — 3-way RRF fusion (vector + BM25 + graph) via GraphRetriever",
      "Procedural Memory / Prompt Self-Optimization with LLM rule extraction",
      "Real-Time Incremental Knowledge Graph with JSON persistence",
      "Embedding Model Migration with Celery background processing",
      "GRAPH_HYBRID search mode added to SearchMode enum",
      "PROCEDURAL memory type added to MemoryType enum",
      "16 new config fields, 15 new REST API endpoints, 2 new Celery tasks",
    ],
    changed: [
      "Scoring weights include graph and feedback components with auto-normalization via get_weights()",
      "Decay half-lives include procedural type via get_half_lives()",
      "fuse_scores() extended with graph and feedback kwargs",
    ],
    fixed: [],
  },
  {
    version: "v0.4.0",
    type: "Major Release",
    typeColor: "green",
    date: "January 26, 2026",
    summary: "Memory Consolidation, Multi-Agent Collaboration, SaaS Platform, and React Dashboard.",
    added: [
      "Memory Compaction System with DuckDB persistence and sleep-phase architecture",
      "Bi-Temporal Facts with valid/transaction time and time-travel queries",
      "Multi-Agent Shared Memory Spaces with granular permission controls",
      "ClassifierService — consolidated agentic classifier with LLM support",
      "Context Assembly System with token budget management",
      "Custom Schema Support — define memory types without code changes",
      "Comprehensive Audit Logging with retention policies",
      "Usage Tracking and Analytics with per-user statistics",
      "LangChain and LlamaIndex integration adapters",
      "Plugin System with extensible processors, scorers, retrievers",
      "Predictive Analytics Pipeline for pattern forecasting",
      "Auto-Healing Pipeline for automatic memory repair",
      "Tiered Storage (hot/warm/cold) for cost optimization",
      "Offline Client with operation queueing and auto-sync",
      "Namespace Management with hierarchical organization",
      "Memory Portability — import/export in JSON, Parquet, CSV",
      "WebSocket support for real-time updates",
      "Complete React + TypeScript + Tailwind CSS Dashboard",
      "10 new API route modules including bitemporal, collaboration, compaction, dashboard",
    ],
    changed: [
      "Refactored classification into consolidated ClassifierService",
      "Enhanced memory filtering with race condition prevention",
    ],
    fixed: [
      "Race conditions in memory retrieval logic",
      "JSON extraction in classifier",
    ],
  },
  {
    version: "v0.3.0",
    type: "Stable Release",
    typeColor: "amber",
    date: "December 2025",
    summary: "Simplified API, documentation reorganization, and Docker deployment fixes.",
    added: [
      "Simplified client API matching mem0/zep ergonomics",
      "Comprehensive documentation reorganization",
    ],
    changed: [],
    fixed: [
      "Docker deployment issues",
      "Various stability improvements",
    ],
  },
]

const typeColors: Record<string, { badge: string; dot: string }> = {
  cyan:   { badge: "bg-cyan-100 text-cyan-700",     dot: "bg-cyan-500" },
  green:  { badge: "bg-green-100 text-green-700",   dot: "bg-green-500" },
  purple: { badge: "bg-purple-100 text-purple-700", dot: "bg-purple-500" },
  amber:  { badge: "bg-amber-100 text-amber-700",   dot: "bg-amber-500" },
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation />
      <main className="pt-24 pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">Changelog</h1>
            <p className="text-lg text-slate-600">
              All notable changes to HippocampAI, newest first.
              Full history on{" "}
              <a
                href="https://github.com/rexdivakar/HippocampAI/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:underline inline-flex items-center gap-1"
              >
                GitHub Releases <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-200" />

            <div className="space-y-12">
              {releases.map((release, i) => {
                const colors = typeColors[release.typeColor]
                return (
                  <div key={`${release.version}-${i}`} className="relative pl-10">
                    {/* Dot */}
                    <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${colors.dot} flex items-center justify-center shadow-sm`}>
                      <Tag className="w-3 h-3 text-white" />
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xl font-bold text-slate-900">{release.version}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors.badge}`}>
                          {release.type}
                        </span>
                        <span className="text-sm text-slate-400">{release.date}</span>
                      </div>

                      <p className="text-slate-600 mb-5 leading-relaxed">{release.summary}</p>

                      <div className="space-y-4">
                        {release.added.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkles className="w-4 h-4 text-cyan-500" />
                              <span className="text-sm font-semibold text-slate-700">Added</span>
                            </div>
                            <ul className="space-y-1.5 pl-6">
                              {release.added.map((item, j) => (
                                <li key={j} className="text-sm text-slate-600 list-disc">{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {release.changed.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-4 h-4 rounded border-2 border-amber-400" />
                              <span className="text-sm font-semibold text-slate-700">Changed</span>
                            </div>
                            <ul className="space-y-1.5 pl-6">
                              {release.changed.map((item, j) => (
                                <li key={j} className="text-sm text-slate-600 list-disc">{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {release.fixed.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-4 h-4 rounded-full bg-green-100 border-2 border-green-400" />
                              <span className="text-sm font-semibold text-slate-700">Fixed</span>
                            </div>
                            <ul className="space-y-1.5 pl-6">
                              {release.fixed.map((item, j) => (
                                <li key={j} className="text-sm text-slate-600 list-disc">{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/rexdivakar/HippocampAI/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 font-medium"
            >
              View full CHANGELOG.md on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
