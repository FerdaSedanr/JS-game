const cardArray = [
  {
    name: "book",
    img: "book.jpg",
  },

  {
    name: "fly",
    img: "fly.jpg",
  },
  {
    name: "med",
    img: "med.jpg",
  },
  {
    name: "music",
    img: "music.jpg",
  },
  {
    name: "rocket",
    img: "rocket.jpg",
  },
  {
    name: "work",
    img: "work.jpg",
  },
  {
    name: "book",
    img: "book.jpg",
  },

  {
    name: "fly",
    img: "fly.jpg",
  },
  {
    name: "med",
    img: "med.jpg",
  },
  {
    name: "music",
    img: "music.jpg",
  },
  {
    name: "rocket",
    img: "rocket.jpg",
  },
  {
    name: "work",
    img: "work.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "question.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log("Check for match!!");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "question.jpg");
    cards[optionTwoId].setAttribute("src", "question.jpg");
    alert("You have clicked the same image!");
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!!");
    cards[optionOneId].setAttribute("src", "white.png");
    cards[optionTwoId].setAttribute("src", "white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "question.jpg");
    cards[optionTwoId].setAttribute("src", "question.jpg");
    alert("Sorry try again !!");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations! You found them all!!";
  }
}

function flipCard() {
  console.log(cardArray);
  const cardId = this.getAttribute("data-id");

  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  console.log("clicked", cardId);
  console.log(cardsChosen);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
