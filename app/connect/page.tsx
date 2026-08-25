'use client';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function ConnectDatabase() {
  const { user } = useUser();
  const router = useRouter();
  const [formData, setFormData] = useState({
    host: '',
    port: '5432',
    database: '',
    username: '',
    password: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setStatus('Please sign in first');
      return;
    }
    
    setLoading(true);
    setStatus('Connecting...');
    
    try {
      const res = await fetch('https://pgbrain-backend-production.up.railway.app/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, user_id: user.id })
      });
      
      const data = await res.json();
      if (res.ok) {
        setStatus('✅ Database connected successfully!');
        setTimeout(() => router.push('/'), 2000);
      } else {
        setStatus('❌ ' + data.detail);
      }
    } catch (error) {
      setStatus('❌ Connection failed. Check your credentials.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h1 className="text-2xl font-bold mb-2 text-cyan-400">🔗 Connect Your Database</h1>
        <p className="text-gray-400 mb-6 text-sm">Enter your PostgreSQL connection details</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Host</label>
            <input
              type="text"
              placeholder="localhost"
              value={formData.host}
              onChange={(e) => setFormData({...formData, host: e.target.value})}
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-cyan-500 outline-none text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Port</label>
            <input
              type="number"
              placeholder="5432"
              value={formData.port}
              onChange={(e) => setFormData({...formData, port: e.target.value})}
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-cyan-500 outline-none text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Database Name</label>
            <input
              type="text"
              placeholder="postgres"
              value={formData.database}
              onChange={(e) => setFormData({...formData, database: e.target.value})}
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-cyan-500 outline-none text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Username</label>
            <input
              type="text"
              placeholder="postgres"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-cyan-500 outline-none text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full p-2 rounded bg-gray-900 border border-gray-700 focus:border-cyan-500 outline-none text-white"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 py-2 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? '⏳ Connecting...' : '🔗 Connect Database'}
          </button>
        </form>
        
        {status && (
          <div className={`mt-4 text-sm p-3 rounded ${status.includes('❌') ? 'bg-red-900/30 text-red-400' : 'bg-green-900/30 text-green-400'}`}>
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
