import readlineSync from "readline-sync";
import { name } from "../src/cli.js";


export function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }
  
  function checkAnswer(answer, question) {
    if (question % 2 === 0 ? answer === "yes" : answer === "no") {
      console.log("correct");
      return true;
    } else {
      console.log(`incorrect. Ohhh, please try again. The previous number was ${question}`);
  
      const userAnswer = readlineSync.question("Your answer: ");
      return checkAnswer(userAnswer, question);
    }
  }
  
  export default function gameEven() {
    let correctCount = 0;
    while (correctCount < 3) {
      const question = randomInteger(1, 100);
      const Question =
        'Answer "yes" if the number is even, otherwise answer "no"';
      console.log(`${Question}: ${question}`);
      const userAnswer = readlineSync.question("Your answer: ");
      if (checkAnswer(userAnswer, question)) {
        correctCount += 1;
      }
    }
  }
  
  gameEven();
  console.log(`Congratulations, ${name}!`);

