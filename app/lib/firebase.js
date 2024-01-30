import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, EmailAuthProvider, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAS0YHOJw3qIS1zWn3TTEkYM2g-6J3ktUk",
    authDomain: "mercury-notes.firebaseapp.com",
    projectId: "mercury-notes",
    storageBucket: "mercury-notes.appspot.com",
    messagingSenderId: "549605504409",
    appId: "1:549605504409:web:b95b80327ff01759708f08",
    measurementId: "G-9SRW9WFN5T"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Auth and provider exports
const auth = getAuth(app);
const providers = {
  google: new GoogleAuthProvider(),
  facebook: new FacebookAuthProvider(),
  github: new GithubAuthProvider(),
};

export { auth, providers };