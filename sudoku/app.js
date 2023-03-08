var out = console.log.bind(document)

const bigBox = document.querySelectorAll(".big-box");
const box = document.querySelectorAll(".box")

const numbers = document.querySelectorAll(".number")

let arrNumbers = [1,2,3,4,5,6,7,8,9]

// load window
window.addEventListener("load",function(){
    document.querySelector(".new-game").style.height = `${document.querySelector(".erase").clientHeight}px`

    let height = `${document.querySelector(".new-game").clientHeight}px`
    document.querySelector(".new-game").style.lineHeight = height

    numbers.forEach(function(number){
        number.style.height = `${number.clientWidth}px`
        number.style.lineHeight = `${number.clientWidth}px`
    })

    // put number into grid
    numberToGrid()
})

// function put numbers into grid
import { numbersTemplate } from "./numbers-template.js"

function numberToGrid(){

    let random = Math.floor(Math.random()*2)
    out(numbersTemplate[random])

    // new array of boxes
    let newBoxes = []
    for (let j = 1 ; j <= 9 ; j++){
        for (let k = 1 ; k <= 9 ; k++){
            for (let i = 0 ; i < box.length ; i++){
                if (box[i].classList.contains(`${j}-${k}`)){
                    newBoxes.push(box[i])
                }
            }
        }
    }

    // input the numbers to grid
    for (let i = 0 ; i < newBoxes.length ; i++){
        newBoxes[i].innerHTML = numbersTemplate[random][i] 
    }
}

function checkRow(){
    for (let i = 0 ; i < 9 ; i++){

    }
}

// shuffle array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);

    return array
}
