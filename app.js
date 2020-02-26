// Using the console
// log to console

console.log('hello world');
console.log(123);
console.log(true);
console.log([123]);
console.log({ a: 1, b: 2, c: 3 });
console.table({ a: 1, b: 2, c: 3 });
console.error("This is some error");
console.clear();
console.warn("This is a warning");
console.time("Hello");
// shows you how long to run the script
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.timeEnd("Hello");

// __________________________________________________________
// Variables
// var, let, const

var name = 'John Doe';
console.log(name);
// you can reassign by setting the variable to something else
name = 'Steve Smith';
console.log(name);

// variables can include letters, numbers, _, $
// variables can not start with a number: var 1name = 'John'

// multi word variables
var firstName = 'John'; // this style is called "camel case";
var first_name = 'Sarah'; // underscore
var FirstName = "Tom"; // Pascal case
var firstname; // all lowercase is not recommended

let
  let works very similar to var
    you can still reassign or assign with a value
let name;
let name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// const
const name = 'John';
console.log(name);
can't change or reassign it
name = 'Sara' -> will not reassign over 'John'
you also have to assign a value or it will be an error:
const greeting;

const with object
you can change the data within the object but the object name is set because of const
const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

console.log(person);

// same applies to arrays
const numbers = [1, 2, 3, 4, 5];
// this is a method that allows you to add an element to the end of the array
numbers.push(6);
console.log(numbers);

// __________________________________________________________
// Data Types in JS

// Primitive Data Types:
// Stored directly in the location the variable accesses
// Stored on the stack

// Reference Data Types:
// Accessed by reference
// Objects that are stored on the heap
// A pointed to a location in memory

// primitive type
// string, number (integers, decimals, floats), boolean, null, undefined, symbols (ES6)
// reference type
// arrays, object literals, functions, dates, anything else...

// dynamically typed language
// Types are associated with values not variables
// The same variable can hold multiple types
// We do not need to specify types
// Most other languages are statically typed (Java, C#, C++)
// There are suspects of JS and addons to allow static typing (TypeScript, Flow)

// // Primitive:
// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null it will show object but this is in fact a bug for JS
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// // Reference:
// // Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'San Jose',
  state: 'CA'
}
// Date
const today = new Date();
console.log(today);
console.log(typeof today);

// __________________________________________________________
// Type Conversion
// Ex. Taking a variables and changing it's data type.

let val;

// Number to string
val = String(555);
val = String(4 + 4);
// Boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = (true).toString();

// // you can use either String() or .toString()

// // String to number
val = Number("5");
val = Number(true); // gives us zero
val = Number(false); // gives us zero
val = Number(null); // gives us zero
val = Number('hello') // will parse as NaN... pretty much means none
val = Number([1, 2, 3,]) // will parse as NaN... pretty much means none

val = parseInt('100.30'); // only parse as an integer
val = parseFloat('100.30'); // will parse with the decimal

// // Output
console.log(val);
console.log(typeof val);
// console.log(val.length); => only works on string
console.log(val.toFixed());

// Type Coercion
// Basically when we take one type and change it to another but we don't actuallay do it, JS does it for us

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum); // 56. JS basically concatenated it for us.
console.log(typeof sum);

// __________________________________________________________
// Numbers & Math objects

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// // Math object
val = Math.PI; // pie
val = Math.E; // "youler's number"
val = Math.round(2.8); // round up your numbers
val = Math.ceil(2.4) // round up
val = Math.floor(2.8) // round down
val = Math.sqrt(64) // square your number
val = Math.abs(-3) // get the absolute number
val = Math.pow(8, 2); // to the power
val = Math.min(2, 33, 5, 1, 34, 66, 444); // return the minimum
val = Math.max(3.4, 5, 56, 3, 3, -1) // get the max number
val = Math.random() // gets us a random decimal
// if you want a random whole number, you need to write it like this:
// 20 is the max number we want and 1 is the min. do it in this format
val = Math.random() * 20 + 1
// up top will usually give you decimals still and if you don't want the decimals, you can do something like round it down:
val = Math.floor(Math.random() * 20 + 1)

console.log(val);

// __________________________________________________________
// String Methods & Concatenation

const firstName = 'Kevin';
const lastName = 'Tran';
const age = 29;
let str = "Hello, my name is Kevin."

let val;

// concatenation
val = firstName + " " + lastName;

// Append - add onto something, not replace it
val = 'Kevin ';
val += 'Tran';

val = 'Hello, my name is ' + firstName + ' and i am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// // concat

val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// taking the index of the string
val = firstName[0];

