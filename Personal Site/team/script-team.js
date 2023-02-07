/*--------------------- klik menu ------------------------*/

const button = document.querySelector(".menu")
const mobile = document.querySelector(".mobile")

button.addEventListener("click",function(){
    mobile.classList.toggle("block")
    mobile.style.marginTop = "40px"
    mobile.previousElementSibling.classList.toggle("no-radius")
})

/*---------------------- klik search -----------------------*/

const search = document.querySelector(".search")
const search_input = document.querySelector(".search-input")

search.addEventListener("click",function(){
    search_input.classList.toggle("block")
})

/*---------------------- label-input -----------------------*/

// const input = document.querySelectorAll(".input")
// const label = document.querySelectorAll("label")

// input.forEach(function(el,i){
//     el.addEventListener("focus",function(){
//         label[i].style.top = "-10px"
//         label[i].style.left = "20px"
//     })

//     el.addEventListener("focusout",function(){
//         if (el.value == ""){
//             label[i].style.top = "10px"
//             label[i].style.left = "10px"
//         }
//     })
// })