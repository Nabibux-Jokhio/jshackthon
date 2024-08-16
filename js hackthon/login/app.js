import {auth,signInWithEmailAndPassword,onAuthStateChanged} from "../firebase.js"

let email = document.getElementById('email')
let password = document.getElementById('password')
let loginBtn = document.getElementById('loginBtn')
let linkSigin= document.getElementById('signuplink')



const login = () =>{
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
} 

const goToSignUp =()=>{
    window,location.href = "../SignUp/index.html"
}

loginBtn.addEventListener("click", login)
linkSigin.addEventListener("click", goToSignUp)




onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "../dashboard/index.html"
    }
  });



