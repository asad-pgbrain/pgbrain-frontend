export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">About PgBrain</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">What is PgBrain?</h2>
          <p className="text-gray-300 leading-relaxed">
            PgBrain is a tool that turns your PostgreSQL database into an AI‑ready foundation 
            for RAG (Retrieval-Augmented Generation) pipelines. It helps developers build AI 
            applications directly on existing Postgres data — without moving data to separate 
            vector databases.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">Why PgBrain?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>✅ No data migration — use your existing Postgres</li>
            <li>✅ Built-in RAG pipeline with pgvector</li>
            <li>✅ Multi-provider LLM support (Groq, Gemini, OpenRouter)</li>
            <li>✅ Secure, encrypted database connections</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
