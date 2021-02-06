import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDatpPiCfFTWmzNK8dyE_73_iOELNh3n10",
  authDomain: "admin-project-1ec1f.firebaseapp.com",
  projectId: "admin-project-1ec1f",
  storageBucket: "admin-project-1ec1f.appspot.com",
  messagingSenderId: "823141054583",
  appId: "1:823141054583:web:13355e81bc410f628d6e72",
  measurementId: "G-SNKSB25E96",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
