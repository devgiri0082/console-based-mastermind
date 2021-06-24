let calcScore = require("./clacScore");
let readLine = require("readline-sync");
playGame();
function playGame() {
    console.log("M A S T E R M I N D");
    let randomNumber = randomNumberGenerator(4);
    let guess = "";
    let turn = 0;
    do {
        guess = readLine.question(`${++turn}) Guess the 4-digit code: `);
        if (guess === "quit") break;
        if(guess != randomNumber) {
           let score = calcScore(randomNumber.split(""), guess.split(""));
           console.log(`${score["correctPos"]} matching digit(s) in the correct position`);
           console.log(`${score["incorrectPos"]} matching digit(s) in the incorrect position`)
        }
    } while(turn < 10 && guess != randomNumber)
    if(guess == randomNumber) console.log(`Correct - You win!`);
    else console.log(`You lose the number was ${randomNumber}`);
}


function randomNumberGenerator(digit) {
    let number = "";
    for (let i = 0; i < digit; i++) {
        number += Math.floor(Math.random() * 4 + 1)
    }
    return number;
}