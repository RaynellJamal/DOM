// Header
var mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'New DOM Layout';
console.log(mainHeading);

mainHeading.classList.add("bg-success");

// Paragraphs
var para1 = document.getElementById('para1');
para1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';
console.log(para1);

var para2 = document.getElementById('para2');
para2.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page';
console.log(para2);

// Button
let btn = document.getElementById('btn');
let para4 = document.getElementById('para4');
para4.textContent = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.'

para4.style.display = 'none';

btn.onclick = function(){
   para4.style.display = '';
};


// Cards

// First box
let red = document.getElementById('red');
red.classList.remove('bg-white');

red.classList.add("bg-danger");

// Second box
let blue = document.getElementById('blue');
blue.classList.remove('bg-white');

blue.classList.add("bg-primary");

// Third box
let yellow = document.getElementById('yellow');
yellow.classList.remove('bg-white');

yellow.classList.add("bg-warning");

// Fourth box
let green = document.getElementById('green');
green.classList.remove('bg-white');

green.classList.add("bg-success");

// Fifth box
let black = document.getElementById('black');
black.classList.remove('bg-white');

black.classList.add("bg-dark");



















