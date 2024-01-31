import { initializeApp } from 'firebase/app';
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Auth providers
const emailProvider = new EmailAuthProvider();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, emailProvider, googleProvider, facebookProvider, githubProvider };
