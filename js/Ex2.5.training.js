/** 
let age = 25; // Change this value and see how it changes the console output

if (age === 20) {
  console.log('You are 20 years old!');
} else if (age === 21) {
  console.log('You are 21 years old!');
} else {
  console.log('You are neither 20 nor 21 years old.');
}
*/

// Practise Section
/**  
let age = 25;

if (age === 20) {
    console.log(`You are 20 years old!`);
}   else if (age === 22) {
    console.log(`You are 22 years old!`);
}   else {
    console.log(`You are neither 20 nor 22 years old!`);
}
*/

/** 
let day = `Saturday`; 

if (day === `Sunday`) {
    console.log(`It\`s the weekend! Yay!`);
}   else if (day === `Saturday`) {
    console.log(`It\`s the weekend! Yay!`);
}   else {
    console.log(`It\`s not the weekend! Boo!`);
}
*/

/**
 * let isRed = false;

if (isRed) {
    console.log(`It is red!`);
} else {
    console.log(`It is not red`);
}
*/

/** console.log(1 === 2); // reads as "is 1 equal to 2?"// return is false */
/** console.log(1 !== 2); // reads as "is 1 not equal to 2?"// return is true */
/** console.log(1 < 2); // reads as "is 1 less than 2?" // return is true */
/** console.log(1 > 2); // reads as "is 1 greater than 2?" // return is false */
/** console.log(1 <= 2); // reads as "is 1 less than or equal to 2?" // return is false */
/** console.log(1 >= 2); // reads as "is 1 greater than or equal to 2?" // return is false */

/** 
let userInput = `Luftballon`;
let answerPart1 = `Happy to meet you at the`;
let answerPart2 = `festival!`;

if (userInput) {
    console.log(`${answerPart1} ${userInput} ${answerPart2}`);
}
if (!userInput){
    console.log(`Please add information into the field!`);
}
if (userInput !== ` `){
    console.log(`${answerPart1} ${userInput} ${answerPart2}`);
}
*/

/** 
let age = 14;
let result = age > 19 ? 'Is not a teen' : 'Is a teen';
console.log(result);
 */
/** 
let monkeyList = [
    {number: 5},
    {number: 4},
    {number: 3},
    {number: 2},
    {number: 1},
]

for (let i = 0; i<monkeyList.length; i--) {
    if (monkeyList[i] < 5 && monkeyList[i] > 1){
        console.log(monkeyList[i].number + ` little monkeys jumping on the bed. One fell off and bumped his head.`);
    }else {
        console.log(`There are no monkeys.`);
    }
}
*/

let monkeyList = [
    {number: 5},
    {number: 4},
    {number: 3},
    {number: 2},
    {number: 1},
]

for (let i = 0; i<monkeyList.length; i++) {
   console.log(monkeyList[i].number + ` little monkeys jumping on the bed. One fell off and bumped his head.`);
}  else{
    console.log(`There is no monkey!`)
}