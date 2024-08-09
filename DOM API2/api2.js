/* 
clonenode()
setintervl()
classlist.add()
classlist.remove()
classlist.toggle()
getattribute()
setattribute()
*/

//this for clonenode()
const h1=document.querySelector("h1")
h1.style.backgroundColor="red"
h1.style.color="white"  
h1.style.padding="10px"


let body=document.querySelector("body")
body.style.backgroundColor="green"

const cloneh1=h1.cloneNode(true)
body.appendChild(cloneh1)

//setintervel example
/*
function sayhello(){
   let clone=h1.cloneNode(true);
   body.appendChild(clone)
}

setInterval(sayhello,1000)
*/

//digital clock using setInterval

const clockdiv=document.querySelector(".clock");
clockdiv.style.fontSize="20px"

function clock(){
    const date=new Date()

    const time= date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    clockdiv.innerHTML=time;
}

setInterval(clock,1000)