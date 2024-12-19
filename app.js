"use strict"

let number = Math.floor(Math.random() * 50 + 1)
const revealNumber = document.querySelector(".number");

let score = 50;
let highscore = 0;

function displayMessage(content) {
     document.querySelector(".message").textContent = content;
}
document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value)

    if (!guess) {
        document.querySelector(".message").textContent = "⛔No Input"
    } else if (guess === number) {
        revealNumber.textContent = number;
        displayMessage("🎉Correct Number")
        // highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== number){
        if (score > 1) {
            displayMessage(guess > number ? "🔼Too high" : "🔽Too Low");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("💥 Game Over");
            document.querySelector(".score").textContent = 0
        }
    }
})

document.querySelector(".again").addEventListener("click", function() {
    score = 50;
    number = Math.floor(Math.random() * 50 + 1)
    displayMessage("Start Guessing....");
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?"
})