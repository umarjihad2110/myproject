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

    // highlight the first number
    let element = newBoxes[0]
    let row = 1
    let column = 1
    addClassRowColumn(element,row,column)
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
        
        // get the row and column for class
        let row = box.classList.item(1)[0]
        let column = box.classList.item(1)[2]

        addClassRowColumn(box,row,column)
        
    })
})

// function arrow
document.addEventListener("keydown",function(el){
    let key = el.key

    let element
    let row
    let column

    for (let i = 0 ; i < newBoxes.length ; i++){
        if (newBoxes[i].classList.contains("click")){
            element = newBoxes[i]
            row = parseInt(element.classList.item(1)[0])
            column = parseInt(element.classList.item(1)[2]);
        }
    }

    if (key == "ArrowUp" && row > 1){
        row--;
    }

    else if (key == "ArrowDown" && row < 9){
        row++;
    }
    
    else if (key == "ArrowLeft" && column > 1){
        column--;
    }
    
    else if (key == "ArrowRight" && column < 9){
        column++;
    }
    
    for (let j = 0 ; j < newBoxes.length ; j++){
        if (newBoxes[j].classList.item(1)[0] == row && newBoxes[j].classList.item(1)[2] == column){
            element = newBoxes[j]
        }
    }

    if (element != undefined && row != undefined && column != undefined){
        addClassRowColumn(element,row,column)
    }
})

// add side-click class to row and column
function addClassRowColumn(element,row,column){

    // remove all the class
    for (let i = 0 ; i < newBoxes.length ; i++){
        newBoxes[i].classList.remove("click","side-click")
    }

    // add side class
    for (let i = 0 ; i < element.parentElement.children.length ; i++){
        element.parentElement.children[i].classList.add("side-click")
    }

    for (let i = 1 ; i <= 9 ; i++){
        for (let j = 1 ; j <= 9 ; j++){
            for (let k = 0 ; k < newBoxes.length ; k++){
                
                // check row, column, and same number
                let number = element.innerHTML 

                if (newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}` || (newBoxes[k].innerHTML == number && number != "")){
                    newBoxes[k].classList.add("side-click")
                    element.classList.remove("side-click")
                }
            }
        }
    }
    
    // add click class 
    element.classList.remove("side-click")
    element.classList.add("click")
}

// function check row, column, and same number
function checkRowColum(element,number,row,column,value=true){

    let siblings = element.parentElement.children
    for (let i = 0 ; i < siblings.length ; i++){
        if (siblings[i].innerHTML == number && number != "" && siblings[i] != element){
            siblings[i].classList.add("bg-red")
        }

        if (!value && siblings[i].classList.contains("bg-red")){
            siblings[i].classList.remove("bg-red")
        }
    }

    for (let i = 1 ; i <= 9 ; i++){
        for (let j = 1 ; j <= 9 ; j++){
            for (let k = 0 ; k < newBoxes.length ; k++){

                // check row, column, and same number
                if ((newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}`) && newBoxes[k].innerHTML == number && number != "" && newBoxes[k] != element){
                    newBoxes[k].classList.add("bg-red")
                
                }

                else if ((newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}`) && newBoxes[k].classList.contains("bg-red") && newBoxes[k].innerHTML != number && number != ""){
                    newBoxes[k].classList.remove("bg-red")
                
                }

                else if ((newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}`) && newBoxes[k].classList.contains("bg-red") && number == ""){
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
        //
        for (let i = 0 ; i < newBoxes.length ; i++){
            if (newBoxes[i].classList.contains("click") && randomNumbers.includes(i)){
                let element = newBoxes[i]
                let row = element.classList.item(1)[0]
                let column = element.classList.item(1)[2]

                eraseNumbers(element)
                checkRowColum(element,"",row,column,false)
                addClassRowColumn(element,row,column)
            }
        }
    }
})

erase.addEventListener("click",function(){
    for (let i = 0 ; i < newBoxes.length ; i++){
        if (newBoxes[i].classList.contains("click") && randomNumbers.includes(i)){
            let element = newBoxes[i]
            let row = element.classList.item(1)[0]
            let column = element.classList.item(1)[2]
            
            eraseNumbers(element)
            checkRowColum(element,"",row,column,false)
            addClassRowColumn(element,row,column)
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

// timer
var timerSec = null;
function sec(){
    let sec = 0;
    timerSec = setInterval(() => {
        sec++;
        if (sec == 60){
            sec = 0
        }
        if (sec < 10){
            second.innerHTML = `0${sec}`
        }
        else {
            second.innerHTML = `${sec}`
        }
    }, 1000);
}

var timerMin = null
function min(){
    let min = 0
    timerMin = setInterval(() => {
        min++;
        if (min == 60){
            min = 0
        }
        if (min < 10){
            minute.innerHTML = `0${min}`
        }
        else {
            minute.innerHTML =`${min}`
        }
    }, 60000);
}

var timerHour = null
function hours(){
    let hr = 0;
    timerHour = setInterval(() => {
        hr++;
        if (hr < 10){
            hour.innerHTML = `0${hr}`
        }
        else {
            hour.innerHTML = `${hr}`
        }
    }, 3600000);
}
