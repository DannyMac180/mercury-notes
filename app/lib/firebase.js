import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAS0YHOJw3qIS1zWn3TTEkYM2g-6J3ktUk",
    authDomain: "mercury-notes.firebaseapp.com",
    projectId: "mercury-notes",
    storageBucket: "mercury-notes.appspot.com",
    messagingSenderId: "549605504409",
    appId: "1:549605504409:web:b95b80327ff01759708f08",
    measurementId: "G-9SRW9WFN5T"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const emailAuthProvider = new firebase.auth.EmailAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export { auth, emailAuthProvider, googleAuthProvider, facebookAuthProvider, githubAuthProvider, twitterAuthProvider }