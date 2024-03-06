#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

greeting();

const isEven = (num) => num % 2 === 0;
const generateQuestion = () => Math.floor(Math.random() * 10);
const startBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let points = 0;

  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = generateQuestion();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((isEven(randomNumber) && userAnswer.toLowerCase() === 'yes') || (!isEven(randomNumber) && userAnswer.toLowerCase() === 'no')) {
      console.log('Correct!');
      points += 1;
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${isEven(randomNumber) ? 'no' : 'yes'}'.`);
      console.log(`Let's try again, ${greeting}!`);
      break;
    }
    if (points === 3) {
      console.log(`Congratulations, ${greeting}!`);
    }
  }
};

startBrainEven();
