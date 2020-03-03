// Section 3: DOM Manipulation & Events

// Event Listeners & The Event Object
// Interation with the UI/Webpage
// This is where events come in
// We can listen for events on absolutely any element in the DOM

// Objective: We are going to add an event listener on the 'CLEAR TASKS' button
// .addEventListener takes in two things: actual event that we want to listen for and an anonymous function
// document.querySelector('.clear-tasks').addEventListener('click',
// function() { 
//   console.log('Hello World');
//   // e.preventDefault(); // prevent default link behavior
// });

// elements have default behaviors for redirecting you to some place else because of what has been put into your href
// if you have a "#" symbol inside of your href, you don't have to worry about setting a .preventDefault() property.

// in addtion to putting just an unnamed function as a second parameter, you can also put a name function:
// in this case, the event will look for a function called onClick
// this is the more preferred and cleaner way
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  // console.log('Clicked');

  let val;

  val = e;

  // Event target element
val = e.target; // will give you the actual element
val = e.target.id; // get the id of that target
val = e.target.className; // get the class that's associated with the target
val = e.target.classList; // you get a list with all the classes

e.target.innerText = 'Hello'; // changing the text of the button
// realize that you can do anything you want with styling, text change, etc, when you fire off an event. THIS IS POWERFUL...

// Even type
val = e.type; // look at event type. In this case, it'll tell us 'click'

// Timestamp
val = e.timeStamp; // get a timestamp that will change each time

// Coords event relative to the window
val = e.clientY; // get the cordinates of the event relative to the window. it'll give oyu the number of pixels on the y-axis
val = e.clientX; // same but on the x-axis. it'll show you cordinates depending on where you click.

// Coords event relative to the element
val = e.offsetY; // get the cordinates of the pixels of JUST/within the element
val = e.offsetX;

// remember that the 'target' is very important, especially when we start getting into event delegation.
// 


  console.log(val); // you'll notice in the console that you get the object with a bunch of a stuff associated with it but one thing in particular you should pay attention to is the "target" because it represents the element that the event actually happened on.
}