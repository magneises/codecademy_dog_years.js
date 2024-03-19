// Dog Years: Converting your age from "human years" to "dog years".

// TASK 1: Setting my name example
myAge = 29;
console.log(`This is myAge: ${myAge}`);

// setting earlyYears to let setting to 2. 
let earlyYears = 2
console.log(`This is earlyYears: ${earlyYears}`);

// use multiplication assignment operation to multiple the value saved to earlyYears
earlyYears *= 10.5;
console.log(`This is earlyYears: ${earlyYears}`);

// TASK 4
// setting myAge minus 2 to laterYears variable
laterYears = myAge - 2;
console.log(`This is laterYears: ${laterYears}`);

// TASK 5
// multiplying laterYears by 4 using the multiplication assignment 
laterYears *= 4;
console.log(`This is laterYears (Dog Years): ${laterYears}`);


// TASK 6
// check your work and print to the console. see above.

// TASK 7 
// add earlyYears and laterYears and store in a new variable named myAgeInDogYears
myAgeInDogYears = earlyYears + laterYears;
console.log(`This is myAgeInDogYears: ${myAgeInDogYears}`);

// TASK 8
// Using a string method, write your anme and call the built-in method .toLowerCase(). Call this new variable myName.
myName = 'Preston'.toLowerCase();

// TASK 9
// Write a console.log statement that display your name, age, dog age. 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
