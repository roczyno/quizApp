import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDoc, setDoc, getFireStore, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzt6ZkUyBA6iF_GqCdP4BGII_JsCwG0P8",
  authDomain: "quiz-app-2e4d0.firebaseapp.com",
  projectId: "quiz-app-2e4d0",
  storageBucket: "quiz-app-2e4d0.appspot.com",
  messagingSenderId: "234713019699",
  appId: "1:234713019699:web:a8d55b92daf212298bfa46",
};

export const auth = getAuth();

export const db = getFireStore();

export const userDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
  }
};

const firebaseApp = initializeApp(firebaseConfig);
