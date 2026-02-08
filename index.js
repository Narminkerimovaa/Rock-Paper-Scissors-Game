const rules = ["r", "p", "s"];
let userScoreEl = document.querySelector(".user_score");
let compScoreEl = document.querySelector(".comp_score");
let rockEl = document.querySelector(".rock");
let paperEl = document.querySelector(".paper");
let scissorsEl = document.querySelector(".scissors");
let computerChoice = document.querySelector(".computer_element");
let userChoiceEl = document.querySelector(".user_element");
let message = document.querySelector(".message");
let userWonEl = document.querySelector(".user_won");
let compWonEl = document.querySelector(".comp_won");
let compChoice = "";
let userChoice = {};
let userScore = 0;
let compScore = 0;
let userWon = 0;
let compWon = 0;

const elements = {
  paper: "📄",
  rock: "🪨",
  scissors: "✂️",
};

function randomObj(obj) {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randomKey, value: obj[randomKey] };
}

function handleGameResult() {
  const winMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (winMap[userChoice.key] == compChoice.key) {
    userScore++;
    message.innerHTML = "🎉 You won!";
  } else if (userChoice.key == compChoice.key) {
    message.innerHTML = "🤝 Equal!";
  } else {
    compScore++;
    message.innerHTML = "😔 You lost!";
  }
  if (userScore == 5) {
    userWon++;
    userScore = 0;
    compScore = 0;
  } else if (compScore == 5) {
    compWon++;
    compScore = 0;
    userScore = 0;
  }
}

function renderResult(element, obj) {
  userChoice = { key: element, value: obj[element] };
  userChoiceEl.innerHTML = `${obj[element]}`;
  compChoice = randomObj(obj);
  computerChoice.innerHTML = `${compChoice.value}`;
  handleGameResult();
  userWonEl.innerHTML = `${userWon}`;
  compWonEl.innerHTML = `${compWon}`;
  compScoreEl.innerHTML = `${compScore}`;
  userScoreEl.innerHTML = `${userScore}`;
}

rockEl.addEventListener("click", () => renderResult("rock", elements));
paperEl.addEventListener("click", () => renderResult("paper", elements));
scissorsEl.addEventListener("click", () => renderResult("scissors", elements));
