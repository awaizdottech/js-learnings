let variable1 = 'redefinable, supports hositing(declarations pushed to the top) and block scope'
const variable2 = 'supports hositing and block scope'
var variable3 = 're-decrable, redefinable ,supports hoisting, function scope and global scope'
let stringMethods = ['toUpperCase','toLowerCase','indexOf','lastIndexOf','includes','substring','slice','repeat','replace']
let template_stringLiteral = `here is  a way to include ${variable1} in string`
let arrayMethods = ['join','indexOf','concat','push','pop']
let numberToSTring = String(50)
let boolean = Boolean(100)
/* All numbers except 0 and all strings except empty string is true
a letter further in the alphabet and small case letters has greater value
number strings r converted to numbers at comparison
=== is for strict comparison*/

let functionExpression = function(){/* functions r hoisted with their implementations, but not function expressions */}
function fun(){}
let arrowFunction = ()=>{}
arrowFunction = hi=>console.log(hi)
let callBackFunction = arrayMethods.forEach(arrowFunction)
//function passed as an argument in another function

//methods are defined on an object whereas functions on their own. here fun is a function whereas forEach is a method

let objectLliteralNotation_class = {name:'Awaiz',company:'EdVenture Park'}
// cant use this keyword if a mthode is defined using arrow function
let arrayOfObjects = [{number:30},objectLliteralNotation_class]

// Math library
console.log(Math.round(Math.random()*100))

//DOM
let h1 = document.querySelector('h1') // similarly getElementbyId and getAttribute
let nodeList = document.querySelectorAll('p')
let nodeLIstMethods = ['forEach','keys','values']
let htmlCollection = document.getElementsByClassName('class') // similarly getElementByTagName also returns html collection
let htmlCollectionMethods = ['item','namedItem']
h1.innerText += ' by' // it can also be used to just view text
h1.innerHTML += ' <em>~ME<em>' // and this to view HTML
h1.setAttribute('class','class1 class2 class3') // alters or creates attributes
h1.style.color='turquoise' // just .style to view all styles and '' to delete that style
h1.classList.add('class4') // similarly remove to delete and toggle to switch class
let parents_children_siblings = ['children','parentElement','nextElementSibling','previousElementSibling'] //chainable

console.log()