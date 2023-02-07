var out = console.log.bind(document)

// input the random words
import { words2 } from "./words.js" 
import { words3 } from "./words.js" 
import { words4 } from "./words.js"  
import { words5 } from "./words.js"  
import { words6 } from "./words.js" 

const wordArr = []
const letterArr = []

// array of random words
let sumWords = 50;
let wordsType = []
for (let i = 1 ; i <= sumWords ; i++){
    let randomArray = Math.floor(Math.random()*8 + 1)
    let randomWord;

    if (randomArray == 1){
        randomWord = Math.floor(Math.random()*(words2.length) + 0)
        wordsType.push(words2[randomWord])
    }

    else if (randomArray == 2){
        randomWord = Math.floor(Math.random()*(words3.length) + 0)
        wordsType.push(words3[randomWord])
    }

    else if (randomArray == 3 || randomArray == 4){
        randomWord = Math.floor(Math.random()*(words4.length) + 0)
        wordsType.push(words4[randomWord])
    }

    else if (randomArray == 5 || randomArray == 6){
        randomWord = Math.floor(Math.random()*(words5.length) + 0)
        wordsType.push(words5[randomWord])
    }

    else if (randomArray == 7 || randomArray == 8){
        randomWord = Math.floor(Math.random()*(words6.length) + 0)
        wordsType.push(words6[randomWord])
    }
}


// array of letter
let text = []
for (let i = 0 ; i < sumWords ; i++){
    text = text.concat(wordsType[i].split(""))
}

for (let i = 0 ; i < text.length ; i++){
    let x = document.createElement("letter")
    let y = document.createTextNode(text[i])

    x.appendChild(y)
    x.classList.add("letter")
    letterArr.push(x)
}


// input the letters to words
const wrapper = document.querySelector(".words-wrapper")
let k = 0
for (let i = 0 ; i < sumWords ; i++){
    let x = document.createElement("word")
    wordArr.push(x)

    for (let j = 0 ; j < wordsType[i].length ; j++){
        x.appendChild(letterArr[k])
        k++;
    }
    wrapper.appendChild(wordArr[i])
}

// run the system
var alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const words = document.querySelectorAll("word")
var letters = document.querySelectorAll("letter")
const line = document.querySelector(".line")

line.style.height = `${letters[0].clientHeight}px`

// select the last letter
words.forEach(function(word){
    word.lastElementChild.classList.add("last-letter")
    word.firstElementChild.classList.add("first-letter")
})

letters[0].appendChild(line)

// run the click
document.querySelector(".counter").innerText = `0/${sumWords}`
let extra = 0

