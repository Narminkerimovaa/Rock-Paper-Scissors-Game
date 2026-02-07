const rules = ["r", "p", "s"];
let userScore = 0;
let compScore = 0;

function randomEL(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

alert("You win when you have 5 points.");

window.addEventListener("keydown", function (e) {
  let userChoose = e.key;
  let compChoose = randomEL(rules);

  if (!rules.includes(userChoose)) {
    alert("Please choose: r, p, s");
    return;
  }


  if (userChoose == "r" && compChoose == "s") {
    userScore++;
    console.log("Win");
    console.log("Your score:", userScore);
    console.log("Computer Score:", compScore);
    console.log("------------------");
  } else if (userChoose == "s" && compChoose == "p") {
    userScore++;
    console.log("Win");
    console.log("Your score:", userScore);
    console.log("Computer Score:", compScore);
    console.log("------------------");
  } else if (userChoose == "p" && compChoose == "r") {
    userScore++;
    console.log("Win");
    console.log("Your score:", userScore);
    console.log("Computer Score:", compScore);
    console.log("------------------");
  } else if (userChoose == compChoose) {
    console.log("Draf-Draf");
    console.log("Your score:", userScore);
    console.log("Computer Score:", compScore);
    console.log("------------------");
  } else {
    compScore++;
    console.log("Lose");
    console.log("Your score:", userScore);
    console.log("Computer Score:", compScore);
    console.log("------------------");
  }

    if (userScore == 5) {
    console.log("You win!!!");
    return;
  } else if (compScore == 5) {
    console.log("You lose!!!");
    return;
  }
});
