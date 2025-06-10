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
