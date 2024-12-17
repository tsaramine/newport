const button = document.getElementById("button")
const ul = document.getElementById("ul")

button.addEventListener("click", ()=>{
amine();
})
function amine(){
    button.classList.toggle("is-active");
    ul.classList.toggle("is-active");
}
