/*localStorage.setItem("Name","Vimal")
localStorage.setItem("Age",21)
localStorage.setItem("Address","No 13")
localStorage.setItem("City","Chennai")

const Name=localStorage.getItem("Name")

localStorage.removeItem("Name")
localStorage.clear()

*/

const button=document.getElementById("toggle-button");

function toggleTheme(){
    const banner=document.getElementById("banner");
    banner.classList.toggle("dark")

    const isDarkTheme=banner.classList.contains("dark");

    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

button.addEventListener("click",toggleTheme);

window.addEventListener("DOMContentLoaded", function(){
    const theme=this.localStorage.getItem("theme");
    if(theme === "dark"){
        const banner=document.getElementById("banner");
        banner.classList.add("dark")
    }
})


