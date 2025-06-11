function getmax(num:number[]){
    let maxi=-10000000;
    for(let i=0; i<num.length; i++){
        if(num[i]>maxi){
            maxi=num[i];
        }
    }
    return maxi;
}

getmax([1,2,3])

interface Address{
    city:string,
    pincode:number,
}
interface n{
    name:string,
    password:string,
    address:Address[],
}

let user9:n={
    name:"ayushman",
    password:"123567654",
    address:[]
}

interface o{
    name:string,
    lstname:string,
    age:number
}

let user10:o={
    name:"ayushmna",
    lstname:"gupta",
    age:18
}

let user11:o={
    name:"ayushmna",
    lstname:"upta",
    age:12
}

let user12:o={
    name:"ayushmna",
    lstname:"guta",
    age:19
}

let user13 = [user10, user11, user12];

function getAdultUsernames(users:o[]):string[] {
    return users
        .filter(u => u.age >= 18)
        .map(u => u.name);
}

console.log(getAdultUsernames(user13)); // Output: ["ayushmna"]

