#!/usr/bin/env node
import readlineSync from 'readline-sync';
import
// eslint-disable-next-line import/no-useless-path-segments
{ name } from '../src/cli.js';

console.log('Find the greatest common divisor of given numbers.');
let point = 0;

for (let i = 0; i <= 2; i += 1) {
  const randomNumberGen = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const rNum1 = randomNumberGen(1, 100);
  const rNum2 = randomNumberGen(1, 100);
  let answer = 0;
  let hcf;
  // eslint-disable-next-line no-plusplus
  for (let h = 1; h <= rNum1 && h <= rNum2; h++) {
    if (rNum1 % h === 0 && rNum2 % h === 0) {
      hcf = h;
    }
  }

  console.log(`Question: ${rNum1} ${rNum2}`);
  answer = (hcf);
  let question = readlineSync.question('Your answer: ');
  question = Number(question);
  if (question === answer) {
    console.log('Correct!');
    point += 1;
  } else {
    console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (point === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}