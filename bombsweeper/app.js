var out = console.log.bind(document)

const boxes = document.querySelectorAll(".box")
const svgFlag = document.querySelectorAll(".svg-flag")
const sideBox = document.querySelectorAll(".sidebox")
const svgBomb = document.querySelectorAll(".svg-bomb")

// put the flag
let firstFlagClick = 0;
let flagsOpen = 10
boxes.forEach(function(box,i){
    box.addEventListener("contextmenu",function(e){
        e.preventDefault()

        if (svgFlag[i].classList.contains("open")){
            svgFlag[i].style.display = "none"
            svgFlag[i].classList.remove("open")
            flagsOpen++    
        }
        else if (!svgFlag[i].classList.contains("open") && !box.classList.contains("open") && flagsOpen != 0 && !gameOver){
            firstFlagClick++
            if(firstFlagClick == 1 && firstBoxClick == 0 && firstBoxEmptyClick == 0){
                timer()
            }
            svgFlag[i].classList.add("open")
            svgFlag[i].style.display = "inline"
            flagsOpen--
        }
        document.querySelector('.info-flag span').innerHTML = flagsOpen
    })
})

// put the bomb
let arrBomb = []
function bomber(){
    
    for (let i = 1 ; i <= 10 ; i++){
        if(arrBomb.length == 10){
            return;
        }

        let random = Math.floor(Math.random()*100 + 0)
        if (arrBomb.includes(random)){
            bomber()
            break;
        }
        else {
            arrBomb.push(random)
        }
    }
}
bomber()

// put the numbers
let sideBomb = 0
function putNumbers(){

    for (let i = 0 ; i < boxes.length ; i++){
        for (let j = 0 ; j < arrBomb.length ; j++){
            if (i == arrBomb[j]){
                sideBomb = 0
                break;
            }

            else if (i == 0){
                if (arrBomb[j] == i + 1 || arrBomb[j] == i + 10 || arrBomb[j] == i + 11){
                    sideBomb++
                }
            }

            else if (i == 9){
                if (arrBomb[j] == i - 1 || arrBomb[j] == i + 9 || arrBomb[j] == i + 10){
                    sideBomb++
                }
            }

            else if (i == 90){
                if (arrBomb[j] == i - 10 || arrBomb[j] == i - 9 || arrBomb[j] == i + 1){
                    sideBomb++
                }
            }

            else if (i == 99){
                if (arrBomb[j] == i - 1 || arrBomb[j] == i - 11 || arrBomb[j] == i - 10){
                    sideBomb++
                }
            }

            else if (i % 10 == 0){
                if (arrBomb[j] == i - 10 || arrBomb[j] == i - 9 || arrBomb[j] == i + 1 || arrBomb[j] == i + 10 || arrBomb[j] == i + 11){
                    sideBomb++
                }    
            }

            else if (i >= 1 && i <= 8){
                if (arrBomb[j] == i - 1 || arrBomb[j] == i + 1 ||arrBomb[j] == i + 9 || arrBomb[j] == i + 10 || arrBomb[j] == i + 11){
                    sideBomb++
                }
            }

            else if (i % 10 == 9){
                if (arrBomb[j] == i - 11 || arrBomb[j] == i - 10 || arrBomb[j] == i - 1 || arrBomb[j] == i + 9 || arrBomb[j] == i + 10){
                    sideBomb++
                }
            }

            else if (i >= 91 && i <= 98){
                if (arrBomb[j] == i - 1 || arrBomb[j] == i + 1 || arrBomb[j] == i - 11 || arrBomb[j] == i - 10 || arrBomb[j] == i - 9){
                    sideBomb++
                }
            }

            else if ((arrBomb[j] == i - 1 || arrBomb[j] == i + 1 || arrBomb[j] == i - 11 || arrBomb[j] == i - 10 || arrBomb[j] == i - 9 || arrBomb[j] == i + 9 || arrBomb[j] == i + 10 || arrBomb[j] == i + 11) && arrBomb[j] != i){
                sideBomb++
            }
        }

        if (sideBomb == 0){
            sideBox[i].innerHTML = ""
        }

        else{
            sideBox[i].innerHTML = sideBomb
            sideBox[i].classList.add(`box${sideBomb}`)
        }

        sideBomb = 0
    }
}
putNumbers()

