// Section 3: DOM Manipulation & Events

// Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// The difference
// Mouseevent
// card.addEventListener('mouseenter', runEvent);
// // Mouseleave
// card.addEventListener('mouseleave', runEvent);
// // this will fire off when you go inside/outside of an element within another element
// // Mouseover
// card.addEventListener('mouseover', runEvent);
// // Mouseout
// card.addEventListener('mouseout', runEvent);
// Mouse Move
card.addEventListener('mousemove', runEvent); // any movement within the element. good for games and interative things

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`; // these gives you exact cordinates like showing you where your characters exactly are in the game.

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`; // you are adding some styling to the body of your document/html and setting it equal to an rgb that changes are your move your mouse around; each cordinate setting a different color for the body.
}