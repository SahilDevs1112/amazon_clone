import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlYqHyU9vML7uvgpR7IoUwNSTa0ZGE9ys",
    authDomain: "clone-bfe6c.firebaseapp.com",
    projectId: "clone-bfe6c",
    storageBucket: "clone-bfe6c.appspot.com",
    messagingSenderId: "905486923356",
    appId: "1:905486923356:web:6c1b4cacaf62f4c7865899",
    measurementId: "G-1M8Q6CV30R"
});

const auth = firebase.auth();

export {auth};