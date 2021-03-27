import firebase from '@firebase/app';
import "@firebase/auth";
import "@firebase/database";
import "@firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAgQSn857F6QigU7sulSYhNrcWLOKYCT3c",
  authDomain: "react-slack-clone-34fac.firebaseapp.com",
  databaseURL: "https://react-slack-clone-34fac-default-rtdb.firebaseio.com",
  projectId: "react-slack-clone-34fac",
  storageBucket: "react-slack-clone-34fac.appspot.com",
  messagingSenderId: "815188800483",
  appId: "1:815188800483:web:d29958c4de8528e85d26d6",
  measurementId: "G-QNEQV4RSX2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;