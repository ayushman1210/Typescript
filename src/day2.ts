function sum3( a:number , b:number):number{
    return (a+b)
}

sum3(2,3);

interface User{
    name:string,
    age:number,
    country:string,
    address?:{
        city:string,
        pincode:number,
    }
}

let user3 :User={
    name:"ayushman",
    age:19,
    country:"india",
    // address:{
    //     city:"gonda",
    //     pincode:1210101,
    // }
}

function legal(user3:User):boolean{
   if(user3.age>18) return true;
   else return false;
}

console.log(legal(user3));