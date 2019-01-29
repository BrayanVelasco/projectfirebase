import firebase from 'firebase'



  // Initialize Firebase
const config = {
    apiKey: "AIzaSyAvBfXPGloF9dh19G9aTgL3IrsCYxGB6tk",
    authDomain: "project-firebase-18fa4.firebaseapp.com",
    databaseURL: "https://project-firebase-18fa4.firebaseio.com",
    projectId: "project-firebase-18fa4",
    storageBucket: "project-firebase-18fa4.appspot.com",
    messagingSenderId: "505602390073"
};

firebase.initializeApp(config)

export const ref = firebase.database().ref() //para almacenar usuarios

export const firebaseAuth = firebase.auth
