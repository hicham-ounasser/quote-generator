// 1 - comments can make code readable

// 2 - Welcome to 30DaysOfJavaScript

//3 /* comments can make code readable, easy to reuse and informative */

// 4 - 5
let name1 = "Hi";
console.log(typeof name1);

// 6

let name2;
let age1;

// 7

let name = "moncifa";
let age2 = 100;

// 8

let firstName1 = "Hicham";
let lastName1 = "Ounasser";
let maritalStatus1 = "motalaka";
let country1 = "morocco";
let age3 = 100;

// 9

let firstName = "Hicham";
let lastName = "Ounasser";
let maritalStatus = "motalaka";
let country = "morocco";
let age = 100;

// 10

let myAge = 33;
let yourAge = 28;

console.log("My age is:" + myAge);
console.log("Your age is:" + yourAge);

// day 2
// Exercise: Level 1

// 1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = "30 Days Of JavaScript";

// 2 Print the string on the browser console using console.log()
console.log(challenge);

// 3 Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4 Change all the string characters to capital letters using toUpperCase() method
let uperCase = challenge.toUpperCase();

//5 Change all the string characters to lowercase letters using toLowerCase() method
let lowerCase = challenge.toLowerCase();

// 6 Cut (slice) out the first word of the string using substr() or substring() method
const firstSpaceIndex = challenge.index(" ");
const firstWord = slice(0, firstSpaceIndex);
console.log(firstWord);

// 7 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

const slicePhrase = challenge.slice(3);

// 8 Check if the string contains a word Script using includes() method

const checkIfContainsString = challenge.includes("Script");
console.log(checkIfContainsString);

// 9 Split the string into an array using split() method

const splitStr = challenge.split(" ");
console.log(splitStr);

// 10 Split the string 30 Days Of JavaScript at the space using split() method

const split = challenge.split(" ");
console.log(split);

// 11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const splitCompanies = companies.split(", ");
console.log = splitCompanies;

// 12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

const newChallenge = challenge.replace("JavaScript", "Python");
console.log(newChallenge);

// 13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

const whatIndex = challenge.charAt(15);
console.log(whatIndex);

//14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

const indexCodeOfJ = challenge.charCodeAt(J);
console.log(indexCodeOfJ);

// 15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
const idexOfA = challenge.indexOf("a");

// 16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

const lastIndex = challenge.lastIndexOf("a");

// 17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

const sentence =
  "You cannot end a sentence with because because because is a conjunction";
const positionOf1stBecause = sentence.indexOf("because");

// 18 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2 =
  "You cannot end a sentence with because because because is a conjunction";
let position = sentence2.lastIndexOf("because");

// 19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let postion2 = sentence.search("because");

// 20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let challenge1 = " 30 Days Of JavaScript ";
let trimmedIt = challenge1.trim(" ");

// 21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.startsWith("30"));

// 22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.endsWith("JavaScript"));

// 23 Use match() method to find all the a’s in 30 Days Of JavaScript

// 24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

const str1 = "30 Days of";
const str2 = "JavaScript";
const fullStr = str1.contact(str2);
console.log(fullStr);

// 25 Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2));

// DAY 2 Exercise: Level 2

// 1 . Using console.log() print out the following statement:

let statement =
  "There is no exercise better for the heart than reaching down and lifting people up.";
let person = "John Holmes";
console.log(
  `the quote ${statement} by ${person} teaches us to help one another`
);

// 2 Using console.log() print out the following quote by Mother Teresa:
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// 3 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof "10" === typeof 10); // this must be false because the first one is string and the other is a number

// to make it equal we have to turn the string to a number , yak ?

let numTen = Number("10");
console.log(typeof numTen === typeof 10);

// 4 . Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let numNine = parseFloat("9.8");
num = Math.round(numNine);

// 5 . Check if 'on' is found in both python and jargon

wordOne = "python";
wordTwo = "jargon";

if ("on" in wordOne && "on" in wordTwo) {
  console.log("'on' is found");
} else {
  console.log("'on' is not found");
}

// 6 I hope this course is not full of jargon. Check if jargon is in the sentence.

