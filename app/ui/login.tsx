'use client';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xtT4e1xIKDe
 */
import { signIn } from 'next-auth/react';
import { Button } from "./button";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Enter your credentials below</p>
        </div>
        <div>
          <Button className="w-full p-2 flex justify-center items-center" variant="outline" onClick={() => signIn('email')}>
            <img src="/email-icon.png" alt="Email" className="h-6 w-6 mr-2" />
            Log In with Email
          </Button>
          <Button className="w-full p-2 mt-2 flex justify-center items-center" variant="outline" onClick={() => signIn('google')}>
            <img src="/google.svg" alt="Google" className="h-6 w-6 mr-2" />
            Log In with Google
          </Button>
          <Button className="w-full p-2 mt-2 flex justify-center items-center" variant="outline" onClick={() => signIn('facebook')}>
            <img src="/facebook.svg" alt="Facebook" className="h-6 w-6 mr-2" />
            Log In with Facebook
          </Button>
          <Button className="w-full p-2 mt-2 flex justify-center items-center" variant="outline" onClick={() => signIn('github')}>
            <img src="/github.svg" alt="GitHub" className="h-6 w-6 mr-2" />
            Log In with GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}
