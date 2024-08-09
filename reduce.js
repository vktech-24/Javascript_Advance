//Reduce() in Javascript
/* 
array.reduce((accumulator,currentvalue,currentindex,array){
},initialvalue);
*/

//1
let numbers=[1,2,3,4,5];
let totalnumbers=numbers.reduce((finalvalue,currentvalue)=>finalvalue+currentvalue);
console.log("Total Numbers:",totalnumbers);
//2
let digits=[[1,2],[3,4],[5,6]];
let flattering=digits.reduce((aftervalue,currentvalue)=>aftervalue.concat(currentvalue));
console.log(flattering);
//3
let number=[23,54,67,33,21]
let maxdigits=number.reduce((accumulator,currentvalue)=>{
    return Math.max(accumulator,currentvalue)
})
console.log(maxdigits)

let users=[
    {name:"vimal",age:20,city:"chennai"},
    {name:"sathiya",age:24,city:"cheyyar"},
    {name:"surya",age:21,city:"chennai"}];
let citywise=users.reduce((accumulator,currentvalue)=>{
    if(currentvalue.city in accumulator){
        accumulator[currentvalue.city].push(currentvalue)
    }else{
        accumulator[currentvalue.city]=[currentvalue];
    }
    return accumulator
},{})

console.log(citywise)