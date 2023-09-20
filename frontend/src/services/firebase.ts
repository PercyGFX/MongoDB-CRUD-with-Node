import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRAKjNsMmt9pF3gxR6R1tv0fyZ3A07ltI",
  authDomain: "mongocrud-a2c5b.firebaseapp.com",
  projectId: "mongocrud-a2c5b",
  storageBucket: "mongocrud-a2c5b.appspot.com",
  messagingSenderId: "1022752504474",
  appId: "1:1022752504474:web:dfac6937ed6bd8accd7d23",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Get a reference to the storage service
const storage = firebase.storage();

export { storage, firebase };
