"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = SecretNumber;

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

    //changes background color when guess is corect
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
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
