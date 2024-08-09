/*const para=document.getElementsByTagName("p");
const parant = para[0].parentNode;
console.log(parant)
parant.style.backgroundColor="red"
parant.style.padding="10px"

const head=document.getElementsByTagName("h1");
console.log(head)
const headparant=head[0].parentNode;
headparant.style.backgroundColor="blue"
headparant.style.color="white"

//FirstChild
const firstchild=parant.firstChild;
console.log(firstchild)

//lastchile
const lastchild=parant.lastChild;
console.log(lastchild)

//firstelementchild
const firstelementchild=parant.firstElementChild;
console.log(firstelementchild)

//lastelementchild
const lastelementchild=parant.lastElementChild;
console.log(lastelementchild)
*/

//sibling
/*
const para=document.getElementsByTagName("p")[0];
const head=document.getElementsByTagName("h1")[0];
console.log(para)
console.log(para.previousSibling)
console.log(para.previousElementSibling)
console.log(head.nextSibling)
console.log(head.nextElementSibling)
*/

//closest
const head=document.querySelector("h1");
console.log(head)
const section=head.closest("section");
console.log(section)
