/*--------------------- klik menu ------------------------*/

const button = document.querySelector(".menu")
const mobile = document.querySelector(".mobile")

button.addEventListener("click",function(){
    mobile.classList.toggle("block")
    mobile.style.marginTop = "40px"
    mobile.previousElementSibling.classList.toggle("no-radius")
})

/*--------------------- klik nav bar ------------------------*/

const line = document.querySelector(".line")
const items = document.querySelectorAll(".item")
const box = document.querySelector(".box")
const dashboard = document.querySelector(".dashboard")
const project = document.querySelector(".project")
const team = document.querySelector(".team")
const schedule = document.querySelector(".schedule")
const judul = document.querySelector("title")
console.log(document.title)

items.forEach(function(item,i){
    item.addEventListener("click",function(){
        box.classList.remove("animate")
        box.style.marginLeft = ((30 + item.clientWidth) * i) + "px"
        box.classList.add("animate")
        if(item.textContent == "Dashboard"){

            dashboard.classList.remove("hidden")
            dashboard.classList.add("show-flex")

            project.classList.remove("show-flex")
            project.classList.add("hidden")

            team.classList.remove("show-flex")
            team.classList.add("hidden")
            judul.innerHTML = "Personal Site of Umar Jihad"
        }
        else if (item.textContent == "Projects"){

            dashboard.classList.remove("show-flex")
            dashboard.classList.add("hidden")

            project.classList.remove("hidden")
            project.classList.add("show-flex")

            team.classList.remove("show-flex")
            team.classList.add("hidden")

            judul.innerHTML = "Umar | Projects"
        }
        else if (item.textContent == "Team"){

            dashboard.classList.remove("show-flex")
            dashboard.classList.add("hidden")

            project.classList.remove("show-flex")
            project.classList.add("hidden")

            team.classList.remove("hidden")
            team.classList.add("show-flex")

            judul.innerHTML = "Umar | Team"
        }
        else{

            dashboard.classList.remove("show-flex")
            dashboard.classList.add("hidden")

            project.classList.remove("show-flex")
            project.classList.add("hidden")

            team.classList.remove("show-flex")
            team.classList.add("hidden")

            judul.innerHTML = "Umar | Schedule"
        }
    })
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



