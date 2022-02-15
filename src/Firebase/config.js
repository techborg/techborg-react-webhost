import firebase from "firebase";
 import 'firebase/auth'
 import 'firebase/firebase-firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_91ip2ivNc9iGkDtJkACQcBJFXN5Rreg",
  authDomain: "techborg-19e66.firebaseapp.com",
  databaseURL: "https://techborg-19e66-default-rtdb.firebaseio.com",
  projectId: "techborg-19e66",
  storageBucket: "techborg-19e66.appspot.com",
  messagingSenderId: "439278664705",
  appId: "1:439278664705:web:36c437b6c7a0dd65351400",
  measurementId: "G-XPBJRCSQB9"
};
  export default firebase.initializeApp(firebaseConfig)
