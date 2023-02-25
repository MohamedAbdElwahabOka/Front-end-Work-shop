let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEL = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardEL = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function newCard() {
  let thirdcard = getRandomCard();
  sum += thirdcard;
  cards.push(thirdcard);
  renderGame();
}

function renderGame() {
  cardEL.textContent = "cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardEL.textContent += cards[i] + " ";
  }

  sumEL.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card";
    hasBlackjack = true;
  } else if (sum === 21) {
    message = "you've got blackjack";
  } else {
    message = "you're out of the game";
    isAlive = false;
  }
  messageEL.textContent = message;
}
function getRandomCard() {
  let a = Math.floor(Math.random() * 13)+1;
  if (a===1) {
    return 11;
  }
  else if(a>=11){
    return 10;
  }
  else{
  return a;
}
}
