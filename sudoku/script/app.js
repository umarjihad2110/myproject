var out = console.log.bind(document)

const bigBox = document.querySelectorAll(".big-box");
const box = document.querySelectorAll(".box")

const numbers = document.querySelectorAll(".number")
const erase = document.querySelector(".erase")

let arrNumbers = [1,2,3,4,5,6,7,8,9]

// load window
window.addEventListener("load",function(){

    // set display
    document.querySelector(".new-game").style.height = `${document.querySelector(".erase").clientHeight}px`

    let height = `${document.querySelector(".new-game").clientHeight}px`
    document.querySelector(".new-game").style.lineHeight = height

    if (window.matchMedia("(min-width: 600px)").matches){
        numbers.forEach(function(number){
            number.style.height = `${number.clientWidth}px`
        })
    }

    if (window.matchMedia("(max-width: 600px)").matches){
        document.querySelector(".top").insertBefore(document.querySelector(".timer"),erase)
    }

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
import { sudokuGrid } from "./sudoku-grid-generator.js"

let newBoxes = []
function numberToGrid(){

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
        newBoxes[i].innerHTML = sudokuGrid[i] 
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

        if (!done){
            addClassRowColumn(box,row,column)
        }
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

    if (element != undefined && row != undefined && column != undefined && !done){
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

                if ((newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}`) || (newBoxes[k].innerHTML == number && number != "")){
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

    // check siblings
    let siblings = element.parentElement.children
    for (let i = 0 ; i < siblings.length ; i++){
        if (siblings[i].innerHTML == number && value){
            siblings[i].classList.add("bg-red")
        }
        else if (siblings[i].innerHTML == number && !value){
            siblings[i].classList.remove("bg-red")
            element.classList.remove("bg-red")
        }
        else if (siblings[i] == element && !value){
            siblings[i].classList.remove("bg-red")
        }
    }

    // check row and column
    for (let i = 1 ; i <= 9 ; i++){
        for (let j = 1 ; j <= 9 ; j++){
            for (let k = 0 ; k < newBoxes.length ; k++){
                if ((newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}`) && newBoxes[k].innerHTML == number && value && newBoxes[k] != element){
                    newBoxes[k].classList.add("bg-red")
                }

                else if ((newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}`) && !value && newBoxes[k].innerHTML == number){
                    newBoxes[k].classList.remove("bg-red")
                    element.classList.remove("bg-red")
                    element.classList.remove("color-red")
                }
            }
        }
    }

    let nothingRed = 0
    for (let i = 0 ; i < newBoxes.length ; i++){
        if (newBoxes[i].classList.contains("color-red")){
            let element = newBoxes[i]
            let number
            let row = element.classList.item(1)[0]
            let column = element.classList.item(1)[2]
            if (element.innerHTML != "" && element.innerHTML != undefined){
                number = element.innerHTML
                checkColorRed(element,number,row,column)
            }
        }
        else {
            nothingRed++
        }
    }

    if (nothingRed == newBoxes.length){
        checkColorRed(newBoxes[0],1,1,1,true)
    }
}

// function check color-red
function checkColorRed(element,number,row,column,nothingRed=false){
    
    if (nothingRed){
        for (let i = 0 ; i < newBoxes.length ; i++){
            newBoxes[i].classList.remove("bg-red")
        }

        return false
    }
    
    let siblings = element.parentElement.children
    
    element.classList.add("bg-red")

    // check siblings
    for (let i = 0 ; i < siblings.length ; i++){
        if (siblings[i].innerHTML == number && siblings[i] != element){
            siblings[i].classList.add("bg-red")
        }
        else if (siblings[i].innerHTML != number && !nothingRed){
            siblings[i].classList.remove("bg-red")
        }
    }

    // check row and column
    for (let i = 1 ; i <= 9 ; i++){
        for (let j = 1 ; j <= 9 ; j++){
            for (let k = 0 ; k < newBoxes.length ; k++){
                if ((newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}`) && newBoxes[k].innerHTML == number && newBoxes[k] != element && !nothingRed){
                    newBoxes[k].classList.add("bg-red")
                }

                else if ((newBoxes[k].classList.item(1) == `${row}-${i}` || newBoxes[k].classList.item(1) == `${j}-${column}`) && newBoxes[k].innerHTML != number && !nothingRed){
                    newBoxes[k].classList.remove("bg-red")
                }
            }
        }
    }
}

