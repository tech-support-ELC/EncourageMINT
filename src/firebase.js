import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDznxlzGgyRIAA45GMI14p3xD9KoKpWufU",
  authDomain: "elc-hackforpink.firebaseapp.com",
  databaseURL: "https://elc-hackforpink.firebaseio.com",
  projectId: "elc-hackforpink",
  storageBucket: "elc-hackforpink.appspot.com",
  messagingSenderId: "826868416278",
  appId: "1:826868416278:web:a23d9bed4426b62d8cda37",
  measurementId: "G-SZ2XWV9XTP",
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
