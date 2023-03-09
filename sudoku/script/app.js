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
let newNumbersTemplate = numbersTemplate

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

    newNumbersTemplate = newNumbersTemplate[random]
    out(newNumbersTemplate)

    // input the numbers to grid
    for (let i = 0 ; i < newBoxes.length ; i++){
        newBoxes[i].innerHTML = newNumbersTemplate[i] 
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

        addClassRowColumn(box,row,column)
        
        // add click class 
        box.classList.remove("side-click")
        box.classList.add("click")
    })
})

// add side-click class to row and column
function addClassRowColumn(element,row,column){
    for (let i = 1 ; i <= 9 ; i++){
        for (let j = 1 ; j <= 9 ; j++){
            for (let k = 0 ; k < newBoxes.length ; k++){

                // check row, column, and same number
                let number = element.innerHTML 

                if (newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}` || (newBoxes[k].innerHTML == number && number != "")){
                    newBoxes[k].classList.add("side-click")
                    element.classList.remove("side-click")
                }

                else {
                    newBoxes[k].classList.remove("side-click")
                }
            }
        }
    }
}

// function check row, column, and same number
function checkRowColum(element,number,row,column,value=true){

    let siblings = element.parentElement.children
    for (let i = 0 ; i < siblings.length ; i++){
        if (siblings[i].innerHTML == number && siblings[i] != element){
            siblings[i].classList.add("bg-red")
        }

        if (value == false && siblings[i].classList.contains("bg-red")){
            siblings[i].classList.remove("bg-red")
        }
    }

    for (let i = 1 ; i <= 9 ; i++){
        for (let j = 1 ; j <= 9 ; j++){
            for (let k = 0 ; k < newBoxes.length ; k++){

                // check row, column, and same number
                if ((newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}`) && newBoxes[k].innerHTML == number && newBoxes[k] != element){
                    newBoxes[k].classList.add("bg-red")
                }

                else if ((newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}`) && newBoxes[k].classList.contains("bg-red") && newBoxes[k].innerHTML != number){
                    newBoxes[k].classList.remove("bg-red")
                }
            }
        }
    }
}

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

            
            let index = i
            
            let element = newBoxes[i]
            let row = newBoxes[i].classList.item(1)[0] 
            let column = newBoxes[i].classList.item(1)[2]
            
            
            // number is wrong
            if (number != newNumbersTemplate[index]){
                newBoxes[index].classList.add("color-red")

                checkRowColum(element,number,row,column)
            }
            
            // number is true
            else {
                newBoxes[index].classList.add("color-blue")
                newBoxes[index].classList.remove("color-red","bg-red")
                
                checkRowColum(element,number,row,column,false)
            }

            addClassRowColumn(element,row,column)
        }
    }
}

// erase number
document.addEventListener("keyup",function(el){
    let click = el.key;
    if (click == "Backspace"){
        // out("hai")
        for (let i = 0 ; i < newBoxes.length ; i++){
            if (newBoxes[i].classList.contains("click") && randomNumbers.includes(i)){
                let element = newBoxes[i]
                eraseNumbers(element)
            }
        }
    }
})

erase.addEventListener("click",function(){
    for (let i = 0 ; i < newBoxes.length ; i++){
        if (newBoxes[i].classList.contains("click") && randomNumbers.includes(i)){
            let element = newBoxes[i]
            eraseNumbers(element)
        }
    }
})

// function erase
function eraseNumbers(element){
    element.innerHTML = ""
}

// shuffle array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);

    return array
}
