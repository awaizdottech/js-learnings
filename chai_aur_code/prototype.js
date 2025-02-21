let myHero = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`spidey power is ${this.spiderman}`);
  },
};

Object.prototype.awaiz = function () {
  console.log("awaiz is in all objects");
};

Array.prototype.heyAwaiz = function () {
  console.log("awaiz says hello");
};

heroPower.awaiz();
myHero.awaiz();
myHero.heyAwaiz();
heroPower.heyAwaiz(); // no access

// inheritance

const user = {
  name: "yo",
  email: "yo@yahoo",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "js asign",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher);
