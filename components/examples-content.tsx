"use client"

import { useState } from "react"
import { MessageSquare, Bot, FileText, Users, Sparkles, Copy, Check, ExternalLink, Play, Code, Brain } from "lucide-react"
import Link from "next/link"

const examples = [
  {
    id: "chatbot",
    title: "Conversational Chatbot",
    description: "Build a chatbot that remembers user preferences and conversation history across sessions.",
    icon: MessageSquare,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    difficulty: "Beginner",
    time: "10 min",
  },
  {
    id: "ai-agent",
    title: "AI Agent with Memory",
    description: "Create an autonomous agent that learns from interactions and makes informed decisions.",
    icon: Bot,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    difficulty: "Intermediate",
    time: "20 min",
  },
  {
    id: "document-qa",
    title: "Document Q&A System",
    description: "Build a semantic search system over documents with context-aware retrieval.",
    icon: FileText,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    difficulty: "Intermediate",
    time: "15 min",
  },
  {
    id: "multi-user",
    title: "Multi-User Application",
    description: "Implement isolated memory spaces for different users in a SaaS application.",
    icon: Users,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    difficulty: "Advanced",
    time: "25 min",
  },
  {
    id: "personalization",
    title: "Personalization Engine",
    description: "Create a recommendation system that learns user preferences over time.",
    icon: Sparkles,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    difficulty: "Intermediate",
    time: "20 min",
  },
]

