import {auth,createUserWithEmailAndPassword,onAuthStateChanged} from "../firebase.js"

let email = document.getElementById('email')
let password = document.getElementById('password')
let signUpBtn = document.getElementById('signUpBtn')

console.log(auth);


console.log(auth);

    const signUp =()=>{
        console.log();
        
        createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user);
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
        
    }

signUpBtn.addEventListener("click", signUp)

onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "../dashboard/index.html"
    }
  });

