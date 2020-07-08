import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAsgPY-LVs0IqruMTUO9o-inZ_52RQ3TeI",
    authDomain: "react-slack-clone-46d86.firebaseapp.com",
    databaseURL: "https://react-slack-clone-46d86.firebaseio.com",
    projectId: "react-slack-clone-46d86",
    storageBucket: "react-slack-clone-46d86.appspot.com",
    messagingSenderId: "512573360418",
    appId: "1:512573360418:web:95a21c4aa9bc946de5bd7b",
    measurementId: "G-XBKSRLWFFJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

export default firebase;