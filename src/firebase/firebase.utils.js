import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { useRef } from 'react';

 const config = {
  apiKey: "AIzaSyDkM3GcSlkgk69O_jQhDOU9FlNGY3fvPMQ",
  authDomain: "crwn-db-52e9e.firebaseapp.com",
  databaseURL: "https://crwn-db-52e9e.firebaseio.com",
  projectId: "crwn-db-52e9e",
  storageBucket: "crwn-db-52e9e.appspot.com",
  messagingSenderId: "470309808122",
  appId: "1:470309808122:web:e61713a249edd00795a643",
  measurementId: "G-F1RBCVXCT5"
};

export const createUserProfileDocoument = async (userAuth, additionaData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionaData
      });
    } catch(error){
      console.log('error creating user', error.message);
    } 
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;