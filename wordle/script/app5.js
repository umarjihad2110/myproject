var out = console.log.bind(document)

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

import { guessWords5 } from "./words.js"

const words = document.querySelectorAll(".word")
const score = document.querySelector(".score")
const won = document.querySelector(".won")
const lost = document.querySelector(".lost")
const val = document.querySelector(".value")
const keys = document.querySelectorAll(".keys")

let guessWord;
let random = Math.floor(Math.random()*(guessWords5.length) + 0)

guessWord = []
let check = 0
var wordguess = ""

for (let i = 0 ; i < 5 ; i++){
    guessWord[i] = guessWords5[random].slice(i,i+1)
    wordguess += guessWord[i]
}

let i = 0
var right;
var enter = true;
var guess = []
let row = 0
let column = 0
let unable = false;
let checkEnter = false

document.addEventListener("keydown",function(event){
    var x = event.key;

    // check if a letter
    for (let j = 0 ; j < letters.length ; j++){
        if (x == letters[j]){
            right = true
            break;
        }
        else {
            right = false
        }
    }

    // letter
    if (right == true && unable == false && row != 6 && enter == true){
        if (column < 5){
            words[i].innerHTML = x
            words[i].classList.add("border")
            guess.push(x)
            i++   
            column++
            if (i % 5 == 0){
                enter = false
                checkEnter = true
            }
        }
    }

    // backspace
    else if (x == "Backspace"){
        if (row == 0){
            if (column != 0){
                words[column-1].innerHTML = ""
                words[column-1].classList.remove("border")
                column--
                i--
                guess.pop()
            }
        }
        else if (row == 1){
            if (i != 5){
                words[i-1].innerHTML = ''
                words[i-1].classList.remove("border")
                i--
                column--
                guess.pop()
            }
        }

        else if (row == 2){
            if (i != 10){
                words[i-1].innerHTML = ''
                words[i-1].classList.remove("border")
                i--
                column--
                guess.pop()
            }
        }

        else if (row == 3){
            if (i != 15){
                words[i-1].innerHTML = ''
                words[i-1].classList.remove("border")
                i--
                column--
                guess.pop()
            }
        }

        else if (row == 4){
            if (i != 20){
                words[i-1].innerHTML = ''
                words[i-1].classList.remove("border")
                i--
                column--
                guess.pop()
            }
        }

        else if (row == 5){
            if (i != 25){
                words[i-1].innerHTML = ''
                words[i-1].classList.remove("border")
                i--
                column--
                guess.pop()
            }
        }

        else if (row == 6){
            if (i != 30){
                words[i-1].innerHTML = ''
                words[i-1].classList.remove("border")
                i--
                column--
                guess.pop()
            }
        }

        enter = true
    }

    // enter
    else if (x == "Enter"){        
        
        if (column < 5 ){
            alert("Not Enough")
        }
        
        else if (checkEnter == true){

            checkEnter = false
            
            words[i-5].classList.add("flip")

            setTimeout(() => {
                words[i-4].classList.add("flip")
            }, 300);
            
            setTimeout(() => {
                words[i-3].classList.add("flip")
            }, 600);
            
            setTimeout(() => {
                words[i-2].classList.add("flip")
            }, 900);
            
            setTimeout(() => {
                words[i-1].classList.add("flip")
                column = 0;
                i = 5 + 5*row
                row++
                
                for (let j = 0 ; j < 5 ; j++){
                    if (guess[j] == guessWord[j]){
                        if (row != 0){
                            setTimeout(() => {
                                words[i + j - 5].style.backgroundColor = "lime"
                                
                                let same = words[i + j - 5].innerHTML

                                for (let k = 0 ; k < keys.length ; k++){
                                    if (keys[k].innerHTML == same){
                                        keys[k].classList.remove("yellow")
                                        keys[k].classList.add("green")
                                    }
                                }
                            }, 500);
                        }
                        check++
                    }
                    else {
                        for (let k = 0 ; k < 5 ; k++){
                            if (guess[j] == guessWord[k] && j != k){
                                if (row != 0){
                                    setTimeout(() => {
                                        words[i + j - 5].style.backgroundColor = "#fad02c"
                                        
                                        let same = words[i + j - 5].innerHTML

                                        for (let k = 0 ; k < keys.length ; k++){
                                            if (keys[k].innerHTML == same && !keys[k].classList.contains("green")){
                                                keys[k].classList.remove("white")
                                                keys[k].classList.add("yellow")
                                            }
                                        }
                                    }, 500);   
                                }
                            }
                            else if (guess[j] != guessWord[k]) {
                                if (row != 0){
                                    setTimeout(() => {

                                        let same = words[i + j - 5].innerHTML

                                        for (let k = 0 ; k < keys.length ; k++){
                                            if (keys[k].innerHTML == same && !keys[k].classList.contains("green") && !keys[k].classList.contains("yellow")){
                                                words[i + j - 5].style.backgroundColor = "#dee"
                                                keys[k].classList.add("white")
                                            }
                                        }
                                    }, 500);
                                }
                            }
                        }
                    }

                }
                
                // answer is true
                if (check == 5){
                    setTimeout(() => {
                        unable = true
                        score.style.display = "flex"
                        won.style.display = "block"
                        val.style.display = "block"
                        val.innerHTML = `${row}/6`
                    }, 800);
                }

                else {
                    setTimeout(() => {
                        check = 0
                    }, 800);
                }

                setTimeout(() => {
                    if (row == 6 && check != 5){
                        unable = true
                        score.style.display = "flex"
                        lost.style.display = "block"
                        document.querySelector(".guess").style.display = "block"
                        document.querySelector(".guess").innerHTML = wordguess
                    }
                }, 500);
                
                guess = []
                
                setTimeout(() => {
                    enter = true
                }, 1200);
            }, 1200);
        }
    }
})

