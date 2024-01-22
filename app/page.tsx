/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1CFcG0nk17n
 */
import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        <Link href="#">
          <div className="flex items-center gap-2">
            <SpaceIcon className="h-6 w-6" />
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
          <h1 className="text-4xl font-bold">Welcome to Mercury Notes</h1>
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

function SpaceIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  )
}
