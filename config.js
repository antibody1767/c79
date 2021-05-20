import firebase from "firebase"
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyBXk1FXxIcu4KF8BKH9cZrMcdpwCFIq4Wg",
    authDomain: "book-santa-84501.firebaseapp.com",
    projectId: "book-santa-84501",
    storageBucket: "book-santa-84501.appspot.com",
    messagingSenderId: "793682108616",
    appId: "1:793682108616:web:fd61192d21020b42ee85fd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()