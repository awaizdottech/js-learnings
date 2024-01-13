class User {
  constructor(username) {
    this.name = username;
  }
  greet() {
    console.log(`hi ${this.name}`);
    return this;
  }
  shop() {
    console.log(`${this.name} is shopping`);
  }
}
const me = new User("Awaiz");
me.greet().shop()

class Customer extends User {
  constructor(username, membership) {
    super(username);
    this.membership = membership;
  }
  static getMembershipCost() {
    return 500;
  }
}
const fahad = new Customer("Fahad", "Gold");

//set has no duplicate values and diff properties than array
const names = ["Awaiz", "Fahad", "Zeeshan", "Awaiz"]
const uniqueNames = [...new Set(names)]
console.log(uniqueNames);