
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth,signOut ,signInWithEmailAndPassword, createUserWithEmailAndPassword ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import {getFirestore ,addDoc , collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
  

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCL7EnWEqAW8hdDr8AjmSlvBgBSO4mI8IE",
    authDomain: "hackthonjs.firebaseapp.com",
    projectId: "hackthonjs",
    storageBucket: "hackthonjs.appspot.com",
    messagingSenderId: "491463552748",
    appId: "1:491463552748:web:858877d68cd22088d7bfc9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getFirestore(app)
  export {db,addDoc,collection ,getDocs  ,auth,signInWithEmailAndPassword ,createUserWithEmailAndPassword, onAuthStateChanged,signOut}
