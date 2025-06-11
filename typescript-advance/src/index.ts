interface user{
    name:string,
    age:number
}

function sum(User:user, User1:user){
    return User.age+User1.age;
}

let person=sum({name:"ayushmna", age:11}, {name:"ayush",age:13})
console.log(person)

interface people{
       name:string,
    age:number,
    email:string,
    password:string,
}

type people1=Pick<people,"name"|"password">

function update(user:people1){
    
}