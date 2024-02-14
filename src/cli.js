import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
// eslint-disable-next-line import/prefer-default-export
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
 export const point = (question , answer ) => {
   
    let point = 0;
    
for (let i = 0; i <=0 ; i ++) {
    if (question === answer) {
        console.log('Correct!');
        point += 1;
        
      }
       else {
        console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.`);
        console.log(`Let's try again, ${name}!`)
     break;
       } 
        if (point === 3) {
            console.log(`Congratulations, ${name}!`);
          }
        }
    }
 