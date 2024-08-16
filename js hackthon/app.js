import {db,collection,getDocs } from "../firebase.js"
let main = document.getElementById('main')

const showdata = async()=>{
    main.innerHTML += ""
    const querySnapshot = await getDocs(collection(db, "assgin"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        const {blogtitle,catagary,discription }= doc.data();
        main.innerHTML += ` <div class="card col-4 mx-4 mt-2 pt-2" style="width: 18rem;">
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