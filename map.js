//1
const numbers=[1,2,3,4,5,6,7,8,9,10]; 
const doublenumbers=numbers.map(number=>number*2);
console.log(doublenumbers)
//2
const names=['vimal','mani','sathiya','priya'];
const uppernames=names.map(name=>name.toUpperCase());
console.log(uppernames);
//3
const fruits=['apple','banana','mango'];
const colors=['red','yellow','green']
const fruitswithcolors=fruits.map((fruit,index)=>fruit+"-"+colors[index])
console.log(fruitswithcolors);
//4
const users=[
    {name:'vimal',age:21},
    {name:'sathiya',age:19},
    {name:'jahir',age:20}
]
const extractusers=users.map(user=>{
    return{
        name:user.name,
        age:user.age+1
    }
});
console.log(extractusers);
//5
const students=['vimal','sathiya','jahir','surya'];
const allpositions=students.map(function(student,index,array){
    return{
        name:student,
        position:index,
        array:array
    }
})
console.log(allpositions);
//6
const digits=[1,2,3,4,5,6,7,8,9,10];
const filter=digits.map(digit=>digit%2===0);
console.log(filter)

//map creation examples

const userMap=new Map();
//add elements to the map
userMap.set("name","vimal");
userMap.set("city","arni");
userMap.set("age",20);
userMap.set("mobile",9698527121);

console.log(userMap);
// if you add same key value in the object, it will automaticaly update new value
userMap.set("age",22)
console.log(userMap);
//map size
console.log("map size :",userMap.size)
//delete key
userMap.delete("city")
console.log("after delete :",userMap)
//get value from object
console.log(userMap.get("name"))
//has it return the value of boolean
console.log(userMap.has("name"))
//iteration map using for...of
for( [key,value] of userMap){
    console.log(` ${key} =  ${value}`) 
}
//using key method
for( const key of userMap.keys()){
    console.log(key)
}
//using forEach()
userMap.forEach((key,value)=>{
    console.log(` ${key} =  ${value}`)
})

//relaion with array and object
const arr=
[
    ["key1","value1"],
    ["key2","value2"],
]

const myMap=new Map(arr);
console.log(myMap)
console.log(myMap.get("key1"))
// map object to array
console.log(Array.from(myMap))
//spread
console.log([...myMap]);
console.log(Array.from(myMap.keys()));
console.log(Array.from(myMap.values()));

//using nan as a map key
console.log(Number("vimal"))
const mymaps = new Map();
mymaps.set(NaN,"not a number");
console.log(mymaps.get(NaN))

// counting the frequency of words in a string
const sentence="fear leads to anger anger leads to hatred hatred leads to conflict"

const words=sentence.split(" ");
console.log(words);
const repeatedwords=new Map();

for (let word of words){
    if(repeatedwords.has(word)){
        repeatedwords.set(word, repeatedwords.get(word)+1)
    }
    else{
        repeatedwords.set(word,1)
    }
}
console.log(repeatedwords);

const people=[
    {name:"vimal",age:21},
    {name:"sathiya",age:20},
    {name:"kamal",age:20},
    {name:"jahir",age:21}
]

const peoplebyage=new Map();
for(let person of people){
    const age=person.age;
    if(peoplebyage.has(age)){
      peoplebyage.get(age).push(person);
    }
    else{
        peoplebyage.set(age,[person]);
    }
}
console.log(peoplebyage);