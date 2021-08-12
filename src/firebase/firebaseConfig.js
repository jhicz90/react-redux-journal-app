import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDJR5wlKYHvrWRTthZB42yhd2QNc8AwT2o",
    authDomain: "smallchange-react.firebaseapp.com",
    projectId: "smallchange-react",
    storageBucket: "smallchange-react.appspot.com",
    messagingSenderId: "1087995837260",
    appId: "1:1087995837260:web:4e2d05a0e30decd0ba6de9"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}