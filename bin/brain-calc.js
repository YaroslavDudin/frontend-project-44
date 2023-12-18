import readlineSync from "readline-sync";
import { name } from "../src/cli.js";
const getRandomInt = (min, max) => {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};
name;

const generateQuestion = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operators = ["+", "-", "*"];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  return question;
};

const calculate = (question) => {
  const [num1, operator, num2] = question.split(" ");
  switch (operator) {
    case "+":
      return parseInt(num1) + parseInt(num2);
    case "-":
      return parseInt(num1) - parseInt(num2);
    case "*":
      return parseInt(num1) * parseInt(num2);
    default:
      return null;
  }
};

const playCalculator = (name) => {
  console.log("What is the result of the expression?");
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const question = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = calculate(question);
    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
console.log(playCalculator(name));
export default playCalculator;