sentnce = "jargon is in the sentence";

if ('"jargon" in sentence') {
  console.log("'jargon' is in the sentnce");
} else {
  console.log("no it is not");
}

// 7 . Generate a random number between 0 and 100 inclusively.

let randomNumber = Math.random() * 100;
console.log(randomNumber);

// 8 . Generate a random number between 50 and 100 inclusively.

let randomNumber2 = Math.random() * 50 + 50;
console.log(randomNumber2);

// 9 . Generate a random number between 0 and 255 inclusively.

let randomNumber3 = Math.floor(Math.random() * 255);
console.log(randomNumber3);

// 10 . Access the 'JavaScript' string characters using a random number.

let randomNumFromString = "JavaScript";
const randomNumber4 = Math.random() * randomNumFromString.length;
console.log(randomNumber4);

// Exercises: Level 3

// 1 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let loveSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let loveCount = loveSentence.match(love);
console.log(loveCount);

// 2 Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let becauseSentence =
  "You cannot end a sentence with because because because is a conjunction";
let findBecause = becauseSentence.match(because);
console.log(findBecause);

// 3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// I dont know how to do this one , I need to search it

// 4 Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let incomeSentence =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let splitSentenceIntoWords = incomeSentence.split(" ");
let numbers = splitSentenceIntoWords.filter((word) => !isNaN(word)).map(Number);

numbers[(5000, 10000, 1500)];
let salary = numbers[0];
let bonus = numbers[1];
let onlineCourses = numbers[2];

const totalAnnualIncome = salary * 12 + bonus + onlineCourses * 12;
console.log(`total annul income is ${totalAnnualIncome}`);

// Day 3

/* Exercises: Level 1
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.*/

const personMe = {
  firstName: "Hicham",
  lastName: "Ounasser",
  country: "Morocco",
  age: 34,
  isMarried: false,
};
console.log(typeof firstName, lastName, country);
console.log(typeof age, isMarried);

// 2. Check if type of '10' is equal to 10
let dataOne = "10";
let dataTwo = 10;

console.log(dataOne === dataTwo); // this one should be false
console.log(dataOne == dataTwo); // this one should be true because == corcion

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10);

// 4. Boolean value is either true or false.
// i. Write three JavaScript statement which provide truthy value.
console.log(19);
console.log("myname");
console.log(true);
// ii. Write three JavaScript statement which provide falsy value.

console.log("");
console.log(null);
console.log(false);

// 5 .Figure out the result of the following comparison expression first without using console.log().
4 > 3; // true
4 >= 3; // true
4 < 3; // false
4 <= 3; // false
4 == 4; // true
4 === 4; // true
4 != 4; // false
4 !== 4; // false
4 != "4"; // false
4 == "4"; // true
4 === "4"; // false

// 6. Find the length of python and jargon and make a falsy comparison statement.

let python = "python";
let jargon = "jargon";

console.log(python.length != jargon.length); // should be false since both have same length

// 7. Figure out the result of the following expressions first without using console.log().

4 > 3 && 10 < 12; // true
4 > 3 && 10 > 12; // false
4 > 3 || 10 < 12; // true
4 > 3 || 10 > 12; // true
!(4 > 3); // false
!(4 < 3); // true
!false; // true
!(4 > 3 && 10 < 12); // false
!(4 > 3 && 10 > 12); // true
!(4 === "4"); // true

// 8 . There is no 'on' in both dragon and python
let dragon = "dragon";
python = "python";
console.log(dragon.includes("on") && python.includes("on")); // true , if we want to make false we add !

// 9 . Use the Date object to do the following activities

let now = new Date();

// What is the year today?
console.log(now.getFullYear());
// What is the month today as a number?
console.log(now.getMonth() + 1);
// What is the date today?
console.log(now.getDate());
// What is the day today as a number?
console.log(now.getDay());
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let numberOfscnd = Math.floor(now.getDate() / 1000);
console.log(numberOfscnd);

// Exercises: Level 2
//1 . Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt("Entre base of the triangle");
let height = prompt("Entre hight of the triangle");
let triangle = 0.5 * base * height;
console.log(`the area of triangle is ${triangle}`);

