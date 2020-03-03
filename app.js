// Section 3: DOM Manipulation & Events

// Removing & Replacing Elements
// Objective: Replace and remove elements within the dom, how to work with classes, how to manipulate classes and attributes, how to get attributes in classes, how to change them, remove them, etc...


// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New Text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);



// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

// Classes
let val;

val = link.className; // gives us a string of the classes
val = link.classList; // gives us a DOM token list but its set up like an array. 
val = link.classList[0]; // You can access them individually
link.classList.add('test'); // add a class using classList
link.classList.remove('test'); // remove a class using classList
val = link;


// Attributes
val = link.getAttribute('href'); // get an attribute
val = link.setAttribute('href', 'http://speedhunters.com'); // add a link to an attribute
link.setAttribute('title', 'Speed Hunters')// add a title attribute
val = link.hasAttribute('title'); // check to see if there is an attr; returns t/f
link.removeAttribute('title'); // remove attribute
val = link;


console.log(val);