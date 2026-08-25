import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'PgBrain — AI-Ready Postgres Platform',
  description: 'PgBrain turns your PostgreSQL database into an AI-ready foundation for RAG pipelines. Build AI applications directly on your Postgres data.',
  keywords: 'PostgreSQL, RAG, AI, pgvector, data engineering, LLM, Groq, Gemini',
  openGraph: {
    title: 'PgBrain — AI-Ready Postgres Platform',
    description: 'Build RAG pipelines directly on your Postgres data.',
    url: 'https://pgbrain-frontend.vercel.app',
    siteName: 'PgBrain',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PgBrain — AI-Ready Postgres Platform',
    description: 'Build RAG pipelines directly on your Postgres data.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Navbar />
          <main>{children}</main>
        </ClerkProvider>
      </body>
    </html>
  )
}