// enter number
let firstClick = 0
document.addEventListener("keyup",function(el){
    let key = parseInt(el.key)
    if (arrNumbers.includes(key) && !done){
        enterNumber(key)

        firstClick++
        if (firstClick == 1){
            timer()
        }
    }
})

numbers.forEach(function(number){
    number.addEventListener("click",function(){
        
        if (!done){
            let key = parseInt(number.innerHTML)
            enterNumber(key)
            
            firstClick++
            if (firstClick == 1){
                timer()
            }
        }
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

                checkFinish()
            }

            addClassRowColumn(element,row,column)
        }
    }
}

// erase number
document.addEventListener("keyup",function(el){
    let click = el.key;
    if (click == "Backspace" && !done){
        //
        for (let i = 0 ; i < newBoxes.length ; i++){
            if (newBoxes[i].classList.contains("click") && randomNumbers.includes(i)){
                let element = newBoxes[i]
                let number = element.innerHTML
                let row = element.classList.item(1)[0]
                let column = element.classList.item(1)[2]

                eraseNumbers(element)
                checkRowColum(element,number,row,column,false)
                addClassRowColumn(element,row,column)
            }
        }
    }
})

erase.addEventListener("click",function(){
    for (let i = 0 ; i < newBoxes.length ; i++){
        if (newBoxes[i].classList.contains("click") && randomNumbers.includes(i) && !done){
            let element = newBoxes[i]
            let number = element.innerHTML
            let row = element.classList.item(1)[0]
            let column = element.classList.item(1)[2]
            
            eraseNumbers(element)
            checkRowColum(element,number,row,column,false)
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

// check finish
const finish = document.querySelector(".finish")
let done = false;
function checkFinish(){

    let win = 0
    for (let i = 0 ; i < newBoxes.length ; i++){
        if (newBoxes[i].innerHTML == ""){
            win++
        }
    }

    if (win == 0){
        clearInterval(myTimer)
        bigBox.forEach(function(box){
            box.style.filter = "blur(4px)"
        })
        
        finish.style.display = "flex"
        setTimeout(() => {
            finish.style.opacity = "1"
        }, 500);

        hourFinish.innerHTML = innerHour;
        minFinish.innerHTML = innerMin;
        secFinish.innerHTML = innerSec;
        
        done = true
    }
}

// timer
const second = document.querySelector(".sec")
const minute = document.querySelector(".min")
const hours = document.querySelector(".hour")

const secFinish = document.querySelector(".sec-finish")
const minFinish = document.querySelector(".min-finish")
const hourFinish = document.querySelector(".hour-finish")

let myTimer;
let innerSec,innerMin,innerHour;

function timer(){
    let sec = 2;
    let min = 0;
    let hour = 0;

    second.innerHTML = `01`

    myTimer = setInterval(() => {

        if (min == 60){
            min = 0;
            hour++;
        }

        if (sec == 60){
            sec = 0;
            min++;
        }
        
        // seconds
        if (sec < 10){
            second.innerHTML = `0${sec}`
        }
        else {
            second.innerHTML = `${sec}`
        }

        // minutes
        if (min < 10){
            minute.innerHTML = `0${min}:`
        }
        else {
            minute.innerHTML = `${min}:`
        }

        // hours
        if (hour < 10){
            hours.innerHTML = `0${hour}:`
        }
        else {
            hours.innerHTML = `${hour}:`
        }

        innerSec = second.innerHTML;
        innerMin = minute.innerHTML;
        innerHour = hours.innerHTML;

        sec++
    }, 1000);
}
