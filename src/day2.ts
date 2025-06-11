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

abstract class User5{
    name:string ;
    constructor(name: string){
        this.name=name;
    }

    abstract greet (): string ;
    hello(){
        console.log("hello")
    }
}
// we can write default function in the absteract class but not in the interfaces 
class Employee extends User5{
    name:string;
constructor(name:string){
    super(name)
    this.name=name;
}
greet(){
    return "hi"+this.name;
}
}
// this is the way to define type 
// type let you to do  union and intersection 
type User6={
name:string;
startDate:Date;
}

type User7={
    name:string;
    department:string;
};

type Lead= User6 & User7

let p:User6={
    name:"ayushmna",
    startDate: new Date()
}

let m:User7={
    name:"ayush",
    department:"It"
}

let q:Lead={
    name:"ayushman",
    startDate:new Date(),
    department:"go"
}

type Admin={
    name:String,
    password:string,
    enter:Date
}

type citizen={
name:string,
password:string,
enter:Date,
}

type register= citizen & Admin;

let user8:register={
    name:"ayusman",
    password:"1231313",
    enter:new Date()
}

