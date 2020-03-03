// Section 3: DOM Manipulation & Events

// Creating Elements
// Create an element and then add things to it such as classes, ids, attributes.
// Create the element and then insert it into the DOM

// Objective: Add an extra li at the bottom which includes the text and a link for the icon

// Constructing DOM items from scratch with vanilla js
// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
// appendChild just means that you just want to put something inside of something
let newText = document.createTextNode('Hello world'); // you can just put it into a variable
li.appendChild(newText); // and then here we append the newText into something

// crate new link element
const link = document.createElement('a');

// Add classes
link.className = 'delete-item secondary-content';
// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li 
li.appendChild(link);

// Append li as child to ul
// this create the new li within our ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);