const exampleCode: Record<string, { title: string; description: string; code: string; output?: string }[]> = {
  chatbot: [
    {
      title: "Setup the Memory Engine",
      description: "Initialize HippocampAI with your configuration.",
      code: `from hippocamp import MemoryEngine
import os

# Initialize the memory engine
engine = MemoryEngine(
    api_key=os.getenv("OPENAI_API_KEY"),
    qdrant_host="localhost",
    qdrant_port=6333
)

print("Memory engine initialized!")`,
      output: "Memory engine initialized!",
    },
    {
      title: "Create a Chat Session",
      description: "Start a new conversation session for a user.",
      code: `# Create a session for the user
user_id = "user_123"
session_id = "chat_session_1"

session = engine.create_session(
    user_id=user_id,
    session_id=session_id
)

print(f"Session created: {session_id}")`,
      output: "Session created: chat_session_1",
    },
    {
      title: "Store Conversation Messages",
      description: "Save messages to build conversation history.",
      code: `# User sends a message
user_message = "Hi! I prefer dark mode and I'm interested in AI."

# Store the user message
session.add_message(
    role="user",
    content=user_message
)

# Store user preferences as a separate memory
engine.store(
    content="User prefers dark mode interface",
    user_id=user_id,
    metadata={"type": "preference", "category": "ui"},
    importance=0.8
)

engine.store(
    content="User is interested in AI and machine learning",
    user_id=user_id,
    metadata={"type": "interest", "category": "topics"},
    tags=["ai", "ml", "technology"]
)

print("Messages and preferences stored!")`,
      output: "Messages and preferences stored!",
    },
    {
      title: "Retrieve Context for Response",
      description: "Get relevant memories to personalize the response.",
      code: `# When generating a response, get relevant context
query = "What does the user like?"

# Search for relevant memories
memories = engine.search(
    query=query,
    user_id=user_id,
    limit=5
)

print("Relevant memories found:")
for memory in memories:
    print(f"  - {memory.content} (relevance: {memory.relevance:.2f})")

# Get conversation context
context = session.get_context(limit=10)
print(f"\\nConversation context: {len(context)} messages")`,
      output: `Relevant memories found:
  - User prefers dark mode interface (relevance: 0.92)
  - User is interested in AI and machine learning (relevance: 0.87)

Conversation context: 1 messages`,
    },
    {
      title: "Complete Chatbot Example",
      description: "Full working chatbot with memory integration.",
      code: `from hippocamp import MemoryEngine
from openai import OpenAI

class MemoryEnabledChatbot:
    def __init__(self, api_key: str):
        self.engine = MemoryEngine(api_key=api_key)
        self.openai = OpenAI(api_key=api_key)
        self.user_id = None
        self.session = None
    
    def start_session(self, user_id: str, session_id: str):
        self.user_id = user_id
        self.session = self.engine.create_session(user_id, session_id)
    
    def chat(self, user_message: str) -> str:
        # Store user message
        self.session.add_message(role="user", content=user_message)
        
        # Get relevant memories
        memories = self.engine.search(
            query=user_message,
            user_id=self.user_id,
            limit=5
        )
        
        # Build context
        memory_context = "\\n".join([m.content for m in memories])
        
        # Generate response with context
        response = self.openai.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": f"User context:\\n{memory_context}"},
                {"role": "user", "content": user_message}
            ]
        )
        
        assistant_message = response.choices[0].message.content
        
        # Store assistant response
        self.session.add_message(role="assistant", content=assistant_message)
        
        return assistant_message

# Usage
bot = MemoryEnabledChatbot(api_key="your_key")
bot.start_session("user_123", "chat_1")
response = bot.chat("What's the weather like?")
print(response)`,
    },
  ],
  "ai-agent": [
    {
      title: "Agent with Long-Term Memory",
      description: "Create an AI agent that remembers past tasks and learns from experience.",
      code: `from hippocamp import MemoryEngine
from datetime import datetime

class MemoryAgent:
    def __init__(self, api_key: str, agent_id: str):
        self.engine = MemoryEngine(api_key=api_key)
        self.agent_id = agent_id
    
    def remember_task(self, task: str, result: str, success: bool):
        """Store task execution results for future reference."""
        self.engine.store(
            content=f"Task: {task}\\nResult: {result}",
            user_id=self.agent_id,
            metadata={
                "type": "task_execution",
                "success": success,
                "timestamp": datetime.now().isoformat()
            },
            importance=0.9 if success else 0.7,
            tags=["task", "execution", "success" if success else "failure"]
        )
    
    def recall_similar_tasks(self, task: str, limit: int = 5):
        """Find similar past tasks for reference."""
        memories = self.engine.search(
            query=task,
            user_id=self.agent_id,
            limit=limit,
            tags=["task"]
        )
        return memories
    
    def execute_task(self, task: str):
        # Check for similar past tasks
        similar = self.recall_similar_tasks(task)
        
        if similar:
            print(f"Found {len(similar)} similar past tasks:")
            for m in similar:
                print(f"  - {m.content[:50]}...")
        
        # Execute task (your logic here)
        result = f"Completed: {task}"
        success = True
        
        # Remember this execution
        self.remember_task(task, result, success)
        
        return result

# Usage
agent = MemoryAgent(api_key="your_key", agent_id="agent_001")
agent.execute_task("Analyze sales data for Q4")
agent.execute_task("Generate monthly report")`,
    },
    {
      title: "Learning from Feedback",
      description: "Agent that improves based on user feedback.",
      code: `class LearningAgent(MemoryAgent):
    def receive_feedback(self, task: str, feedback: str, rating: float):
        """Store feedback to improve future performance."""
        self.engine.store(
            content=f"Feedback for '{task}': {feedback}",
            user_id=self.agent_id,
            metadata={
                "type": "feedback",
                "rating": rating,
                "task": task
            },
            importance=rating,  # Higher rated feedback is more important
            tags=["feedback", "learning"]
        )
    
    def get_improvement_suggestions(self, task_type: str):
        """Get suggestions based on past feedback."""
        feedback = self.engine.search(
            query=f"feedback for {task_type}",
            user_id=self.agent_id,
            tags=["feedback"],
            limit=10
        )
        return feedback

# Usage
agent = LearningAgent(api_key="your_key", agent_id="agent_001")
agent.receive_feedback(
    task="Write email",
    feedback="Too formal, use casual tone",
    rating=0.6
)`,
    },
  ],
  "document-qa": [
    {
      title: "Index Documents",
      description: "Store documents in the memory engine for semantic search.",
      code: `from hippocamp import MemoryEngine

engine = MemoryEngine(api_key="your_key")

# Sample documents
documents = [
    {
        "title": "Company Policy",
        "content": "Employees are entitled to 20 days of paid leave per year...",
        "category": "hr"
    },
    {
        "title": "Product Guide",
        "content": "Our flagship product supports integration with...",
        "category": "product"
    },
    {
        "title": "Technical Specs",
        "content": "The API supports REST and GraphQL endpoints...",
        "category": "technical"
    }
]

# Index documents
for doc in documents:
    engine.store(
        content=doc["content"],
        user_id="knowledge_base",
        metadata={
            "title": doc["title"],
            "category": doc["category"],
            "type": "document"
        },
        tags=[doc["category"], "document"]
    )

print(f"Indexed {len(documents)} documents")`,
      output: "Indexed 3 documents",
    },
    {
      title: "Semantic Search",
      description: "Search documents using natural language queries.",
      code: `def search_documents(query: str, category: str = None):
    """Search the knowledge base."""
    tags = ["document"]
    if category:
        tags.append(category)
    
    results = engine.search(
        query=query,
        user_id="knowledge_base",
        limit=5,
        tags=tags if category else None
    )
    
    return results

# Search examples
results = search_documents("How many vacation days do I get?")
print("Search results:")
for r in results:
    print(f"  [{r.metadata.get('title')}] {r.content[:100]}...")
    print(f"  Relevance: {r.relevance:.2f}\\n")`,
      output: `Search results:
  [Company Policy] Employees are entitled to 20 days of paid leave per year...
  Relevance: 0.94`,
    },
    {
      title: "Q&A with Context",
      description: "Answer questions using retrieved documents as context.",
      code: `from openai import OpenAI

def answer_question(question: str) -> str:
    # Retrieve relevant documents
    docs = search_documents(question)
    
    # Build context from retrieved documents
    context = "\\n\\n".join([
        f"[{d.metadata.get('title')}]\\n{d.content}"
        for d in docs[:3]
    ])
    
    # Generate answer using LLM
    client = OpenAI()
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": f"Answer based on this context:\\n{context}"
            },
            {"role": "user", "content": question}
        ]
    )
    
    return response.choices[0].message.content

# Usage
answer = answer_question("What's the vacation policy?")
print(answer)`,
    },
  ],
  "multi-user": [
    {
      title: "User Isolation",
      description: "Each user has their own isolated memory space.",
      code: `from hippocamp import MemoryEngine

engine = MemoryEngine(api_key="your_key")

# Store memories for different users
users = ["alice", "bob", "charlie"]

for user in users:
    engine.store(
        content=f"Personal preference for {user}",
        user_id=user,
        metadata={"type": "preference"}
    )

# Each user only sees their own memories
for user in users:
    memories = engine.search(
        query="preference",
        user_id=user,
        limit=10
    )
    print(f"{user}: {len(memories)} memories found")`,
      output: `alice: 1 memories found
bob: 1 memories found
charlie: 1 memories found`,
    },
    {
      title: "Multi-Tenant SaaS",
      description: "Implement tenant isolation for a SaaS application.",
      code: `class TenantMemoryManager:
    def __init__(self, api_key: str):
        self.engine = MemoryEngine(api_key=api_key)
    
    def _get_user_key(self, tenant_id: str, user_id: str) -> str:
        """Create a unique key combining tenant and user."""
        return f"{tenant_id}:{user_id}"
    
    def store_memory(self, tenant_id: str, user_id: str, content: str, **kwargs):
        """Store memory with tenant isolation."""
        user_key = self._get_user_key(tenant_id, user_id)
        return self.engine.store(
            content=content,
            user_id=user_key,
            metadata={**kwargs.get("metadata", {}), "tenant_id": tenant_id},
            **{k: v for k, v in kwargs.items() if k != "metadata"}
        )
    
    def search_memories(self, tenant_id: str, user_id: str, query: str, **kwargs):
        """Search memories within tenant scope."""
        user_key = self._get_user_key(tenant_id, user_id)
        return self.engine.search(
            query=query,
            user_id=user_key,
            **kwargs
        )
    
    def get_tenant_stats(self, tenant_id: str):
        """Get memory statistics for a tenant."""
        # Implementation depends on your needs
        pass

# Usage
manager = TenantMemoryManager(api_key="your_key")

# Tenant A, User 1
manager.store_memory("tenant_a", "user_1", "User preference data")

# Tenant B, User 1 (different namespace)
manager.store_memory("tenant_b", "user_1", "Different user data")`,
    },
  ],
  personalization: [
    {
      title: "Track User Behavior",
      description: "Store user interactions for personalization.",
      code: `from hippocamp import MemoryEngine
from datetime import datetime

engine = MemoryEngine(api_key="your_key")

def track_interaction(user_id: str, item_id: str, action: str, metadata: dict = None):
    """Track user interactions with items."""
    engine.store(
        content=f"User {action} item {item_id}",
        user_id=user_id,
        metadata={
            "type": "interaction",
            "action": action,
            "item_id": item_id,
            "timestamp": datetime.now().isoformat(),
            **(metadata or {})
        },
        tags=[action, "interaction"],
        importance=0.8 if action == "purchase" else 0.5
    )

# Track various interactions
track_interaction("user_123", "product_456", "view", {"category": "electronics"})
track_interaction("user_123", "product_456", "add_to_cart")
track_interaction("user_123", "product_456", "purchase", {"price": 99.99})`,
    },
    {
      title: "Generate Recommendations",
      description: "Use memory to create personalized recommendations.",
      code: `def get_recommendations(user_id: str, category: str = None, limit: int = 5):
    """Get personalized recommendations based on user history."""
    
    # Find user's interests
    interests = engine.search(
        query="user interests and preferences",
        user_id=user_id,
        limit=10
    )
    
    # Find past positive interactions
    positive_interactions = engine.search(
        query="purchase favorite like",
        user_id=user_id,
        tags=["purchase", "favorite"],
        limit=20
    )
    
    # Build preference profile
    categories = {}
    for memory in positive_interactions:
        cat = memory.metadata.get("category")
        if cat:
            categories[cat] = categories.get(cat, 0) + 1
    
    # Return top categories as recommendations
    sorted_cats = sorted(categories.items(), key=lambda x: x[1], reverse=True)
    return sorted_cats[:limit]

# Usage
recommendations = get_recommendations("user_123")
print("Recommended categories:", recommendations)`,
    },
    {
      title: "Preference Learning",
      description: "Learn and update user preferences over time.",
      code: `class PreferenceLearner:
    def __init__(self, api_key: str):
        self.engine = MemoryEngine(api_key=api_key)
    
    def learn_preference(self, user_id: str, preference: str, strength: float = 0.5):
        """Store or update a user preference."""
        # Check if similar preference exists
        existing = self.engine.search(
            query=preference,
            user_id=user_id,
            limit=1,
            min_relevance=0.9
        )
        
        if existing:
            # Update importance of existing preference
            # (In practice, you'd update the existing memory)
            print(f"Reinforcing existing preference: {preference}")
        else:
            # Store new preference
            self.engine.store(
                content=preference,
                user_id=user_id,
                metadata={"type": "learned_preference"},
                importance=strength,
                tags=["preference", "learned"]
            )
            print(f"Learned new preference: {preference}")
    
    def get_preferences(self, user_id: str, limit: int = 10):
        """Get user's learned preferences."""
        return self.engine.search(
            query="user preferences",
            user_id=user_id,
            tags=["preference"],
            limit=limit
        )

# Usage
learner = PreferenceLearner(api_key="your_key")
learner.learn_preference("user_123", "Prefers minimalist design", 0.8)
learner.learn_preference("user_123", "Interested in technology news", 0.7)`,
    },
  ],
}

