// primitive datatypes (uses stack memory) - call by value (copies of original value are created for other variables): number, string, boolean,
typeof undefined; // is undefined
typeof null; // is object
typeof Symbol(123);
typeof 1234567891623456n; // is bigInt

// equality check (==,===) & comparison operations (<,...) work differently

// non-primitive datatypes (uses heap memory) - call by reference(value is not copied irrespective of variables using it): array, obj & functions. all of thier data type is object except for function that shows function
typeof function nice(params) {}; // is function

// strings
const str = "hi";
str.__proto__;

const num = 100;
num.toFixed(2);
num.toPrecision(2); // dangerous method

Math.min([2, 6, 4, 8]);
Math.random() * 10 + 1; // +1 because random gives number between 0-1 that can also be 0.0x, so to get numbers between 1-10 we add 1
const min = 10;
const max = 20;
Math.floor(Math.random() * (max - min + 1)) + min;

const myDate = new Date(2024, 0, 5, 3);
const myDate2 = new Date("1-1-2024");
myDate.getTime();
Date.now();
// be careful while handling months as they at times start from 0

const arr = [1, 2, 3, 4, 5, 6];
arr.unshift();
arr.shift();
arr.includes();
arr.indexOf();
const newarr = arr.splice(0, 2); // this gets elements from 0 to 2 including 2 (unlike slice) & also changes the original array
const anotherArray = [1, 2, 3, [4, 5, 6, [, 7, 8, 9]]];
anotherArray.flat(Infinity);
Array.isArray("nice");
Array.from("nice");
Array.from({ yo: "nice" });
Array.of(min, max);
const what = [...arr, ...newarr]; // similarly we can concatenate as many arrays as needed. object concatenation works exactly same

// objects declared with constructor becomes singleton, not in literal format
Object.create;
const mysym = Symbol("key1");
const user = {
  [mysym]: "mykey1",
}; // this is literal
typeof user[mysym];
user.fun = function () {
  console.log(`nice ${this[mysym]}`);
};
user.hasOwnProperty("mysym");
Object.entries(user); // keys, values
Object.freeze(user); // this makes objects immutable but wont give any error when we try to mutate it
({ mysym: wtf } = user);

nice(); // is hoisted
function nice(a = "b", ...c) {
  console.log(a, c);
}
bad(); // function expressions (below) are not hoisted
const bad = function () {
  what = 1;
  console.log(this); // lot of stuff in here, which is what not available in arrow function
  console.log(this.what); // error
};
console.log(this); // in node its empty but in browser its the window object
const add = (n, m) => ({ n: m }); // no need to write return, this is called implicit return

// immediately invoked function expressions -IIFE: used to avoid pollution from global scope & its variables
((yo) => {
  console.log(yo);
})("hi"); // without this seim colon another iife wont run after this

Boolean([]); //true, similarly {} & functions

// Nullish Coalescing operator ?? null undefined
const yo = null ?? 10; // will be 10
const i = null ?? 10 ?? 20; // will be 10
