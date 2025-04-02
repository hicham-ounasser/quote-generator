// var first = parseFloat(prompt("Prompts the user for first number."));
// var second = parseFloat(prompt("Prompts the user for second number."));
// var operator = prompt("What's you opedator? choose +,-,*,/");

// let result;

// if (operator === "+") {
//   result = Number(first) + Number(second);
// } else if (operator === "-") {
//   result = Number(first) - Number(second);
// } else if (operator === "*") {
//   result = Number(first) * Number(second);
// } else if (operator === "/") {
//   result = Number(first) / Number(second);
// } else {
//   result = "Invalid operator!";
// }

// alert(result);

// var age = prompt("What is your age?");

// function checkDriverAge(age) {
//   if (Number(age) < 18) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
//   } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
//   } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//   }
// }
// checkDriverAge(age);

// var checkDriverAge2 = function (age) {
//   if (Number(age) < 18) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
//   } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
//   } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//   }
// };
// checkDriverAge(age);

// const checkDriverAge3 = (age) => {
//   if (Number(age) < 18) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
//   } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
//   } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//   }
// };
// checkDriverAge3(age);

// const now = new Date();
// console.log(now);

// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth();
// const day = now.getDay();
// const hours = now.getHours();
// const minutes = now.getMinutes();

// console.log(`${year} - ${month} - ${day} ${hours}:${minutes}`);

// const month = prompt("Entre month");

// if (month === january) {
//   console.log();
// }

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);
