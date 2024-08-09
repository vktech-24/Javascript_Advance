/*
const grandparent=document.querySelector("#grandparent");
const parent=document.querySelector("#parent");
const child=document.querySelector("#child");

grandparent.addEventListener("click",function(){
    console.log("grandparent clicked")
})

parent.addEventListener("click",function(){
    console.log("parent clicked")
})

child.addEventListener("click",function(){
    console.log("child clicked")
})


grandparent.addEventListener("click",function(){
    console.log("grandparent clicked")
},true)

parent.addEventListener("click",function(){
    console.log("parent clicked")
},true)

child.addEventListener("click",function(){
    console.log("child clicked")
},true)
 */

const btnmodal=document.querySelector("#btn-modal");
const modal=document.querySelector("#modal");
const input=document.querySelector("#input");
const btnSubmit=document.querySelector("#btn-submit");
const modalcontent=document.querySelector("#modalcontent")
const close=document.querySelector("#close")


btnmodal.addEventListener("click",function(){
    modal.style.display="flex";
});

modal.addEventListener("click",function(){
    modal.style.display="none";
});

btnSubmit.addEventListener("click",function(e){
    e.stopPropagation();
    alert("submmited")
   console.log("sumit button pressed")
})

input.addEventListener("click",function(e){
    console.log("input clicked")
    e.stopPropagation();
})

modalcontent.addEventListener("click",function(e){
    e.stopPropagation();
})

close.addEventListener("click",function(){
    modal.style.display="none";
})