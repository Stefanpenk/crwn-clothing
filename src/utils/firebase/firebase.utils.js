import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDg-bdl-A4-1vC0ty8dV8PdSS8X6JuU-g8",
  authDomain: "crwn-clothing-db-6e9b5.firebaseapp.com",
  projectId: "crwn-clothing-db-6e9b5",
  storageBucket: "crwn-clothing-db-6e9b5.appspot.com",
  messagingSenderId: "273473963090",
  appId: "1:273473963090:web:03bb6c6d178f5c2705cb8b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnaphot = await getDoc(userDocRef);

  if (!userSnaphot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
