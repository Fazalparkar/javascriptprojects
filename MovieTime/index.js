
//importing modules 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

// ref and push used in database
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


// Adding databaseUrl basically linking the firebase
const appSettings = {
    databaseURL : "https://playground-c67b1-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database,"movies")



const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")



// here when we click the movie is added to database
addButtonEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    push(moviesInDB, inputValue)
    
    console.log(`${inputValue} added to database`)



})