// open the box
let gameOver = false
let boxOpen = 100
let firstBoxClick = 0;
let firstBoxEmptyClick = 0;
boxes.forEach(function(box,i){

    box.addEventListener("click",function(){
        if (sideBox[i].innerHTML != "" && !box.classList.contains("open") && !gameOver && !svgFlag[i].classList.contains("open")){
            firstBoxClick++;
            if (firstBoxClick == 1 && firstFlagClick == 0 && firstBoxEmptyClick == 0){
                timer()
            }
            sideBox[i].style.display = "inline"
            box.classList.add("open")
            boxOpen--;
            document.querySelector(".info-box span").innerHTML = boxOpen
        }

        else if (arrBomb.includes(i) && !box.classList.contains("open") && !gameOver && !svgFlag[i].classList.contains("open")){
            box.classList.add("open") 
            winOrLose('lose')         
            insertBomb()
        }

        else if (!gameOver && !svgFlag[i].classList.contains("open")) {
            firstBoxEmptyClick++;
            if (firstBoxEmptyClick == 1 && firstBoxClick == 0 && firstFlagClick == 0){
                timer()
            }
            checkBomb(i)
            document.querySelector(".info-box span").innerHTML = boxOpen
        }

        if (boxOpen == 10){
            winOrLose("win");
        }
    })
})

// insert bomb
let bombs = [svgBomb,svgBomb,svgBomb,svgBomb,svgBomb,svgBomb,svgBomb,svgBomb,svgBomb,svgBomb]
function insertBomb(){
    for (let i = 0 ; i < boxes.length ; i++){
        for (let j = 0 ; j < arrBomb.length ; j++){
            svgBomb[j].style.display = "inline"
            boxes[arrBomb[j]].appendChild(svgBomb[j])
            boxes[arrBomb[j]].style.backgroundColor = "rgb(255,255,255,.37)"
        }
    }
    
    svgFlag.forEach(function(flag){
        flag.style.display = "none"
    })
}

// open box when there's no number in it
function checkBomb(x){

    if (boxes[x].classList.contains("open")){
        return;
    }

    boxes[x].classList.add("open")
    sideBox[x].style.display = "inline"
    boxOpen--

    svgFlag[x].style.display = "none"

    if (sideBox[x].innerHTML == "1" || sideBox[x].innerHTML == "2" || sideBox[x].innerHTML == "3" || sideBox[x].innerHTML == "4" || sideBox[x].innerHTML == "5" || sideBox[x].innerHTML == "6" || sideBox[x].innerHTML == "7" || sideBox[x].innerHTML == "8"){
        return;
    }

    else {
        if (x == 0){
            checkBomb(x+1)
            checkBomb(x+10)
            checkBomb(x+11)
        }
        else if (x == 9){
            checkBomb(x-1)
            checkBomb(x+9)
            checkBomb(x+10)
        }
        else if (x == 90){
            checkBomb(x-10)
            checkBomb(x-9)
            checkBomb(x+1)
        }
        else if (x == 99){
            checkBomb(x-11)
            checkBomb(x-10)
            checkBomb(x-1)
        }
        else if (x > 0 && x < 9){
            checkBomb(x-1)
            checkBomb(x+1)
            checkBomb(x+9)
            checkBomb(x+10)
            checkBomb(x+11)
        }
        else if (x > 90 && x < 99){
            checkBomb(x-1)
            checkBomb(x+1)
            checkBomb(x-9)
            checkBomb(x-10)
            checkBomb(x-11)
        }
        else if (x % 10 == 0){
            checkBomb(x-10)
            checkBomb(x-9)
            checkBomb(x+1)
            checkBomb(x+10)
            checkBomb(x+11)
        }
        else if (x % 10 == 9){
            checkBomb(x-11)
            checkBomb(x-10)
            checkBomb(x-1)
            checkBomb(x+9)
            checkBomb(x+10)
        }
        else {
            checkBomb(x-11)
            checkBomb(x-10)
            checkBomb(x-9)
            checkBomb(x-1)
            checkBomb(x+1)
            checkBomb(x+9)
            checkBomb(x+10)
            checkBomb(x+11)
        }
    }
}

let myTimer;
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
        sec++
    }, 1000);
}
let currentScore
let hiScore
function winOrLose(thing){
    setTimeout(() => {
        gameOver = true
        clearInterval(myTimer)
        document.querySelector(".score").style.display = "flex"

        if (thing == "win"){
            document.querySelector(".score-value").innerHTML = document.querySelector(".min").innerHTML + document.querySelector(".sec").innerHTML

            currentScore = (parseInt(document.querySelector(".min").innerHTML))*60 + parseInt(document.querySelector(".sec").innerHTML)
            
            if (!localStorage.getItem("hiScore")){
                localStorage.setItem("hiScore",currentScore)
            }
            else{
                if (currentScore < localStorage.getItem("hiScore")){
                    localStorage.setItem("hiScore",currentScore)
                }
            }
            hiScore = parseInt(localStorage.getItem("hiScore"))

            document.querySelector(".hi-score").style.display = "block";
            if (hiScore > 60){
                document.querySelector(".hi-score").innerHTML = `0${hiScore % 60}:${hiScore -  (hiScore % 60)*60}`
            }
            else {
                document.querySelector(".hi-score").innerHTML = `00:${hiScore}`
            }
        }

        else if (thing == "lose"){
            document.querySelector(".score-value").style.display = "none"
        }
    }, 500);
}


// (x-11) (x-10) (x-9)
// (x-1)   (x)   (x+1)
// (x+9)  (x+10) (x+11)