// indexOf()
val = firstName.indexOf('v');
val = firstName.lastIndexOf('v');

// charAt()
val = firstName.charAt('2');

// Get last char
val = firstName.charAt(firstName.length - 1)

// substring();

val = firstName.substring(0, 3);

// slice() mostly used for array
val = firstName.slice(0, 3);
val = firstName.slice(-3);

// split()
val = firstName.split('v') // returns as an array like this: ['Ke', 'in']

// replace()
val = str.replace('Kevin', 'Kev')

// includes()
val = str.includes('Kevin');

console.log(val)

// Template Literals
const name = 'Kevin';
const age = 29;
const job = 'Full-Stack Developer';
const city = 'San Jose';
let html;

// Without template strings (es5) NOT RECOMMENDED! It's tedious.
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + ' </li></ul>';

html = '<ul>' +
  '<li>Name: ' + name + '</li>' +
  '<li>Age: ' + age + '</li>' +
  '<li>Job: ' + job + '</li>' +
  '<li>City: ' + city + '</li>' +
  '</ul>';

function hello() {
  return hello;
}

// // With template strings(literals) (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;

// __________________________________________________________
// Array & Array Methods

// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 76, 33, 42);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [1, 'apples', true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);


// Mutating Arrays

// Add on to end
numbers.push(250);
// // Add on to front
numbers.unshift(120);
// // Take off from end
numbers.pop();
// // Take off from front
numbers.shift();
// // Splice values
numbers.splice(1, 3);
// // Reverse
numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2);
// Sorting arrays
val = fruit.sort();
val = numbers.sort(); // you'll notice that this won't work so what you want to do is use a compare function. pass in a callback to this sort

// Use the "compare function"
val = numbers.sort(function (x, y) {
  return x - y;
});

// // Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}

function over50(num) {
  return num > 50;
}

val = numbers.find(under50) // what this does is uses our function to find whatever is the first element that is under 50
val = numbers.find(over50) // opposite of the other function

console.log(numbers);
console.log(val);

// __________________________________________________________
// Object Literals

const person = {
  firstName: 'Kevin',
  lastName: 'Tran',
  age: 29,
  email: 'kevdeveloperjs@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'San Jose',
    state: 'CA'
  },
  getBirthYear: function () {
    return 2020 - this.age; // this is pertaining to the object
  }
}

let val;

val = person;

// Get specific value
val = person.firstName; // recommended
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'Nancy', age: 21 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name)
}

// __________________________________________________________
// Dates & Times

let val;
// instantiating a date
// there are various ways to write down the date
const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('Feburary 21, 2020');
birthday = new Date('07/07/1990')
// val = birthday;

// these are ways to get the current dates and times
// keep in mind the const today is always an empty parameter in the new Date() function
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

// changing months, dates, times, etc...
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);



console.log(birthday);

// If Statements & Comparision Operators

// PSEUDOCODE
// if (something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// // EQUAL TO
if (id == 101) {
  console.log('CORRECT');
} else {
  console.log('WRONG')
}


// // NOT EQUAL TO
if (id != 101) {
  console.log('CORRECT');
} else {
  console.log('WRONG')
}

// // EQUAL TO VALUE & TYPE
// use === most of the time
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('WRONG')
}

// // NOT EQUAL TO VALUE & TYPE
// use !== most of the time
if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('WRONG')
}

// Test if undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
if (id > 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}


// IF ELSE

const color = 'yellow';

if (color === 'red') {
  console.log('Color is red.')
} else if (color === 'blue') {
  console.log('Color is blue.')
} else {
  console.log('Color is not red or blue.')
}

// LOGICAL OPERATORS

const name = 'Steve';
const age = 70;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child.`)
} else if (age >= 13 && age <= 19) {
  console.log(`&{name} is a teenager.`)
} else {
  console.log(`${name} is an adult.`)
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`)
} else {
  console.log(`${name} is registered for the race`)
}

// TERNARY OPERATOR
console.log(id === 100 ? `CORRECT` : `INCORRECT`);

// WITHOUT BRACES
// Not suggested
if (id === 100)
  console.log('CORRECT')
else
  console.log('INCORRECT')
//________________________
// Switches

const color = 'yellow';


switch (color) {
  case 'red':
    console.log('Color is red.');
    break;
  case 'blue':
    console.log('Color is blue.');
    break;
  default:
    console.log('Color is not red of blue.');
    break;
}

// suggested to use a switch when you have a lot of different cases like for instance when you need to check one color against multiple.

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);


//_____________________________________________
// Function Declarations & Expressions