// 2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let sideA = prompt("Enter side a of the triangle:");
let sideB = prompt("Enter side a of the triangle:");
let sideC = prompt("Enter side a of the triangle:");

let perimeterOfTriangle = Number(sideA) + Number(sideB) + Number(sideC);
console.log(`The primeter of the triangle is : ${perimeterOfTriangle}`);

// 3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt("Enter length of the rectangle");
let width = prompt("Enter width of the triangle");
let areaOfTherectangle = Number(width) * Number(length);
let premiterOfTheRectangle = 2 * areaOfTherectangle;

// 4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = prompt("Entre the radius of the circle");
let pi = 3.14;
let areaOfTheCircle = pi * Number(radius) * Number(radius);
let circumferenceOfTheCircle = 2 * pi * Number(radius);

// 5 . Calculate the slope, x-intercept and y-intercept of y = 2x -2

// slope formula , slope(m) = y1 - y2 / x1 - x2

let x1 = prompt("entre x1");
let x2 = prompt("entre x2");
let y1 = prompt("entre y1");
let y2 = prompt("entre y2");

let slope = Number(y1) - Number(y2) / Number(x1) - Number(x2);

// 6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let X1 = 2,
  X2 = 2;
let Y1 = 6,
  Y2 = 10;

let slopeBetweenPoint = (Y2 - Y1) / (X2 - X1);
console.log(slopeBetweenPoint);

// 7 Compare the slope of above two questions.

if (slope === slopeBetweenPoint) {
  console.log("slopes are equal");
} else {
  console.log("slopes are not equal");
}

// 8 Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let x = prompt("Entre the value of x");
let y = x * x + 6 * x + 9;
console.log(`you x = ${x} , so y = ${y}`);

// 9 Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours = prompt("Entre your hours");
let ratePerHour = prompt("your rate hour");
let pay = Number(hours) * Number(ratePerHour) * 4;
console.log("you pay is : " + pay);

// 10 If the length of your name is greater than 7 say, your name is long else say your name is short.

let yourname = prompt("Entre your name");
if (yourname.length > 7) {
  console.log("your name is less than 7 Characters");
} else {
  console.log("your name is too long mate");
}

// 11 Compare your first name length and your family name length and you should get this output.

let yourFirstName = "Asabeneh";
let yourLastName = "Yetayeh";

if (yourFirstName.length > yourLastName.length) {
  console.log(
    `your firsth name ${yourFirstName} is longer than ${yourLastName}`
  );
} else {
  console.log(
    `your last name ${yourLastName} is longer than your name ${yourFirstName}`
  );
}

// 12 Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge1 = 250;
let yourAge2 = 25;
let agedifference = myAge1 - yourAge2;

console.log(`I am ${agedifference} older than you`);

// 13 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let ageUser = prompt("Entre your age");
let legalAge = 18 - ageUser;
if (ageUser > 18) {
  console.log("you can drive");
} else {
  console.log(`you cant drive yet , wait ${legalAge}`);
}

// 14 Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let NumberOfYearsYouLived = prompt("Entre number of years you lived");
let secondsInaYear = 60 * 60 * 24 * 365;

let secondsYouLived = NumberOfYearsYouLived * secondsInaYear;
console.log(`you lived ${secondsInaYear} seconds`);

/* 15 Create a human readable time format using the Date time object 

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm  */

// I already a created a date object called now , so im ganna use that :

let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, "0"); // Here i did a google search and i found out that i need to convert the number to a string and use .padStart(2, '0') to ensure that the month always has two digits.
let day = String(now.getDate()).padStart(2, "0");
let hour = String(now.getHours()).padStart(2, "0");
let minutes = String(now.getMinutes()).padStart(2, "0");

console.log(`${year}-${month}-${day} ${hour}:${minutes}`);
console.log(`${day}-${month}-${year} ${hour}:${minutes}`);
console.log(`${day}/${month}/${day} ${hour}:${minutes}`);

/* Exercises: Level 3
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ) */

// im going to use the code above , i guess it is same thing anyway

let time = `${year}-${month}-${day} ${hour}:${minutes}`;
console.log(time);
