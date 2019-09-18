import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDSHryWpJ6ljpkW7i6PCcWutetYDv1mkJA",
  authDomain: "dbstore-97100.firebaseapp.com",
  databaseURL: "https://dbstore-97100.firebaseio.com",
  projectId: "dbstore-97100",
  storageBucket: "",
  messagingSenderId: "428094728280",
  appId: "1:428094728280:web:cc7b75d1b60e8d154e022d"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
