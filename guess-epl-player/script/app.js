var out = console.log.bind(document)

const input = document.querySelector('.input-player')
const ul = document.querySelector("ul")
const li = document.querySelectorAll("li")

var txtValue;

const info = document.querySelectorAll(".info")

const nation = document.querySelectorAll(".nation .top img")
const club = document.querySelectorAll(".club .top img")
const pos = document.querySelectorAll(".pos .top")
const age = document.querySelectorAll(".age .top span")
const number = document.querySelectorAll(".number .top .num")

const arrowTopAge = document.querySelectorAll(".arrow-top-age")
const arrowBottomAge = document.querySelectorAll(".arrow-bottom-age")

const arrowTopNum = document.querySelectorAll(".arrow-top-num")
const arrowBottomNum = document.querySelectorAll(".arrow-bottom-num")

const showPlayer = document.querySelector(".show-player")

import { footballers } from "./footballers.js";

let random = Math.floor(Math.random()*(footballers.length)+0)

var guessPlayer = footballers[random]
// out(guessPlayer) 

var finish = false 

li.forEach(function(list,i){
    list.addEventListener("click",function(){
        input.value = li[i].innerHTML
        ul.style.display = "none"
        showInfo(li[i].innerHTML)
        input.value = ""
        index = 0
    })
})

let index = 0
input.addEventListener("keyup",function(el){
    var x = el.key
    var newList = []

    if (finish == false){   
        var filter = input.value.toUpperCase()

        if(input.value == ""){
            for (let i = 0 ; i < li.length ; i++){
                ul.style.display = "none"
                li[i].style.display = "none"
            }
        }
        else {
            for (let i = 0 ; i < li.length ; i++){
                txtValue = li[i].innerHTML;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    ul.style.display = "flex"
                    li[i].style.display = "block";
                    newList.push(li[i])
                } else {
                    li[i].style.display = "none";
                }
            }   
        }
    }
    
    if (x == "Enter"){
        var select = false
        newList.forEach(function(list,i){
            if (newList[i].classList.contains("selected")){
                input.value = newList[i].innerHTML
                showInfo(newList[i].innerHTML)
                select = true
            }
        })

        if (select == false){
            input.value = newList[0].innerHTML
            showInfo(newList[0].innerHTML)
        }

        ul.style.display = "none"
        input.value = ""
        index = 0
        
        newList.forEach(function(list,i){
            newList[i].classList.remove("selected")
        })

        newList = []
    }

    else if (x == "ArrowDown"){

        if (index == newList.length){
            index = 0
        }

        if (index == 0) {
            newList[newList.length - 1].classList.remove("selected")
        }

        else if (index > 0){
            newList[index - 1].classList.remove("selected")
        }

        newList[index].classList.add("selected")
        index++
    }

    else if (x == "ArrowUp"){
        if (index == 1){
            newList[0].classList.remove("selected")
            newList[newList.length - 1].classList.add("selected")
            index = newList.length + 1
        }
        else {
            newList[index - 1].classList.remove("selected")
            newList[index - 2].classList.add("selected")
        }
        index--
    }
})

let i = 6
let k = 1
input.placeholder = "guess 1 of 7"
function showInfo(player){
    for (let j = 0 ; j < footballers.length ; j++){
        if(player == footballers[j].name){
            let guess = footballers[j]

            // show the info of the player
            document.querySelectorAll(".info-header")[i].innerHTML = guess.name
            info[i].style.display = "flex"
            nation[i].setAttribute("src",`pic/${guess.nation}.png`)
            club[i].setAttribute('src',`pic/${guess.club}.png`)
            pos[i].innerHTML = guess.pos
            age[i].innerHTML = guess.age
            number[i].innerHTML = guess.number

            // show title of element
            nation[i].parentElement.title = guess.nation
            club[i].parentElement.title = guess.club

            // add animation
            down(nation[i].parentElement,club[i].parentElement,pos[i],age[i].parentElement,number[i].parentElement)

            // check the age
            if(guess.age > guessPlayer.age){
                arrowBottomAge[i].style.display = "inline"
                arrowTopAge[i].style.display = "none"
            }
            else if (guessPlayer.age == guess.age){
                age[i].parentElement.style.backgroundColor = "lime"
                age[i].style.margin = "0"
                arrowBottomAge[i].style.display = "none"
                arrowTopAge[i].style.display = "none"
            }
            else if (guess.age < guessPlayer.age){
                arrowTopAge[i].style.display = "inline"
                arrowBottomAge[i].style.display = "none"
            }

            // check the number
            if(guess.number > guessPlayer.number){
                arrowBottomNum[i].style.display = "inline"
                arrowTopNum[i].style.display = "none"
            }
            else if (guessPlayer.number == guess.number){
                number[i].parentElement.style.backgroundColor = "lime"
                document.querySelectorAll('.tag')[i].style.margin = '0'
                arrowBottomNum[i].style.display = "none"
                arrowTopNum[i].style.display = "none"
            }
            else if (guess.number < guessPlayer.number) {
                arrowTopNum[i].style.display = "inline"
                arrowBottomNum[i].style.display = "none"
            }

            // check the nation
            if (guessPlayer.nation == guess.nation){
                nation[i].parentElement.style.backgroundColor = "lime"
            }

            // check the club
            if (guessPlayer.club == guess.club){
                club[i].parentElement.style.backgroundColor = "lime"
            }

            // check the position
            if (guessPlayer.pos == guess.pos){
                pos[i].style.backgroundColor = "lime"
            }

            // check the name
            if (guessPlayer.name == guess.name){
                setTimeout(() => {
                    showPlayer.style.display = "flex"
                    showPlayer.getElementsByClassName("player-name")[0].innerHTML = guessPlayer.name  
                    finish = true      
                }, 700);
            }
        }
    }
    i--
    k++
    if (i == -1){
        k = 7
        setTimeout(() => {
            showPlayer.style.display = "flex"
            showPlayer.getElementsByClassName("player-name")[0].innerHTML = guessPlayer.name
            input.placeholder = `guess ${k} of 7`
            finish = true
        }, 700);
    }
    input.placeholder = `guess ${k} of 7`
}

function down(nation,club,pos,age,number){
    nation.classList.add("down")
    club.classList.add("down")
    pos.classList.add("down")
    age.classList.add("down")
    number.classList.add("down")
    index = 0
}


