import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyCDMw1kWYQgj8XuIlKk13l2esan7gQX_i4",
    authDomain: "todo-app-bed1b.firebaseapp.com",
    projectId: "todo-app-bed1b",
    storageBucket: "todo-app-bed1b.appspot.com",
    messagingSenderId: "732825700489",
    appId: "1:732825700489:web:251aa45d970b58ef35de58"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };