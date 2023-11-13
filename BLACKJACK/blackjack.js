let player = {
    name: "Fazal Parkar",
    chips: 145
}
let cards = [] ;
let hasBlackjack = false;
let isAlive  = true;
let message = "";


let messageEL = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
// alternate way of grabbing message
// below one is more dynamic
//let sumEl = document.querySelector("body")
// the above one gives the sum message only that is the body
// below one is more dynamic
//let sumEl = document.querySelector("#sum-el")
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")
// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1 // 1-13
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}


//Now Creating a new function called startGame() that calls renderGame() function
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    
    renderGame()

}

function renderGame() {
    cardsEl.textContent = "Cards: "
    //render out firstcard and secondcard
    //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    // render out all cards we have in a dynamic way given by arrays above
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
        
        
    }
    sumEl.textContent = "Sum: "+ sum;
if(sum<=20){
    
    message = "Do you want to draw a new card?";

}
else if(sum===21){
    message = "You have got a Blackjack";
    hasBlackjack = true;
}
else {
    message ="You are out of the game";
    isAlive = false;
}
messageEL.textContent = message

}

function newCard(){
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()   
    }
    

    

}
