// Exercises: Level 1

// 1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userAge = Number(prompt("Enter your age"));
let legalAge = 18 - userAge;
if (userAge >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`you cant drive yet , wait ${legalAge} more years.`);
}

// 2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let yourAge = Number(prompt("Entre your age"));
let myAge = 34;
if (myAge >= yourAge) {
  console.log("Im older than you");
} else {
  console.log("You are older than me");
}

// 3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 4;
let b = 3;

if (a > b) {
  console.log("a is greater than b ");
} else {
  console.log("a is less than b");
}

// Using a ternary operator:

console.log(a > b ? "a is greater than b" : "a is less than b");

// 4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let number = 10;

if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

// Exercises: Level 2
/* 1 . Write a code which can give grades to students according to theirs scores:

80-100, A
70-79, B
60-69, C
50-59, D
0-49, F */

let yourGrade = Number(prompt("Entre your Grade"));

if (yourGrade >= 80) {
  console.log("Your grade is A");
} else if (yourGrade >= 70) {
  console.log("Your grade is B");
} else if (yourGrade >= 60) {
  console.log("Your grade is C");
} else if (yourGrade >= 50) {
  console.log("Your grade is D");
} else {
  console.log("Your grade is F");
}

/* 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

let month = prompt("Enter a month").toLowerCase();

if (month === "September" || month === "october" || month === "november") {
  console.log("The season is Autumn.");
} else if (
  month === "december" ||
  month === "january" ||
  month === "february"
) {
  console.log("The season is Winter.");
} else if (month === "march" || month === "april" || month === "may") {
  console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
  console.log("The season is Summer.");
} else {
  console.log("Please enter a valid month.");
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

let day = prompt("What's day today").toLowerCase();

if (day === "Saturday" || day === "Sunday") {
  console.log("Today is weekend");
} else {
  console.log("Today is a working day");
}

// day 5
// level 1 :

// 1 Declare an empty array :
const firstArray = [];
// 2 Declare an array with more than 5 number of elements :
const arrayWithFiveElements = [1, 2, 3, 4, 5];
// 3 Find the length of your array:
console.log(arrayWithFiveElements.length);
// 4 Get the first item, the middle item and the last item of the array:
const firstItem = arrayWithFiveElements[0];
const midItem = arrayWithFiveElements[2];
const lastItem = arrayWithFiveElements[4];
// 5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataType = [5, "anotherdata", [1, 2, 3], true, null, firstArray];
console.log(mixedDataType.length);
// 6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// 7 Print the array using console.log()
console.log(itCompanies);
// 8 Print the number of companies in the array
console.log(itCompanies.length);
// 9 Print the first company, middle and last company
// I'm going to answer this one differently, as I saw in a course, assuming that this array is dynamic and might change in the future.
const firstCompany = itCompanies[0];
const midCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[itCompanies.length - 1];
// 10 Print out each company
// I remember that in this case we use the method .forEach , But Im not sure if using itCompanies.forEach would print anything or should we using it inside a function. Mba9it39lt , I shoudl google it really . right ?

// 11. Change each company to uppercase and print them
itCompanies.forEach(cons);
