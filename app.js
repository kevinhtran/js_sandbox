// Section 3: DOM Manipulation & Events

// Traversing the DOM
// Traverse = move up and down
// Dealing with parents and children of specific nodes or whatever it is that we select

let val;

const list = document.querySelector('ul.collection') 

const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes of the ul
// this gives us a node list of all of the child nodes
// not just elements
val = list.childNodes;
val = list.childNode[0]; // get the first node
val = list.childNodes[0].nodeName; // get the first node's nodeName
val = list.childNodes[0].nodeType; // get the first node's nodeType

// These numbers pertain to what type of nodes these are
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
// this returns an HTML collection
// gives us just by the element
// you use children more than child, if anything.
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
val = list.children[3].children[0];
val = list.children[3].children[0].id = 'test-link'; // this will add the id for you.

// First child property
val = list.firstChild;
val = list.firstElementChild;

// Last child property
val = list.lastChild;
val = list.lastElementChild;

// Count child elements property
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val  = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.previousElementSibling; // traversing up and down

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);