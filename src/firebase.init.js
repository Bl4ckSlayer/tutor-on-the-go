// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG7Go_xo9BzSXsBuVYL5PCEMUIXYbYupY",
  authDomain: "tutor-one-the-go.firebaseapp.com",
  projectId: "tutor-one-the-go",
  storageBucket: "tutor-one-the-go.appspot.com",
  messagingSenderId: "872199048566",
  appId: "1:872199048566:web:71c9de00652c8e69aa7e57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
