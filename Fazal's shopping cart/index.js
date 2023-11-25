/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/
// Challenge: Import 'initializeApp' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// Challenge: Import 'getDatabase' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://mobileapp-f9f42-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")


addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)
    
    clearInputFieldEl()
})
/*
Challenge:
Call the onValue function with
shoppingListInDB as the first argument and
function(snapshot) {} as the second argument
*/


onValue(shoppingListInDB, function(snapshot) {
    if(snapshot.exists()){
        let itemsArray = Object.entries(snapshot.val())
    
    clearShoppingListEl()
    // Challenge: Use Object.values() to convert snapshot.val() from an Object to an Array. Create a variable for this.
     // Challenge: Write a for loop to iterate on itemsArray and console log each item
    
    for (let i = 0; i < itemsArray.length; i++) {
        let currentItem = itemsArray[i]
        // Challenge: Make two let variables:
        // currentItemID and currentItemValue and use currentItem to set both of
        // them equal to the correct values.
        let currentItemID = currentItem[0]
        let currentItemValue = currentItem[1]
        // Challenge: Use the appendItemToShoppingListEl(itemValue) function inside of the for loop to append item to the shopping list element for each iteration.
        //appendItemToShoppingListEl(itemsArray[i])
        
        appendItemToShoppingListEl(currentItem)
    }

  }else{
    shoppingListEl.innerHTML = "No items here... yet"
  }
    
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}


function appendItemToShoppingListEl(item) {
    //shoppingListEl.innerHTML += `<li>${itemValue}</li>`
    //alternative better way below
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue

    
    // Challenge: Attach an event listener to newEl and make it so you console log the id of the item when it's pressed.
    newEl.addEventListener("click",function() {
        
        // Challenge: Make a let variable called 'exactLocationOfItemInDB' and set it equal to ref(database, something) where you substitute something with the code that will give you the exact location of the item in question.
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)

        // Challenge: Use the remove function to remove the item from the database
        remove(exactLocationOfItemInDB)


        
    })
    
    shoppingListEl.append(newEl)
}


