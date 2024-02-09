'use client';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xtT4e1xIKDe
 */
import { signUpWithEmail, signInWithGoogle, signInWithGithub } from '../lib/firebase-auth';
import { Button } from "./button";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
  
const SignUp = () => {
    // State to store the email and password value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    // Event handler to update the state with the input value
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    }

    const createUserWithEmail = async (email: string, password: string) => {
      try {
        await signUpWithEmail(email, password);
        router.push('/notes');
      } catch (error) {
        console.error('Error creating user with email and password', error);
      }
    }

    const signInWithGoogle = async () => {
      try {
        await signInWithGoogle();
        router.push('/notes');
      } catch (error) {
        console.error('Error signing in with Google', error);
      }
    }

    const signInWithGithub = async () => {
      try {
        await signInWithGithub();
        router.push('/notes');
      } catch (error) {
        console.error('Error signing in with GitHub', error);
      }
    }
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up for Your Account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Choose Your Account Credentials Below</p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <Button
            className="w-full p-2 mt-2 flex justify-center items-center border-2 border-black"
            variant="default"
            onClick={() => createUserWithEmail(email, password)}>
            <strong>Sign Up with Email</strong>
          </Button>
          <hr className="my-4 border-t border-gray-300" />
          <Button className="w-full p-2 mt-2 flex justify-center items-center" variant="outline" onClick={signInWithGoogle}>
            <img src="/google.svg" alt="Google" className="h-6 w-6 mr-2" />
            Sign Up with Google
          </Button>
          <Button className="w-full p-2 mt-2 flex justify-center items-center" variant="outline" onClick={signInWithGithub}>
            <img src="/github.svg" alt="GitHub" className="h-6 w-6 mr-2" />
            Sign Up with GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
