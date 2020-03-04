// Section 3: DOM Manipulation & Events

// Event Bubbling & Delagation

// Event bubbling is the bubbling up of events through the DOM
// when an event happens on a particular elements, it bubbles up through its parents
// for instance, the event bubbles up to its parents

// Event delagation is almost the opposite of event bubbling
// its where we put the listeners on one of the parent elements and then we use logic inside the event handler to target the element that we actually want that 'click' for or whatever type of event it is.

// Objective: Put the event on the ul which is the parent of the li and then target the li that we want. Within each li you will see a link (<a> tag) that we are targeting and since they are all the same, we need to use event delagation

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function() {
//   console.log('card title');
// }); // grabbing the .card-title class and then adding an event listener of 'click' and have it log 'card title' which is the element that it is.

// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('card content')l;
// }); // this proves to you that it bubbles up to it's parent which is .card-content

// document.querySelector('.card').addEventListener('click', function() {
//   console.log('card');
// }); // this is the parent of .card-content

// document.querySelector('.col').addEventListener('click', function() {
//   console.log('col');
// });

// ^ everything up top are going to be fired up when clicking on the card title because it is the child node and it's going to bubble up the DOM and call each parent node.

// EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete item');
  // }

  if (e.target.parentElement.classList.contains('delete-item')){
    console.log('delete-item');
    e.target.parentElement.parentElement.remove();
  }
};

// The whole definition of event delagation in simple terms is just putting the listener on a parent of what you're looking and then putting a condition in here to find the target using e.target and then doing the functionality.

