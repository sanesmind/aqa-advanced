// task 1

const str = "This is a homework #4";
const num = 543.76;
let isActive = true;
let nothing = null;
let somethingUnknown = undefined;
// or just: let somethingUnknown;


console.log(str);
console.log(num);
console.log(isActive);
console.log(somethingUnknown);
console.log(nothing);

console.log("-------------------------------");
//task 2

const name1 = "Alex";
const name2 = "Robert";

let greeting = "Hello, " + name1 + "! " + "Glad to see you, " + name2 + "!";
console.log(greeting);

let secondGreeting = `Hello, ${name1}! Glad to see you, ${name2}!`
console.log(secondGreeting);

console.log("-------------------------------");
//task 3

const age = 26;
const adult = age > 17;

console.log(age);
console.log(adult);

console.log("-----------------------------");
//task 4

const radiusOfCircle = 38;
const areaOfCircle = Math.PI * radiusOfCircle ** 2;
console.log(areaOfCircle.toFixed(2));

const length = 62;
const width = 31;
const areaOfSquare = length * width;
console.log(areaOfSquare.toFixed(2));

const radiusOfCylinder = 5;
const heightOfCylinder = 20;
const volumeOfCylinder = Math.PI * Math.pow(radiusOfCylinder, 2) * heightOfCylinder;
console.log(volumeOfCylinder.toFixed(2));