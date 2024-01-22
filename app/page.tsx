/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1CFcG0nk17n
 */
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-black border-opacity-30">
        <Link href="#">
          <div className="flex items-center gap-2">
            <img src="/mercury-logo.png" alt="Mercury Notes Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold">Mercury Notes</span>
          </div>
        </Link>
        <nav className="flex items-center gap-4">
          <Link className="text-sm font-medium hover:underline" href="#">
            Login
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Create Account
          </Link>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow bg-white">
        <section className="text-center space-y-4 p-6">
          <div className="flex justify-center">
            <img src="/mercury-logo.png" alt="Mercury Notes Logo" className="h-40 w-40" />
          </div>
          <h1 className="text-4xl font-bold text-center">Welcome to Mercury Notes</h1>
          <p className="text-gray-600">A place to store and organize your thoughts.</p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Get Started
          </Link>
        </section>
      </main>
    </div>
  )
}
