const arr = ["a", "b", "c"];
nums.map().filter();
for (const num of arr) console.log(num);
for (const key in arr) console.log(key);

const greeting = "hello";
for (const greet of greeting) console.log(greet);

const map = new Map();
map.set("long time no see", "hisashiburi");
map.set("sorry", "sumimasen");
map.set("thank you", "arigato");
for (const element of map) console.log(element);
for (const [key, value] of map) console.log(key, value);
for (const key in obj) console.log(obj[key]); //not possible as Maps arent iterable

const obj = { js: "javascript", py: "python" };
for (const key in obj) console.log(obj[key]);
for (const [key, value] of obj) console.log(key, value); // check if it works