let index = 1;
let wrongClick = false
let counter = 0
let firstClick = 0
let correctClick = 0
document.addEventListener("keydown",function(e){
    let x = e.key

    if (x != "Meta" && !finish){

        if (line.style.left == "16px" && x == letters[index-1].innerText){
            let el = document.createElement("letter")
            el.classList.add("incorrect",'last-letter','extra')
            el.append(x)
            
            letters[index-1].parentElement.appendChild(el)
            el.appendChild(line)
            line.style.left = "16px"

            letters = document.querySelectorAll("letter")
            index++

            extra++
        }

        // last letter correct
        if ((letters[index-1].classList.contains("last-letter")) && x == letters[index-1].innerText){
            
            letters[index-1].classList.add("active")
            line.style.left = "16px"
            
            if (index == letters.length && counter < sumWords){
                checkFinish()
                counter++
                document.querySelector(".counter").innerText = `${counter}/${sumWords}`
            }
        }
        
        // click the correct letter
        else if ((line.style.left == "16px" || x == letters[index-1].innerText) && x != "Backspace") {
            checkWrong()

            if (x == " " && !wrongClick && index != letters.length){
                counter++
                document.querySelector(".counter").innerText = `${counter}/${sumWords}`
                extra = 0
            }
            
            if (index != letters.length){
                
                if (line.style.left == "16px" && alphabets.includes(x.toUpperCase())){
                    let el = document.createElement("letter")
                    el.classList.add("incorrect",'last-letter','extra')
                    el.append(x)
                    
                    letters[index-1].parentElement.appendChild(el)
                    el.appendChild(line)
                    line.style.left = "16px"

                    letters = document.querySelectorAll("letter")
                    index++

                    extra++
                }

                else if (x == " " || alphabets.includes(x.toUpperCase())){
                    
                    letters[index-1].classList.add("active")
                    letters[index].appendChild(line)
                    line.style.left = "0"
                    extra = 0
                    index++
                }
            }

            firstClick++
            if (firstClick == 1){
                timer()
            }
        }

        // click backspace
        else if (x == "Backspace" && index > 1){
            checkWrong()

            if (extra > 0){
                let el = letters[index-1].parentElement
                el.lastElementChild.remove()
                
                letters = document.querySelectorAll("letter")
                extra--
            }

            // there is incorrect letters
            if (letters[index-2].classList.contains("extra") || (letters[index-2].classList.contains("last-letter") && wrongClick)){
                
                if (!letters[index-2].parentElement.lastElementChild.classList.contains("letter") && line.style.left != "0px" && extra <= 0){
                    letters[index-2].parentElement.lastElementChild.remove()

                    letters = document.querySelectorAll("letter")
                }

                letters[index-2].appendChild(line)
                line.style.left = "16px"
                index--
                wrongClick = false
            }

            // delete last letter
            else if (letters[index-1].classList.contains("last-letter") && line.style.left == "16px"){
                
                letters[index-1].classList.remove("active")
                letters[index-1].classList.remove("incorrect")
                line.style.left = "0"
                wrongClick = false
            }
            
            // delete letter
            else if (!letters[index-2].classList.contains("last-letter")) {
                
                letters[index-2].appendChild(line)
                letters[index-2].classList.remove("active")
                letters[index-2].classList.remove("incorrect")
                index--
                wrongClick = false
            }

            checkWrong()
        }

        // last letter incorrect
        else if ((letters[index-1].classList.contains("last-letter")) && x != letters[index-1].innerText && alphabets.includes(x.toUpperCase())){

            if (line.style.left != "16px"){
                letters[index-1].classList.add("incorrect")
                line.style.left = "16px"
            }
        }

        // incorrect letter
        else if ((x == " " || x != letters[index-1].innerText) && alphabets.includes(x.toUpperCase())){

            letters[index-1].classList.add("incorrect")
            letters[index].appendChild(line)
            line.style.left = "0"
            index++
            firstClick++
            if (firstClick == 1){
                timer()
            }
        }
    }
})

// check if there is/are a wrong letter/letters
function checkWrong(){
    for (let i = 0 ; i < index ; i++){
        if (letters[i].classList.contains("incorrect")){
            wrongClick = true
            break;
        }
    }
}

// check finish
let finish = false
function checkFinish(){
    for (let i = 0 ; i < index ; i++){
        if (letters[i].classList.contains("active")){
           correctClick++ 
        }
    }
    if (correctClick == letters.length){
        finish = true
        showScore()
        clearInterval(myTimer)
    }
}
function showScore(){
    const scoreImg = document.querySelector(".score-img")
    const scoreWrap = document.querySelector(".score-wrap")
    const scoreValue = document.querySelector(".score-value")
    
    wrapper.style.filter = 'blur(3px)'
    line.style.animation = 'none'

    setTimeout(() => {
        scoreWrap.style.display = "flex"
        scoreImg.style.top = `-${scoreImg.clientHeight/2 + 10}px`
        scoreImg.style.left = `${(scoreWrap.clientWidth - scoreImg.clientWidth)/2}px`

        innerMin *= 60
        out(innerSec)
        out(innerMin)
        
        scoreValue.innerText = `${((innerMin + innerSec)/sumWords).toFixed(2)}`
    }, 200);
}

// timer
let myTimer;
let innerSec,innerMin
function timer(){
    let sec = 2;
    let min = 0;

    document.querySelector('.sec').innerHTML = `01`

    myTimer = setInterval(() => {
        if (sec == 60){
            sec = 0;
            min++;
        }
        
        if (sec < 10){
            document.querySelector(".sec").innerHTML = `0${sec}`
        }
        else {
            document.querySelector(".sec").innerHTML = `${sec}`
        }

        if (min < 10){
            document.querySelector(".min").innerHTML = `0${min}:`
        }
        else {
            document.querySelector(".min").innerHTML = `${min}:`
        }
        innerSec = sec;
        innerMin = min;
        sec++
    }, 1000);
}
