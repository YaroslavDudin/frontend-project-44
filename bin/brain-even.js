#!/usr/bin/env node
import readlineSync from 'readline-sync';
import
// eslint-disable-next-line import/no-useless-path-segments
{ name } from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let point = 0;
for (let i = 0; i <= 2; i += 1) {
  const rNum = Math.floor(Math.random() * 10);
  console.log(`Question: ${rNum}`);
  const question = readlineSync.question('Your answer: ');
  if ((rNum % 2 === 0 && question.toLowerCase() === 'yes') || (rNum % 2 !== 0 && question.toLowerCase() === 'no')) {
    console.log('Correct!');
    point += 1;
  } else {
    console.log("yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (point === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
