import { auth, googleAuthProvider, facebookAuthProvider, githubAuthProvider, twitterAuthProvider } from '../lib/firebase';

export const signInWithGoogle = async () => {
  try {
    const result = await auth.signInWithPopup(googleAuthProvider);
    return result;
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

export const signInWithFacebook = async () => {
  try {
    const result = await auth.signInWithPopup(facebookAuthProvider);
    return result;
  } catch (error) {
    console.error("Error signing in with Facebook", error);
  }
};

export const signInWithGithub = async () => {
  try {
    const result = await auth.signInWithPopup(githubAuthProvider);
    return result;
    } catch (error) {
    console.error("Error signing in with GitHub", error);
    }
};
