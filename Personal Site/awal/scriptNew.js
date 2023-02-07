/*--------------------- klik menu ------------------------*/

const button = document.querySelector(".menu")
const mobile = document.querySelector(".mobile")

button.addEventListener("click",function(){
    mobile.classList.toggle("block")
    mobile.style.marginTop = "40px"
    mobile.previousElementSibling.classList.toggle("no-radius")
})

/*-------------------------- persentase ----------------------*/

const persens = document.querySelectorAll(".persen")
const bobots = document.querySelectorAll(".bobot")
const waves = document.querySelectorAll(".wave")
const bolas = document.querySelectorAll(".bola")

console.log(bolas)

persens.forEach(function(persen,i){
    bobots[i].style.height = parseInt(persen.textContent) + "%"
    persen.textContent = persen.textContent + "%"
})