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

/*---------------------- date ------------------------------*/

const date = document.querySelector(".date")

function dateNow(){
    let day = new Date().getDate()
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear() 

    if (month == 1){
        month = "Jan"
    }
    else if (month == 2){
        month = "Feb"
    }
    else if (month == 3){
        month = "Mar"
    }
    else if (month == 4){
        month = "Apr"
    }
    else if (month == 5){
        month = "May"
    }
    else if (month == 6){
        month = "Jun"
    }
    else if (month == 7){
        month = "Jul"
    }
    else if (month == 8){
        month = "Aug"
    }
    else if (month == 9){
        month = "Sep"
    }
    else if (month == 10){
        month = "Oct"
    }
    else if (month == 11){
        month = "Nov"
    }
    else if (month == 12){
        month = "Des"
    }

    date.innerHTML = `${month}-${day}-${year}`
}

dateNow()

const leftContent = document.querySelector(".left-content")

let dateNum = []
let dateDiv = []

for (let i = 0 ; i <= 3 ; i++){
    dateNum[i] = i + 27;
    // console.log(dateNum[i])
}

for (let i = 4 ; i <= 34 ; i++){
    dateNum[i] = i - 3;
    // console.log(dateNum[i])
}

for (let i = 0 ; i <= 34 ; i++){
    dateDiv[i] = document.createElement("div")

    dateDiv[i].innerHTML = `${dateNum[i]}`
    console.log(dateDiv[i].innerHTML)

    leftContent.appendChild(dateDiv[i])
}





