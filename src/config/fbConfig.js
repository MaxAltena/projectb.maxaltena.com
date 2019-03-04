import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyBKIxl8dSHEZ8w5LRLCUehHBegxFHtoqzM",
  authDomain: "projectb-maxaltena-com.firebaseapp.com",
  databaseURL: "https://projectb-maxaltena-com.firebaseio.com",
  projectId: "projectb-maxaltena-com",
  storageBucket: "projectb-maxaltena-com.appspot.com",
  messagingSenderId: "171959927747"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
