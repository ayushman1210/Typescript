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
const obj:User2={
 name:"atush",
    age:25,
    country:"USA"
}

// on readonly method we can not assign any new value to the readonly variable

// record 

type user3={
  [key:string]:number;
}
type user4=Record<string,{age:number}>
let obj2:user4={
"ayush":{age:32}
}

const userMap = new Map<string, number>();

// Set values
userMap.set("ayush", 25);
userMap.set("john", 30);

// Get a value
console.log(userMap.get("ayush")); // Output: 25

// Delete a value
userMap.delete("john");

// Check if a key exists
console.log(userMap.has("john")); //


//exclude 
type Letters = "a" | "b" | "c";
type ExcludeB = Exclude<Letters, "b">; // "a" | "c"

let letter: ExcludeB = "a"; // OK
// letter = "b"; // ❌ Error: Type '"b"' is not assignable to type '"a" | "c"'
 
// zod 
import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

// TypeScript type inferred from the schema
type User = z.infer<typeof userSchema>;

const user: User = {
  name: "Ayushman",
  age: 22,
};