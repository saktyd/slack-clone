import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCr6C-u88i1iH4vn6GLVqlBD0nHCJlBkGo",
  authDomain: "slack-clone-7dc8f.firebaseapp.com",
  databaseURL: "https://slack-clone-7dc8f.firebaseio.com",
  projectId: "slack-clone-7dc8f",
  storageBucket: "slack-clone-7dc8f.appspot.com",
  messagingSenderId: "86100627807",
  appId: "1:86100627807:web:e992f9f324e4929f49e6ea",
  measurementId: "G-MR36KH0R7M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }