// Section 3: DOM Manipulation & Events

// DOM Selectors For Single Elements

// document object methods that allow us to pull things from the DOM and then we can do different things with the elements/node
// vanilla js

//single element selectors
  // will allow you to grab a single element by its id or class, etc...
  // stores one thing only
  // grabs the single first one


// multiple element selectors
  // grabs all the elements of that class and node list


// document.getElementById()
// selects things by their id

console.log(document.getElementById('task-title'));

// Get things from the element

console.log(document.getElementById('task-title').id); //get ele by id
console.log(document.getElementById('task-title').className); // by class

// // Change styling
// document.getElementById('task-title').style.background = '#333'; // change the background to a certain color.
// document.getElementById('task-title').style.color = '#fff'; // change to white
// document.getElementById('task-title').style.padding = '5px'; // change padding
// // document.getElementById('task-title').style.display = 'none'; // completely get rid of display
// // this is to show you that you can change styles in JS but use CSS instead.

// // Change content
// // 
// document.getElementById('task-title').textContent = 'Task List'; //change context of the list
// document.getElementById('task-title').innerText = 'My Tasks'; // change inner contents of inner text
// document.getElementById('task-title').innerHTML = '<span style ="color:red">Task List</span>'; // you can see that you are not changing the style inside of the span tag

// it's not very efficient, so here's what we do, we set it to a variable:
const taskTitle = document.getElementById('task-title');

//Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()
// newer and much more powerful
// you don't have to select things by id, you can select them by... anything
// basically works like jQuery because you can put any CSS selectors in here

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5')); // if there's more than one on the page, you're going to get the first one.

// for li items
document.querySelector('li').style.color = 'red'; // single element selector, so it only gets the first one
document.querySelector('ul li').style.color = 'blue'; // you can also do nested elements
document.querySelector('li:last-child').style.color = 'red'; // you can also use css pseudo code in here
document.querySelector('li:nth-child(3)').style.color = 'yellow'; // you can also use the nth child pseudo code to select certain li items
document.querySelector('li:nth-child(4)').textContent = 'Hello World'; // you can also change the text for that item
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // you'll notice that only the first odd has been selected because this is a single element selector
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; // same thing for even, it only selects one




