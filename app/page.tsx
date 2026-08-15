'use client';
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);

  const askPgBrain = async () => {
    if (!query) return;
    setLoading(true);
    setAnswer('');
    setSources([]);
    try {
      const res = await fetch('https://pgbrain-backend-production.up.railway.app/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setAnswer(data.answer || 'No answer received');
      setSources(data.sources || []);
    } catch (error) {
      setAnswer('❌ Backend not running. Start uvicorn on port 8000');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-cyan-400">🧠 PgBrain</h1>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Ask your database..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && askPgBrain()}
            className="flex-1 p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
          />
          <button
            onClick={askPgBrain}
            disabled={loading}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-xl font-semibold transition disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Ask'}
          </button>
        </div>
        {answer && (
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <p className="text-gray-200 whitespace-pre-wrap">{answer}</p>
            {sources.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">📄 Sources:</p>
                <ul className="text-sm text-cyan-400">
                  {sources.map((src, i) => <li key={i}>{src}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
