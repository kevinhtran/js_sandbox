// Section 3: DOM Manipulation & Events

// What is The DOM?
// DOM - Document Object Model
  // Tree of nodes/elements created by the browser
    // any HTML tags in the document
  // JavaScript can be used to read/write/manipulate to the DOM elements/nodes
  // Object Oriented Representation
    // each node has it's own properties of methods: change, remove, add,etc...
    // The browser gives us a window object and inside of that, we have a document object
// The document object itself has a ton of different methods and propeties attached to it.

// Examining The Document Object

let val;

// 
val = document;
val = document.all; // gives us a collection of the document
val = document.all[0]; // gives us the first element which is most likely the html element in this case
val = document.all.length; // shows you how many elements you have in the dom
val = document.head; // get just the head
val = document.body; // get just the body
val = document.doctype; // shows you what kind of doctype
val = document.domain; // gives the loopback address since i'm on my local host
val = document.URL; //gives you the whole thing including protocol etc
val = doucment.characterSet;
val = document.contentType;

val = document.forms; // get all the form elements on the page
val = document.forms[0]; // to access a certain form
val = document.forms[0].id; //gives us the id
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links; // returns a collection of all area and a elements with a value for the href attribute
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images; // returns a collection of the images

val = document.scripts; // returns a list of the script elements
val = document.scripts[2].getAttribute('src'); // get a certain script and then you want to get the src attribute

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});


console.log(val);