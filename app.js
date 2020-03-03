// Section 3: DOM Manipulation & Events

// Keyboard & Input Events
// it's important to mention that if you have a big application with a lot of forms, you want to be more specific than just forms; use the id of the class or something.
// in this case, we only have just one form
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = ''; // you usually want this to run after you submit a form because it clears out whatever you've initially put in the form.

// form.addEventListener('submit', runEvent);

// // Keydown
// taskInput.addEventListener('keydown', runEvent); // fires off when key goes down and logs it
// // Keyup
// taskInput.addEventListener('keyup', runEvent); // fires off when your lift your key up
// // Keypress
// taskInput.addEventListener('keypress', runEvent); // as soon as your press your key, it fires off
// Focus
// taskInput.addEventListener('focus', runEvent); // when you click inside of like... a form and you focus on that and start typing or something.
// // Blur
// taskInput.addEventListener('blur', runEvent); // when you click on the outside of it. opposite of focus
// // Cut
// taskInput.addEventListener('cut', runEvent); // cut something and it fires off the event
// // Paste
// taskInput.addEventListener('paste', runEvent); // paste something and it fires off the event
// // Input
// taskInput.addEventListener('input', runEvent); // anything we do with this input, it's going to fire off
// Change
select.addEventListener('change', runEvent); // fires a event type change each time something is triggered


function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value); // target is the element that the event happens on.
  // value is whatever we're typing in

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value); // and usually when you submit a form, you want to get the input field/get the values

  e.preventDefault(); // remember that we do this to prevent redirection from happening and usually when you use a submit on an addEventListener, you're going to want to use preventDefault
};