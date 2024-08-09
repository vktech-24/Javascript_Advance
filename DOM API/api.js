/*
createElement
appendChild
insertBefore
removeChild
remove
cloneNode
*/

let para=document.createElement("p");
para.innerText="hi this  is sample"
para.style.color="red"
para.style.fontSize="30px"
const body=document.querySelector("body");
body.appendChild(para)

const  h1=document.createElement("h1");
h1.innerHTML="hi this is sample heading"
h1.style.color="blue"
body.insertBefore(h1,para)


const removebtn=document.querySelectorAll(".btnremove");
removebtn.forEach((btn) => {
    btn.addEventListener("click", function(){
        const tr=this.parentNode.parentNode;
       //tr.remove();
       const td=tr.childNodes[5];
       console.log(td)
       tr.removeChild(td);
    })
});