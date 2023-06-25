const min = 2;
const max = 11;

let playerEl = document.getElementById("player-el")
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');
let message = "";
let cards = [];
let sum = 0;
let isAlive = false;
let isBlackJack = false;

let player  = {
    name: "Phat",
    chips: 1000
}

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1];
    messageGame();
}

function messageGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        isBlackJack = true;
        resetGame()
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log(isAlive);
    if (isAlive === true && isBlackJack === false) {
        let newCard = getRandomCard();
        cards.push(newCard);
        sum += cards[cards.length - 1];
        messageGame();
    }
}

function getRandomCard() {
    let randCard = Math.floor(Math.random() * (max + min)) + min;
    if (randCard > 10) {
        return 10;
    } else if (randCard === 1) {
        return 11;
    } else {
        return randCard;
    }
}