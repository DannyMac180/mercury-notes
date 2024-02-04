import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from './firebase';
import { redirect } from 'next/navigation';

const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    redirect('/notes')
  } catch (error) {
    // Handle Errors here.
    console.error('Error signing in with email and password', error);
    throw error;
  }
};

const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    
    redirect('/notes')
  } catch (error) {
    // Handle Errors here.
    console.error('Error signing in with Google', error);
    throw error;
  }
};

const signInWithGithub = async () => {
  try {
    const userCredential = await signInWithPopup(auth, githubProvider);
    
    redirect('/notes')
  } catch (error) {
    // Handle Errors here.
    console.error('Error signing in with GitHub', error);
    throw error;
  }
};

export { signInWithEmail, signInWithGoogle, signInWithGithub };
