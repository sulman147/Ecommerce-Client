import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx-PhT_G69OVTQft-pZYWN-Uw2wylqLUY",
  authDomain: "ecommerce-37ee9.firebaseapp.com",
  projectId: "ecommerce-37ee9",
  storageBucket: "ecommerce-37ee9.appspot.com",
  messagingSenderId: "602185322661",
  appId: "1:602185322661:web:de2fcd2d3b117dfe2efd4c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
