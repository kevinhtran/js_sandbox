// Section 3: DOM Manipulation & Events

// -- Local & Session Storage -- 

// Using a local storage API that is actually part of the browser
// What you set as a value has to be a string
// You can still save arrays, objects and stuff but you have to turn them into a string first by using a method called JSON.stringify
// And when you pull it out to use it, you wan to parse it back using the method JSON.parse

// local storage vs session storage
// local storage will stay until you manually clear it out in your settings or in your program
// session storage will leave once your browser is closed; once the session ends
// the API is the same for both local storage and session storage

// set local storage item
// localStorage.setItem('name', 'John');// key of 'name' and value of 'John'
// you can set the set data in your chrome console by going to Applications and then clicking on local storage
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth'); //  this will not stay after closing the browser

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear(); // when you clear it, you should see it as null in the console

// console.log(name, age);

// if you want to add a task to the local storage
// You will notice that this will only allow you to store one task at a time
document.querySelector('form').addEventListener('submit', 
function(e) {
  const task = document.getElementById('task').value;
  localStorage.setItem('task', task);
  alert('Task saved.');

  e.preventDefault();
});

// To fix this, you can create an array of task and store that as a string:
document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
  console.log(task);
});