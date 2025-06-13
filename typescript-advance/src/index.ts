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
       name :string,
    age:number,
    email:string,
    password:string,
}

type people1=Pick<people,"name"|"password">
type updateoptional= Partial<people1>
function update(user:updateoptional){

}

/// readonly 
type User2={
  readonly  name:string,
age:number,
country:string
}
const obj={
 name:"atush",
    age:25,
    country:"USA"
}

// on readonly method we can not assign any new value to the readonly variable