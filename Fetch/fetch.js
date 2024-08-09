const outputText=document.querySelector("#txt-output");
const btnText=document.querySelector("#btn-text");

btnText.addEventListener("click",getTextFile);

function getTextFile(){
    fetch("text.txt").then((res)=>res.text()).then((data)=>{
        outputText.innerHTML= data;
    })
}

//---------------------------------------------------------

const outputJson=document.querySelector("#json-output");
const btnJson=document.querySelector("#btn-json");

btnJson.addEventListener("click",getJsonData);

function getJsonData(){
    fetch("users.json").then((res)=>res.json()).then((users)=>{
       let data="<ul>"
       users.forEach((user) => {
        data += `<li>${user.name} : ${user.age}</li>`
       });
       
       data += "</ul>";
       outputJson.innerHTML=data;
    })
}

//------------------------------------------------------------

const outputApi=document.querySelector("#api-output");
const btnApi=document.querySelector("#btn-api");

btnApi.addEventListener("click",getApiData);

async function getApiData(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData=await response.json();
    let output="";
    jsonData.forEach((post)=>{
        output+=`<div class='post' >
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        </div>`
    });
    outputApi.innerHTML=output;
}