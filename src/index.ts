//strongly typed language 
//compiled and if runtime error there it will throw error 
// typesafety 
// typescript compiler used to convert ts to js 
let x: number =1;
console.log(x);

function first(name:string, age:string | number){ console.log(`hello +${name} will die on ${age}`)}
first("ayushman",17);

function sum(a:number,b:number){    console.log(a+b)}
sum(3,4)

let y: any="ayushman";  // no error but never use 
y=1;
console.log(y);

function second(age:number){ 
if(age>18){return true;}
else return false;}

console.log(second(19));

function third(cb:Function){
setTimeout(cb,1000)}

third(function hey(){ console.log(11)});



function call(cb1: ()=> void){
    setTimeout(cb1,1000)
}

call(function(){console.log("learning typescript ")});

//interface
interface usertype{
    name:string,
    age:number
}
type usertype1={  // types make you do or and usage 
    name:string,
    age:number | number
}


let user2:usertype1={
name:"ayushman",
age:12
}

let user1:usertype={
    name:"auisj",
    age:12
}
let user: {
    name: string;
    age: number;
}={
name:"suhs",
age:12
}
console.log(user.name)
console.log(user1.age);
