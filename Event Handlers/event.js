/*
event handlers
 inline event listeners
 inline properties 
 event listeners
*/


const vimal=document.querySelector(".event");

/*types of event

1.Mouse
 click
 dbclick
 mousedown
 mouseout
 mouseup
 mouseover
*/

//dbclick
vimal.addEventListener("dbclick",function(){
    alert("you are doubleclicked")
});
//mousedown
vimal.addEventListener("mousedown",function(){
    this.style.backgroundColor="Red";
})
//mouseout
vimal.addEventListener("mouseout",function(){
    this.style.backgroundColor="Yellow";
})
//mouseup
vimal.addEventListener("mouseup",function(){
    this.style.backgroundColor="Blue";
})
//mouseover
vimal.addEventListener("mouseover",function(){
    this.style.backgroundColor="Orange";
})