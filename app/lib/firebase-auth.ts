import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from './firebase';

const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // User signed in
    return userCredential.user;
  } catch (error) {
    // Handle Errors here.
    console.error('Error signing in with email and password', error);
    throw error;
  }
};

const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    // User signed in
    return userCredential.user;
  } catch (error) {
    // Handle Errors here.
    console.error('Error signing in with Google', error);
    throw error;
  }
};

const signInWithGithub = async () => {
  try {
    const userCredential = await signInWithPopup(auth, githubProvider);
    // User signed in
    return userCredential.user;
  } catch (error) {
    // Handle Errors here.
    console.error('Error signing in with GitHub', error);
    throw error;
  }
};

export { signInWithEmail, signInWithGoogle, signInWithGithub };
