// 1. turn string to number
let price1 = "30.14xxx";
let price2 = "45";

let pointNum = parseFloat(price1);
let integerNum = parseInt(price2);

console.log(typeof pointNum + " " + pointNum);
console.log(typeof integerNum + " " + integerNum);

console.log("===========================================")

// 2. given the number as string, remove comma and add dot
let num = "2,45";

let numChanged = parseFloat(num.replace(/,/g, '.'));

console.log(numChanged)

console.log("===========================================")

// 3. turn number to string
let price3 = 55;

let numStr = price3.toString();

console.log(typeof numStr + " " + numStr)

console.log("===========================================")

// 4. write if-else or switch that will console.log() message if someone is eligible to drink, and send them warning if they are not eligible to drink


const userAge = 20;

if(userAge < 21) {

  console.log("You can't drink buddy :(")
} 
else {

console.log("Lets get drunk :)")

}


console.log("===========================================")

// 5. find js method that will help you to get rid of the white space around the string

let weirdString = "   this string has some white space around    "; 

console.log(weirdString.trim())

console.log("===========================================")

// 6. create two variables with your first name and last name, make the first letters capitalized and concatenate them

let firstName = "jose"
let lastName = "pereira"

let firstWhole = firstName[0].toUpperCase() + firstName.substr(1)
let lastWhole = lastName[0].toUpperCase() + lastName.substr(1)

console.log(`Hello, my name is ${firstWhole} and my last name ${lastWhole}`)
