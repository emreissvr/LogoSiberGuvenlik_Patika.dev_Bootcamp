import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiT2vYWj7sqLj2_pxBQuabbawywcMc6kA",
  authDomain: "mywebapp-1f037.firebaseapp.com",
  projectId: "mywebapp-1f037",
  storageBucket: "mywebapp-1f037.appspot.com",
  messagingSenderId: "395287847256",
  appId: "1:395287847256:web:6be816185ca0919f8a852d",
  
};
  
  let app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }
  
  const fireStore = firebase.firestore();
  const auth = firebase.auth();
  const background = firebase.functions();
  
  export { fireStore, auth };








