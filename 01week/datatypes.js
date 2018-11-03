'use strict'
//1. Write a JavaScript program to display the current day and time.
const todaysDate = () => new Date();

console.log(todaysDate());

//2. Write a JavaScript program to convert a number to a string.

const numberToString = (num1) => {
    return(Number(num1))
}
numberToString(22)

//3. Write a JavaScript program to convert a string to the number.
const string = '18';
const integer = (string) =>{
    return parseInt(string, 10);
}
integer(string);


//4. Write a JavaScript program that takes in different datatypes and prints out whether they are a: Boolean, Null, Undefined, Number, NaN, String

const whatDataType = (dataType) => {
return (typeof (dataType))
}
whatDataType(true)

//5. Write a JavaScript program that adds 2 numbers together.

const sumOfTwoNumbers = (num1, num2) => {
  if (num1!=NaN && num2!=NaN){
    return num1 + num2
    }
  else {
   return console.log('One or both of the arguments are not numbers')
    }
}
console.log(sumOfTwoNumbers(1,8));

//6. Write a JavaScript program that runs only when 2 things are true.

const trueInputs = (input1, input2) => {
  if (input1 && input2) {
    console.log('both are true')
  }
}
trueInputs(9,true);

//7. Write a JavaScript program that runs when 1 of 2 things are true.

const orInputs = (input1, input2) => {
  if (input1 || input2)  {
    console.log('perfect')
  }
}
orInputs(5,'holler')
//8.Write a JavaScript program that runs when both things are not true.

const falseInputs = (input1, input2) => {
  if (!input1 && !input2) {
    console.log('both are false');
  }
}
falseInputs(9,true);
