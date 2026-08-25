'use client';

import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

export default function Navbar() {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <header className="bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <h1 className="text-cyan-400 text-xl font-bold">🧠 PgBrain</h1>
        <nav className="hidden md:flex gap-4">
          <Link href="/about" className="text-gray-300 hover:text-white text-sm transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition">
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {isLoaded && !isSignedIn && (
          <SignInButton mode="modal">
            <button className="bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-700 transition">
              Sign In
            </button>
          </SignInButton>
        )}
        {isLoaded && isSignedIn && (
          <>
            <Link href="/connect" className="text-gray-300 hover:text-white px-3 py-2 text-sm transition">
              🔗 Connect DB
            </Link>
            <UserButton />
          </>
        )}
      </div>
    </header>
  )
}
