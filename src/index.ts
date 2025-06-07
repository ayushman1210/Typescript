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



