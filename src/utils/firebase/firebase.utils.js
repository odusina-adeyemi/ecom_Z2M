// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";

// import {
//     getFirestore,
//     doc,
//     getDoc,
//     setDoc
    
//   } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyBRgDiP0F43b7EthdNIPxx68g6DUXatJHA",
//   authDomain: "ecomz2m.firebaseapp.com",
//   projectId: "ecomz2m",
//   storageBucket: "ecomz2m.appspot.com",
//   messagingSenderId: "14062424625",
//   appId: "1:14062424625:web:138deb7ad36eed79a1bb10",
// };
   
// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({prompt:'select_account'});

// export const auth = getAuth();
// export const signInWithGooglePopup = () =>  signInWithPopup(auth, provider);

// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (userAuth) => {
//     const userDocRef = doc(db, 'users', userAuth.uid);
//     console.log(userDocRef)

//     const userSnapshot = await getDoc(userDocRef);
//     console.log(userSnapshot);
//     console.log(userSnapshot.exists())

// if (!userSnapshot.exists()) {
//   const {diplayName, email} = userAuth;
//   const createdAt = new Date();
//   try {
//     await setDoc(userDocRef, { email, createdAt})
//   } catch (error) {
//     console.log('error creating the user', error.message)
//   }

// }

// return userDocRef

// }


import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRgDiP0F43b7EthdNIPxx68g6DUXatJHA",
  authDomain: "ecomz2m.firebaseapp.com",
  projectId: "ecomz2m",
  storageBucket: "ecomz2m.appspot.com",
  messagingSenderId: "14062424625",
  appId: "1:14062424625:web:138deb7ad36eed79a1bb10",
};
   
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
      console.log('User document created successfully.');
    } catch (error) {
      console.log('Error creating the user document:', error.message);
    }
  }

  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return ;
  return await createUserWithEmailAndPassword(auth, email, password)
}

