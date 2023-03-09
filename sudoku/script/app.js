var out = console.log.bind(document)

const bigBox = document.querySelectorAll(".big-box");
const box = document.querySelectorAll(".box")

const numbers = document.querySelectorAll(".number")
const erase = document.querySelector(".erase")

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

    // hide numbers
    hideNumbers()
})

// function put numbers into grid
import { numbersTemplate } from "./numbers-template.js"

let newBoxes = []
function numberToGrid(){

    let random = Math.floor(Math.random()*2)

    // new array of boxes
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

// function hide numbers
let gridNumbers = []
let randomNumbers = []
function hideNumbers(){
    for (let i = 0 ; i < newBoxes.length ; i++){
        gridNumbers.push(i) 
    }

    for (let i = 0 ; i < 45 ; i++){
        gridNumbers = shuffle(gridNumbers)
        randomNumbers.push(gridNumbers[gridNumbers.length - 1])
        gridNumbers.pop()
    }

    for (let i = 0 ; i < 45 ; i++){
        newBoxes[randomNumbers[i]].innerHTML = ""
    }
}

// click grid
box.forEach(function(box){
    box.addEventListener("click",function(){

        // remove all the class
        for (let i = 0 ; i < newBoxes.length ; i++){
            newBoxes[i].classList.remove("click","side-click")
        }

        // add side class
        for (let i = 0 ; i < box.parentElement.children.length ; i++){
            box.parentElement.children[i].classList.add("side-click")
        }

        // get the row and column fro class
        let row = box.classList.item(1)[0]
        let column = box.classList.item(1)[2]

        // add side class for rows and columns
        for (let i = 1 ; i <= 9 ; i++){
            for (let j = 1 ; j <= 9 ; j++){
                for (let k = 0 ; k < newBoxes.length ; k++){
                    if (newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}`){
                        newBoxes[k].classList.add("side-click")
                    }
                }
            }
        }
        
        // add click class 
        box.classList.remove("side-click")
        box.classList.add("click")
    })
})

// enter number
document.addEventListener("keyup",function(el){
    let key = parseInt(el.key)
    if (arrNumbers.includes(key)){
        enterNumber(key)
    }
})

numbers.forEach(function(number){
    number.addEventListener("click",function(){
        let key = parseInt(number.innerHTML)
        enterNumber(key)
    })
})

// function enter number
function enterNumber(number){
    for (let i = 0 ; i < newBoxes.length ; i++){
        if (newBoxes[i].classList.contains("click") && randomNumbers.includes(i)){
            newBoxes[i].innerHTML = number
        }
    }
}

// erase number
erase.addEventListener("click",function(){
    for (let i = 0 ; i < newBoxes.length ; i++){
        if (newBoxes[i].classList.contains("click") && randomNumbers.includes(i)){
            newBoxes[i].innerHTML = ""
        }
    }
})

// shuffle array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);

    return array
}
