import { ClerkProvider, SignInButton, UserButton } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center">
            <h1 className="text-cyan-400 text-xl font-bold">🧠 PgBrain</h1>
            <div>
              <SignInButton mode="modal">
                <button className="bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-700 transition">
                  Sign In
                </button>
              </SignInButton>
              <UserButton />
            </div>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
