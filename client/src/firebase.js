import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB3ZVPT2Yx9NGJAIEfHw-GoEqUM_EVRtHc",
    authDomain: "ecommerce-11093.firebaseapp.com",
    databaseURL: "https://ecommerce-11093.firebaseio.com",
    projectId: "ecommerce-11093",
    storageBucket: "ecommerce-11093.appspot.com",
    messagingSenderId: "115387534024",
    appId: "1:115387534024:web:0e4f58fc955ad20022f3fd",
    measurementId: "G-T7N61KQB1L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();