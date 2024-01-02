/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xtT4e1xIKDe
 */
import { Button } from "@/components/ui/button"

export default function Auth() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Get started with your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Please choose an option below</p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Button className="w-full p-2" variant="outline">
                Log In
              </Button>
            </div>
            <div>
              <Button className="w-full p-2" variant="black">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

