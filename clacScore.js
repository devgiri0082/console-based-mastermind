function calcScore(code, guess) {
  let answer = { correctPos: 0, incorrectPos: 0 };
  findCorrectPos(code, guess, answer);
  findIncorrectPos(code, guess, answer);
  return answer;
}

function findIncorrectPos(code, guess, answer) {
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === undefined) continue;
    let index = code.indexOf(guess[i]);
    if (index != -1) {
      answer["incorrectPos"]++;
      guess[i] = undefined;
      code[index] = undefined;
    }
  }
}

function findCorrectPos(code, guess, answer) {
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] == code[i]) {
      answer["correctPos"]++;
      code[i] = undefined;
      guess[i] = undefined;
    }
  }
}


module.exports = calcScore