import readlineSync from "readline-sync";
console.log("Welcome to the Brain Games!");
console.log("May I have your name?");
export const name = readlineSync.question("Your answer: ");

console.log(`Hello,${name}!`);
console.log('"yes" if the number is even, otherwise answer "no"');