function greet(firstName = 'John', lastName = 'Doe') {
  // es6 allows you to set your parameters to equal to some default values
  // this is the old es5 way to have defaults
  // if (typeof firstName === 'undefined'){firstName = 'John'}
  // if (typeof lastName === 'undefined'){lastName = 'Doe'}
  return 'hello' + firstName + " " + lastName; // usuall you'd want to return
}

console.log(greet()); // if you want to log it, you'd wrap the function in a console.log()

// FUNCTION EXPRESSIONS
// putting a function as a variable assignment

const square = function (x = 3) {
  return x * x
};

console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSION - IIFEs
// An IIFE is a function that you declare and run at the same time
// We need it to be an expression by putting it into parenthesis

(function () {
  console.log('IIFE Ran..');
})();

(function (name) {
  console.log('Hello ' + name);
})('Brad');
// IIFEs are useful when it comes to certain design patterns like the modulo pattern
// Used later on in the calorie counter project.

// PROPERTY METHOD
// when a function is put inside of an object, it is called a method

const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`)
  }
}

// this is another pattern you can do
todo.delete = function () {
  console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();

//___________________________________________
// General Loops
// for loops, while loops, do while loops

//FOR LOOP

for (let i = 0; i < 10; i++) {
  console.log('Number ' + i);
  if (i = 2) {
    console.log('2 is my favorite number')
    continue;
  }

  if (i === 5) {
    console.log('Stop the loop')
    break;
  }

  console.log('Number ' + i);
}

// WHILE LOOP
// General rule: Use a For loop when you know how many times it's going to run and use a While loop when you're unclear of how many times it's going to run.

let i = 0;

while (i < 10) {
  console.log('Number' + i);
  i++;
}

// DO WHILE

let i = 1;

do {
  console.log('Number ' + i); // this is going to run no matter what.
  i++;
}

while (i < 10);

// LOOP THROUGH ARRAY

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// FOREACH
// Suggested to use if you're looping through an array for some reason

cars.forEach(function (car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array)
})

// MAP

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sarah' },
  { id: 3, name: 'Karen' },
  { id: 4, name: 'Steve' }
];

const ids = users.map(function (user) {
  return user.id;
})

console.log(ids);

// FOR IN LOOP
// often used for objects

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

//____________________________________________
// Look At The Window Object
// Document object is part of the window object
// Window is the global object in client side JS
// Node JS is a JS runtime that runs as a standalone process on your machine/computer
// your computer sysmte is your environment in NODE JS
// in clientside JS, the window/browser is the global environment
// Interesting fact: both google chrome and JS use an engine called V8

// WINDOW METHODS / OBJECTS / PROPERTIES

// console.log(123);

// Alert
//  a box that pops up with an alert
// window.alert('Hello world')

// Prompt
// similar to alert but except it takes an input

// const input = prompt();
// alert(input);

// // Confirm
// if (confirm("are you sure?")){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// these aren't the best looking things, use these alerts if you have an error message on form validation
// better suggestion would be to use the DOM and then output a nice looking bootstrap alert or something like that.

// Get height and width of the window

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll Points
// where you want to figure out where you are in terms in scrolling
val = window.scrollY;// vertical access
val = window.scrollX;// horizontal access
// this is useful for those sites where you scroll down and then all this animation is happening

// Location Object (part of the window object)
// you can get a lot of information from this in regard to the window
val = window.location;
val = window.location.hostname; // get your address/hostname/domain name
val = window.location.port; // port number
val = window.location.href; // protocol, hostname, port
val = window.location.search; // show the query string 

// Redirect
// redirects you to another page
// window.location.href = 'http://google.com';

// Reload
// reloads the page
// use it in some sort of function
// window.location.reload();

// History Object (part of the window object)
// get your browsing history
// window.history.go(-1); // brings you back to the previous page depending on the argument number: -1, -2, -3... etc.
val = window.history.length; // it'll tell you how many sites are behind you

// Navigator Object
// has to do with the actual browser itself: chrome, firefox, etc
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion; // checks the versions of their browser
val = window.navigator.userAgent;
val = window.navigator.platform;
// these are to use with conditionals if this version.. then do this for a mac... if not do it for a windows pc...
val = window.navigator.language;

// ^all these things are part of the window object.

console.log(val);

//__________________________________________________________

// Block Scope With let & const

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

if (true) {
  // Block Scope
  // anything that is wrapped in curly braces
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
}

for (let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}
console.log('Global Scope: ', a, b, c);

// you will notice that var it causes security risk and it causes confusion if you have some variable inside the global scope and there's something with the same name, things can get messed up.

// let and const have a block level scope and var has a function scope.