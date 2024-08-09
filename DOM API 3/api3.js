//classlist.add();
//classlist.remove();
//classlist.toggle();
//getattribute();
//setattribute();
/*
const btnAdd=document.querySelector("#btnadd")
const btnRemove=document.querySelector("#btnremove")
const btnToggle=document.querySelector("#btntoggle")
const box=document.querySelector(".box");

btnAdd.addEventListener("click",function(){
    box.classList.add("new-color")
})

btnRemove.addEventListener("click",function(){
 box.classList.remove("new-color")
})

btnToggle.addEventListener("click",function(){
    box.classList.toggle("new-color")
})
*/

const input=document.querySelector("input");
const btnclick=document.querySelector("#btnclick")

btnclick.addEventListener("click",function(){
    const getatt=input.getAttribute("type")
   if(getatt == "text"){
    input.setAttribute("type", "password")
   }else{
    input.setAttribute("type", "text")
   }
})

/*
hasAttribute()
getAttributename()
removeAttribute()
*/
//1
console.log(input.hasAttribute("id"))
//2
let list=input.getAttributeNames();
console.log(list)
//3
input.removeAttribute("type")
console.log(input.hasAttribute("type"))