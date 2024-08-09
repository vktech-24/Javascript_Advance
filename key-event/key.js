/*
2.Keyboard
 keydown
 keypress
 keyup
 key
 code


document.addEventListener("keydown",keyevent);
document.addEventListener("keypress",keyevent);
document.addEventListener("keyup",keyevent);

function keyevent(event){
    const eventType=event.type; 
    const keyCode=event.code;
    const keyName=event.key;
    console.log(`Event Type: ${eventType}`);
    console.log(`Key Code: ${keyCode}}`);
    console.log(`Key Name: ${keyName}`);
}
*/

const input=document.getElementById("Input-value");
const msg=document.getElementById("error")

input.addEventListener("keydown",function(event){
    const key=event.key;
    console.log(key)
    if(isNaN(key)){
      msg.innerText="please enter a number only"
    }else{
        msg.innerText=""
    }
})