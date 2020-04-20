import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;