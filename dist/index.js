"use strict";
//strongly typed language 
//compiled and if runtime error there it will throw error 
// typesafety 
// typescript compiler used to convert ts to js 
let x = 1;
console.log(x);
function first(name, age) { console.log(`hello +${name} will die on ${age}`); }
first("ayushman", 17);
function sum(a, b) { console.log(a + b); }
sum(3, 4);
let y = "ayushman"; // no error but never use 
y = 1;
console.log(y);
function second(age) {
    if (age > 18) {
        return true;
    }
    else
        return false;
}
console.log(second(19));
function third(cb) {
    setTimeout(cb, 1000);
}
third(function hey() { console.log(11); });
function call(cb1) {
    setTimeout(cb1, 1000);
}
call(function () { console.log("learning typescript "); });
let user1 = {
    name: "auisj",
    age: 12
};
let user = {
    name: "suhs",
    age: 12
};
console.log(user.name);
console.log(user1.age);
