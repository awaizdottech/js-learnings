// js behavior is prototypal behavior, which means js doesnt give up until it checks all the layers by moving up continously until it finds null
// new, this, classes all work because of prototypes

// const hi = () => console.log(this);
const hi = function () {
  console.log(this);
};
hi();
hi.power = 2;
// hi.prototype.power = 4; // not possible as hi is a arrow function that doesnt have the this context
hi.prototype; // empty

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  return this.score++;
};

const awaiz = new createUser("awaiz", 100); // the new keyword is what lets us use stuff we define via prototype
console.log(awaiz.increment());

/* notes copied from hc github

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
