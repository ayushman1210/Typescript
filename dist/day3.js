"use strict";
function getmax(num) {
    let maxi = -10000000;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > maxi) {
            maxi = num[i];
        }
    }
    return maxi;
}
getmax([1, 2, 3]);
let user9 = {
    name: "ayushman",
    password: "123567654",
    address: []
};
let user10 = {
    name: "ayushmna",
    lstname: "gupta",
    age: 18
};
let user11 = {
    name: "ayushmna",
    lstname: "upta",
    age: 12
};
let user12 = {
    name: "ayushmna",
    lstname: "guta",
    age: 19
};
let user13 = [user10, user11, user12];
function getAdultUsernames(users) {
    return users
        .filter(u => u.age >= 18)
        .map(u => u.name);
}
console.log(getAdultUsernames(user13));
