#!/usr/bin/env node
import readlineSync from 'readline-sync';
import
// eslint-disable-next-line import/no-useless-path-segments
{ name } from '../src/cli.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

// eslint-disable-next-line consistent-return
function primeCheck(number) {
  let isPrime = true;
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return true;
    }
    return false;
  }
}

let point = 0;
for (let i = 0; i <= 2; i += 1) {
  const randomNumberGen = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const rNum1 = randomNumberGen(1, 100);
  console.log(`Question: ${rNum1}`);
  const question = readlineSync.question('Your answer: ');
  if ((question === 'yes' && primeCheck(rNum1) === true) || (question === 'no' && primeCheck(rNum1) === false)) {
    console.log('Correct!');
    point += 1;
  } else {
    console.log(`'${question}' is wrong answer ;(. Correct answer was '${primeCheck(rNum1)}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (point === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
