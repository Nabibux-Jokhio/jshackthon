import {auth,signOut,getDocs  ,onAuthStateChanged, db,collection,addDoc } from "../firebase.js"
let blogName = document.getElementById('blogName')
let catagary = document.getElementById('catagary')
let discription = document.getElementById('discription')
let submit = document.getElementById('submit')
let main = document.getElementById('main')

let logoutbtn = document.getElementById('logoutBtn')

const addData = async()=>{
       main.innerHTML += ""
    try {
        const docRef = await addDoc(collection(db, "assgin"), {
            blogtitle:blogName.value,
         catagary:catagary.value,
         discription:discription.value
        });
        showdata()
      } catch (e) {
       console.log(e);
       
      }
      
}

submit.addEventListener("click", addData)

const logout = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}

logoutbtn.addEventListener("click", logout)

onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "../login/index.html"
    }
  });


  const showdata = async()=>{
 
    const querySnapshot = await getDocs(collection(db, "assgin"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        const {blogtitle,catagary,discription }= doc.data();
        main.innerHTML += ` <div class="card col-4 mx-4 mt-2 pt-2 style="width: 18rem;">
                        <img src="../assets/images/car.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="catgory">${catagary}</p>
                            <h5 class="card-title">${blogtitle}</h5>
                          <p class="card-text">${discription}</p>
                        </div>    
                      </div>`
      });


  }

  showdata()