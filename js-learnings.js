let variable1 =
  "redefinable, block scope, function scope and global scope, use olny when cant use const";
const variable2 =
  "block scope, function scope and global scope, use ad default";
var variable3 =
  "re-decrable, redefinable ,supports hoisting(not advised), function scope and global scope, use when supporting old browsers";
let stringMethods = [
  "toUpperCase",
  "toLowerCase",
  "indexOf",
  "lastIndexOf",
  "includes",
  "substring",
  "slice",
  "repeat",
  "replace",
];
let template_stringLiteral = `here is  a way to include ${variable1} in string`;
let arrayMethods = ["join", "indexOf", "concat", "push", "pop"];
let numberToSTring = String(50);
let boolean = Boolean(100);
/* All numbers except 0 and all strings except empty string is true
a letter further in the alphabet and small case letters has greater value
number strings r converted to numbers at comparison
=== is for strict comparison*/

hi = 5;
hi = 10;
console.log(5);

let functionExpression = function () {
  /* functions r hoisted with their implementations, but not function expressions */
};
function fun() {}
let arrowFunction = () => {};
arrowFunction = (hi) => console.log(hi);
let callBackFunction = arrayMethods.forEach(arrowFunction);
//function passed as an argument in another function

//methods are defined on an object whereas functions on their own. here fun is a function whereas forEach is a method

let objectLliteralNotation_class = { name: "Awaiz", company: "EdVenture Park" };
// cant use 'this' keyword if a method is defined using arrow function
let arrayOfObjects = [{ number: 30 }, objectLliteralNotation_class];

// Math library
console.log(Math.round(Math.random() * 100));

//DOM
let h1 = document.querySelector("h1"); // similarly getElementbyId and getAttribute
let nodeList = document.querySelectorAll("p");
let nodeLIstMethods = ["forEach", "keys", "values"];
let htmlCollection = document.getElementsByClassName("class"); // similarly getElementByTagName also returns html collection
let htmlCollectionMethods = ["item", "namedItem"];
Array.from(htmlCollection); //converting to array
h1.innerText += " by"; // it can also be used to just view text thats not hidden by any css. For hidden content we use textContent
h1.innerHTML += " <em>~ME<em>"; // and this to view HTML, textContent works similar to textContent
h1.setAttribute("class", "class1 class2 class3"); // alters or creates attributes
h1.style.color = "turquoise"; // just .style to view all styles and '' to delete that style
h1.classList.add("class4"); // similarly remove to delete and toggle to switch class
let parents_children_siblings = [
  "children",
  "parentElement",
  "nextElementSibling",
  "previousElementSibling",
]; //chainable

console.table(objectLliteralNotation_class);

const list = document.querySelector("ul"); //this is event delegation i.e attaching eventlistener to parent to attach the eventlistener to the new generated elements as well
list.addEventListener("click", (e) => {
  //any action on web page is an event
  console.log(e.target); //gives element clicked
  if (e.target.tagName == "LI") {
    let li = document.createElement("li");
    li.innerText = "generated by js";
    e.stopPropagation(); //stops event bubbling
    list.append(li);
  }
});

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  //note that eventlistener is attached to form not submit button
  e.preventDefault(); //to stop refreshing the page which is the default behaviour of submit button
  console.log(form.name.value);
});
