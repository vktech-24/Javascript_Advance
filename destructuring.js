//Array Desturucturing
//Before ES6
 const numbers=[1,2,3,4,5];
 const one=numbers[0];
 const two=numbers[1];
 const rest=numbers.slice(2);
 console.log(one)
 console.log(two)
 console.log(rest)

 //After ES6

 const number=[1,2,3,4,5];
 const [first, second, ...remain]=number;
 console.log(first)
 console.log(second)
 console.log(remain)

 //Object Destructuring
 //Before ES6

const person={
    name:"vimal",
    age:20,
    gender:"male"
}

const name=person.name;
const age=person.age;
const gender=person.gender;

console.log(name)
console.log(age)
console.log(gender)

//After ES6

const user={
    fullname:"vimal",
    city:"chennai",
    state:"tamilnadu"
}

const {fullname, city, state}=user;
console.log(fullname);
console.log(city);
console.log(state);
 
// using default value with array destructuring

const digits=[1,2];
const [x,y,z=3]=digits;
console.log(x)
console.log(y)
console.log(z)

const me={
    tamil:"pass",
    eng:"pass", 
}

const { tamil, eng, maths ="fail" } = me;
console.log(tamil)
console.log(eng)
console.log(maths)

//swapping variables
//old method
/*let a=1;
let b=2;
let c;
 console.log(a);
 console.log(b);
c=a;
a=b;
b=c;
console.log(a);
console.log(b);
*/
//new method
/*
let a=10
let b=20
[a,b]=[b,a]
console.log(a);
console.log(b);
*/

//skipping unwanted  items with destructuring assignment
let myarray=[1,2,3,4,5]
let [initial,,,fourth]=myarray
console.log(initial,fourth)

let withspread=[1,2,3,4,5,6]
let [ondru,irandu, ...balance]=withspread;
console.log(ondru)
console.log(irandu)
console.log(balance)