export function ExamplesContent() {
  const [activeExample, setActiveExample] = useState("chatbot")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const CodeBlock = ({ code, id, output }: { code: string; id: string; output?: string }) => (
    <div className="space-y-2">
      <div className="relative group">
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-400">python</span>
            <button
              onClick={() => copyCode(code, id)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              {copiedCode === id ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
          <pre className="p-4 overflow-x-auto max-h-[400px]">
            <code className="text-sm text-gray-300 font-mono whitespace-pre">{code}</code>
          </pre>
        </div>
      </div>
      {output && (
        <div className="bg-gray-100 rounded-xl p-4">
          <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
            <Play className="h-3 w-3" /> Output
          </div>
          <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  )

  const activeExampleData = examples.find(e => e.id === activeExample)
  const activeExampleCode = exampleCode[activeExample] || []

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Examples</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how to use HippocampAI with practical, real-world examples
          </p>
        </div>

        {/* Example Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {examples.map((example) => (
            <button
              key={example.id}
              onClick={() => setActiveExample(example.id)}
              className={`text-left p-5 rounded-2xl border transition-all ${
                activeExample === example.id
                  ? "border-cyan-500 bg-cyan-50 shadow-lg"
                  : "border-gray-200 bg-white hover:border-cyan-300 hover:shadow"
              }`}
            >
              <div className={`inline-flex p-2.5 rounded-xl ${example.iconBg} mb-3`}>
                <example.icon className={`h-5 w-5 ${example.iconColor}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{example.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{example.description}</p>
              <div className="flex items-center gap-3 text-xs">
                <span className={`px-2 py-1 rounded-full ${
                  example.difficulty === "Beginner" ? "bg-emerald-100 text-emerald-700" :
                  example.difficulty === "Intermediate" ? "bg-amber-100 text-amber-700" :
                  "bg-rose-100 text-rose-700"
                }`}>
                  {example.difficulty}
                </span>
                <span className="text-gray-500">{example.time}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Example Content */}
        {activeExampleData && (
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 ${activeExampleData.iconBg} rounded-xl`}>
                <activeExampleData.icon className={`h-6 w-6 ${activeExampleData.iconColor}`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{activeExampleData.title}</h2>
                <p className="text-gray-500">{activeExampleData.description}</p>
              </div>
            </div>

            <div className="space-y-8">
              {activeExampleCode.map((step, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                  <CodeBlock code={step.code} id={`${activeExample}-${index}`} output={step.output} />
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <a
                href={`https://github.com/rexdivakar/HippocampAI/tree/main/examples`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
              >
                <Code className="h-4 w-4" />
                View more examples on GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/docs"
                className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors font-medium"
              >
                Read Documentation
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
