/*const catagories=document.getElementById("catagories");

catagories.addEventListener("click",function(e){
    //console.log(e.target)
    if(e.target.className=="products"){
       // console.log(e.target.id);
       window.location.href="/"+e.target.id;
    }
})
*/

const frm=document.getElementById("frm");

frm.addEventListener("keyup",(e)=>{

    console.log(e.target.value)
    e.target.value=e.target.value.toUpperCase();
   
})