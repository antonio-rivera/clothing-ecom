import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA0Yt1-HetwdnOm1Hgkd6t9IAAtGUjuwG0",
  authDomain: "crwndemodb.firebaseapp.com",
  databaseURL: "https://crwndemodb.firebaseio.com",
  projectId: "crwndemodb",
  storageBucket: "crwndemodb.appspot.com",
  messagingSenderId: "312196150208",
  appId: "1:312196150208:web:a016ce2f2dc698cd980e25",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
