"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

//DOM event for the check btn
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }
  //when player wins
  else if (guess === SecretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";

    //displays the correct number
    document.querySelector(".number").textContent = SecretNumber;

    //changes background color when guess is corect
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //when guess is too high
  else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
  }
  //when guess is too low
  else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = "You lost the game!";
    }
  }
});

//DOM event for again button

//selecting the element with the again class
document.querySelector(".again").addEventListener("click", function () {
  //reinitializing the score and SecretNumber variables
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;

  //restoring the initial conditions of the messages,score,number and guess input
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  //restoring the original background color and width
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
