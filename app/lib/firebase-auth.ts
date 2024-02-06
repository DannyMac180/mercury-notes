import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '../lib/firebase';

const signUpWithEmail = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        // Handle Errors here.
        console.error('Error signing up with email and password', error);
        throw error;
    }
    }

const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    // Handle Errors here.
    console.error('Error signing in with email and password', error);
    throw error;
  }
};

const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
  } catch (error) {
    // Handle Errors here.
    console.error('Error signing in with Google', error);
    throw error;
  }
};

const signInWithGithub = async () => {
  try {
    const userCredential = await signInWithPopup(auth, githubProvider);
  } catch (error) {
    // Handle Errors here.
    console.error('Error signing in with GitHub', error);
    throw error;
  }
};

export { signUpWithEmail, signInWithEmail, signInWithGoogle, signInWithGithub };