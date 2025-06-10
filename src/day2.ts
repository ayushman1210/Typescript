function sum3( a:number , b:number):number{
    return (a+b)
}

sum3(2,3);

interface User{
    name:string,
    age:number,
    country:string,
    address?:Address
}
// interface can use another interfaces 
interface Address{
      // optional parameter ? this is 
        city:string,
        village?:string,
        pincode:number,
    }

interface office {
    address:Address
}
let user3 :User={
    name:"ayushman",
    age:19,
    country:"india",
    address:{
        city:"gonda",
        pincode:1210101,
    }
}

function legal(user3:User):boolean{
   if(user3.age>18) return true;
   else return false;
}

console.log(legal(user3));


interface Person{
    name:string,
    age:number,
    // greet:()=> string,
    greet2?:()=> string
}

let people:Person ={
    name:"ayushman",
    age:18,
    // greet:()=> "hello world"
}

// const ans =people.greet();
// console.log(ans);

class Manager implements Person{
    name:string;
    age:number;
    number:string;
    constructor (name:string ,age:number){
        this.name=name;
        this.age=age
        this.number="202932";
    }
}

let user4=new Manager("aysmsn",1)
console.log(user4);