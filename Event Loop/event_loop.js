//Web APIs Is not in js engine is in web apis
/*
1.console
2.setTimeout
3.DOM APIs
4.fetch()
5.Local Storage
6.Location
*/

/*console.log("start")
setTimeout(function callback(){
    console.log("hello world");
},5000)

console.log("end")
*/

/*
console.log("start")
const button=document.getElementById("btn");

button.addEventListener("click",function callback(){
    console.log("hello world")
})

console.log("end")
*/

console.log("start");

setTimeout(function callbacktimer(){
    console.log("hello world")
},5000);
 
fetch("https://jsonplaceholder.typicode.com/posts").then(function callbackapi(){
    console.log("data from APIs");
})

console.log("end")