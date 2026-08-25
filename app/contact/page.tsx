'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('✅ Message sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-200">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">📧 Contact</h1>
      <p className="text-gray-400 mb-8">Have questions or feedback? Reach out to me directly.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-cyan-500 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
