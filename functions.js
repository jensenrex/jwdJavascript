// To log “Good Afternoon” to the console - use a named function

function greeting() {
  console.log('Good Afternoon');
}

// call function 

greeting();

// That takes the greeting as a parameter and logs the greeting to the console (use a simple  named function)
function gday(userGreeting) {
  console.log(userGreeting);
}

gday('wassup homeboy?');

// That takes a number as a parameter and checks if it is divisible by 5. (use a Function expression)
const divisibleBy5 = function (num) {
  if (num % 5 === 0) {
    console.log(`${num} is divisible by 5!`);
  } else {
    console.log(`${num} is not divisible by 5!`);
  }
}

divisibleBy5(15); 

// That takes two number parameters and adds them. Use return to return the result. - (Try fat arrow function)

// const addNums = (num1, num2) => {
//   let result = num1 + num2;
//   return result;
// }
const addNums = (num1, num2) => (num1 + num2);

console.log(addNums(5, 99));