// keyboard click
keys.forEach(function(key,index){
    key.addEventListener("click",function(){

        // enter
        if (keys[index].classList.contains("enter") && unable == false){
            
            if (column < 5 ){
                alert("Not Enough")
            }
            
            else if (checkEnter == true){
    
                checkEnter = false
    
                words[i-5].classList.add("flip")
    
                setTimeout(() => {
                    words[i-4].classList.add("flip")
                }, 300);
                
                setTimeout(() => {
                    words[i-3].classList.add("flip")
                }, 600);
                
                setTimeout(() => {
                    words[i-2].classList.add("flip")
                }, 900);
                
                setTimeout(() => {
                    words[i-1].classList.add("flip")
                    column = 0;
                    i = 5 + 5*row
                    row++
                    
                    for (let j = 0 ; j < 5 ; j++){
                        if (guess[j] == guessWord[j]){
                            if (row != 0){
                                setTimeout(() => {
                                    words[i + j - 5].style.backgroundColor = "lime"
                                    
                                    let same = words[i + j - 5].innerHTML
    
                                    for (let k = 0 ; k < keys.length ; k++){
                                        if (keys[k].innerHTML == same){
                                            keys[k].classList.remove("yellow")
                                            keys[k].classList.add("green")
                                        }
                                    }
                                }, 500);
                            }
                            check++
                        }
                        else {
                            for (let k = 0 ; k < 5 ; k++){
                                if (guess[j] == guessWord[k] && j != k){
                                    if (row != 0){
                                        setTimeout(() => {
                                            words[i + j - 5].style.backgroundColor = "#fad02c"
                                            
                                            let same = words[i + j - 5].innerHTML
    
                                            for (let k = 0 ; k < keys.length ; k++){
                                                if (keys[k].innerHTML == same && !keys[k].classList.contains("green")){
                                                    keys[k].classList.remove("white")
                                                    keys[k].classList.add("yellow")
                                                }
                                            }
                                        }, 500);   
                                    }
                                }
                                else if (guess[j] != guessWord[k]) {
                                    if (row != 0){
                                        setTimeout(() => {
    
                                            let same = words[i + j - 5].innerHTML
    
                                            for (let k = 0 ; k < keys.length ; k++){
                                                if (keys[k].innerHTML == same && !keys[k].classList.contains("green") && !keys[k].classList.contains("yellow")){
                                                    words[i + j - 5].style.backgroundColor = "#dee"
                                                    keys[k].classList.add("white")
                                                }
                                            }
                                        }, 500);
                                    }
                                }
                            }
                        }
    
                    }
                    
                    // answer is true
                    if (check == 5){
                        setTimeout(() => {
                            unable = true
                            score.style.display = "flex"
                            won.style.display = "block"
                            val.style.display = "block"
                            val.innerHTML = `${row}/6`
                        }, 800);
                    }
    
                    else {
                        setTimeout(() => {
                            check = 0
                        }, 800);
                    }
    
                    setTimeout(() => {
                        if (row == 6 && check != 5){
                            unable = true
                            score.style.display = "flex"
                            lost.style.display = "block"
                            document.querySelector(".guess").style.display = "block"
                            document.querySelector(".guess").innerHTML = wordguess
                        }
                    }, 500);
                    
                    guess = []
                    
                    setTimeout(() => {
                        enter = true
                    }, 1200);
                }, 1200);
            }
        }

        // backspace
        else if (keys[index].classList.contains("backspace") && unable == false){
            if (row == 0){
                if (column != 0){
                    words[column-1].innerHTML = ""
                    words[column-1].classList.remove("border")
                    column--
                    i--
                    guess.pop()
                }
            }
            else if (row == 1){
                if (i != 5){
                    words[i-1].innerHTML = ''
                    words[i-1].classList.remove("border")
                    i--
                    column--
                    guess.pop()
                }
            }
    
            else if (row == 2){
                if (i != 10){
                    words[i-1].innerHTML = ''
                    words[i-1].classList.remove("border")
                    i--
                    column--
                    guess.pop()
                }
            }
    
            else if (row == 3){
                if (i != 15){
                    words[i-1].innerHTML = ''
                    words[i-1].classList.remove("border")
                    i--
                    column--
                    guess.pop()
                }
            }
    
            else if (row == 4){
                if (i != 20){
                    words[i-1].innerHTML = ''
                    words[i-1].classList.remove("border")
                    i--
                    column--
                    guess.pop()
                }
            }
    
            else if (row == 5){
                if (i != 25){
                    words[i-1].innerHTML = ''
                    words[i-1].classList.remove("border")
                    i--
                    column--
                    guess.pop()
                }
            }
    
            else if (row == 6){
                if (i != 30){
                    words[i-1].innerHTML = ''
                    words[i-1].classList.remove("border")
                    i--
                    column--
                    guess.pop()
                }
            }
    
            enter = true
        }

        else if (unable == false && enter == true){
            if (column < 5){
                words[i].innerHTML = keys[index].innerHTML
                words[i].classList.add("border")
                guess.push(keys[index].innerHTML)
                i++   
                column++
                if (i % 5 == 0){
                    enter = false
                    checkEnter = true
                }
            }
        }
    })
})