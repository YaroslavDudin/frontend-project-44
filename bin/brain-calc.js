#!/usr/bin/env node
import readlineSync from 'readline-sync';
import
// eslint-disable-next-line import/no-useless-path-segments
{ name } from '../src/cli.js';
import { point } from '../src/cli.js'
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('What is the result of the expression?');
const sign = ['+', '-', '*'];
const rndInt = randomIntFromInterval(0, 2);
for (let i = 0; i <= 2; i += 1) {
  const rNum1 = Math.floor(Math.random() * 10);
  const rNum2 = Math.floor(Math.random() * 10);
  let answer = 0;
  // eslint-disable-next-line default-case
  switch (sign[rndInt]) {
    case '+':
      console.log(`Question: ${rNum1} + ${rNum2} = `);
      answer = (rNum1 + rNum2);
      break;
    case '-':
      console.log(`Question: ${rNum1} - ${rNum2} = `);
      answer = (rNum1 - rNum2);
      break;
    case '*':
      console.log(`Question: ${rNum1} * ${rNum2} = `);
      answer = (rNum1 * rNum2);
      break;
  }
  let question = readlineSync.question('Your answer: ');
  question = Number(question);

}
const startGame = () => {
point(rules,roundGenerate)
}