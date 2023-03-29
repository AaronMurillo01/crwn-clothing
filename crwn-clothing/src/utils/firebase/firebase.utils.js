import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnR43XILDzAMSY9SEQWd04o6D1tAU-1Io",
  authDomain: "aaron-crwn-clothing.firebaseapp.com",
  projectId: "aaron-crwn-clothing",
  storageBucket: "aaron-crwn-clothing.appspot.com",
  messagingSenderId: "604527017471",
  appId: "1:604527017471:web:a10d9c077d7d9f35e93bca",
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
