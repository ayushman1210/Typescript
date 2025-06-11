"use strict";
function sum3(a, b) {
    return (a + b);
}
sum3(2, 3);
let user3 = {
    name: "ayushman",
    age: 19,
    country: "india",
    address: {
        city: "gonda",
        pincode: 1210101,
    }
};
function legal(user3) {
    if (user3.age > 18)
        return true;
    else
        return false;
}
console.log(legal(user3));
let people = {
    name: "ayushman",
    age: 18,
    // greet:()=> "hello world"
};
// const ans =people.greet();
// console.log(ans);
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.number = "202932";
    }
}
let user4 = new Manager("aysmsn", 1);
console.log(user4);
class User5 {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("hello");
    }
}
// we can write default function in the absteract class but not in the interfaces 
class Employee extends User5 {
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hi" + this.name;
    }
}
let p = {
    name: "ayushmna",
    startDate: new Date()
};
let m = {
    name: "ayush",
    department: "It"
};
let q = {
    name: "ayushman",
    startDate: new Date(),
    department: "go"
};
let user8 = {
    name: "ayusman",
    password: "1231313",
    enter: new Date()
};
