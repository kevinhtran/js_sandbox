// Section 3: DOM Manipulation & Events

// DOM Selectors for Multiple Elements
// Used to select more than one element
// Returns either a HTML collection or node list which are both similar to array, except there are certain things you can't do with normal arrays.
// Although they can be converted to arrays very easily.

// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item'); // fetch anything with this class name
console.log(items); // prints out the HTML collection and within it, you'll see all the different properties, ids, classes... etc
console.log(items[0]); // get the first list item within the HTML collection
items[0].style.color = 'red'; // we can change style by indexing them just like an array
items[3].textContent = 'Hello World'; // we can access them just like an array and change the text

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);


// // document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello World';

// // Convert HTML Collection into an Array and use it just like an array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className)
  li.textContent = `${index}: Hello`;
});

console.log(lis);

// document.querySelectorAll
// Pretty much like document.getElements and converting it into an HTML collection, except that it returns what is called a node list
// a node list counts not just elements but things like 'text nodes'. Run a forEach without converting it to an array

const items = document.querySelectorAll('ul.collection li.collection-item');

// we're iterating through our items variable which is a querySelectorAll and doesn't need you to convert it to an array.
items.forEach(function(li, index) {
  li.textContent = `${index}: Hello`;
});

// using querySelectorAll with certain css pseudo code and setting it to const
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// with a .forEach()
liOdd.forEach(function(li, index) {
  li.style.background = "#f4f4f4";
});

// with a for loop
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#ccc";
}

console.log(items);


