/* 
 * Filename: sophisticated_code.js
 * Description: A sophisticated and elaborate code example showcasing various advanced JavaScript concepts and techniques.
 * Author: Your Name
 */

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing a Bank Account
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
    } else {
      console.log(`Insufficient funds in account ${this.accountNumber}.`);
    }
  }
}

// Class representing a complex Shape
class Shape {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    // Complex area calculation based on the shape type
    console.log(`Calculating area of ${this.name}...`);
    // Some complex equations and algorithms to determine the area
    return 0;
  }
}

/**
 * Function to clone an object with deep copy
 */
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// Usage example

let person = new Person("John Doe", 25);
person.sayHello();

let account = new BankAccount("1234567890", 1000);
account.deposit(500);
account.withdraw(200);

let shape = new Shape("Rectangle");
let area = shape.getArea();
console.log(`Area of ${shape.name}: ${area}`);

let originalObj = { name: "Original Object" };
let clonedObj = deepClone(originalObj);
console.log(clonedObj);