var out = console.log.bind(document)

const svgCross = document.querySelectorAll(".svg-cross")
const svgCircle = document.querySelectorAll(".svg-circle")

const boxes = document.querySelectorAll(".box")

const selectCross = document.querySelector(".cross")
const selectCircle = document.querySelector(".circle")

// select player
var cross = false
var circle = false
selectCross.addEventListener("click",function(){
    if (!circle){
        cross = true
        document.querySelectorAll(".user")[0].innerHTML = "Me"
        document.querySelectorAll(".user")[1].innerHTML = "Computer"
    }
})

selectCircle.addEventListener("click",function(){
    if (!cross){
        circle = true
        cross = false
        document.querySelectorAll(".user")[1].innerHTML = "Me"
        document.querySelectorAll(".user")[0].innerHTML = "Computer"
    }
})

// run tic-tac-toe
var click = 0
var finish = false
boxes.forEach(function(box,i){
    var boxSelected = []
    box.addEventListener("click",function(){
        if (cross && !boxes[i].classList.contains("selected-cross") && !boxes[i].classList.contains("selected-circle") && !finish){
            click++
            svgCross[i].style.display = "inline"

            boxes[i].classList.add("selected-cross")

            for (let i = 0 ; i < 9 ; i++){
                if (!boxes[i].classList.contains("selected-cross") && !boxes[i].classList.contains("selected-circle")){
                    boxSelected.push(boxes[i])
                }
            }

            finishGame("cross")
            computer(boxSelected)
        }

        else if (circle && !boxes[i].classList.contains("selected-cross") && !boxes[i].classList.contains("selected-circle") && !finish){
            click++
            svgCircle[i].style.display = "inline"

            boxes[i].classList.add("selected-circle")

            for (let i = 0 ; i < 9 ; i++){
                if (!boxes[i].classList.contains("selected-cross") && !boxes[i].classList.contains("selected-circle")){
                    boxSelected.push(boxes[i])
                }
            }

            finishGame("circle")
            computer(boxSelected)
        }

        else if (boxes[i].classList.contains("selected-cross") || boxes[i].classList.contains("selected-circle")){
            alert("Wrong spot")
        }

        else if (!cross && !circle) {
            alert("Select the player first")
        }
    })
})

// computer run
function computer(boxSelected){
    var random = Math.floor(Math.random()*boxSelected.length + 0)
    
    if (cross && click != 5 && !finish){
        setTimeout(() => {
            boxSelected[random].getElementsByClassName("svg-circle")[0].style.display = "inline"
            boxSelected[random].classList.add("selected-circle")

            finishGame("circle")            
        }, 700);
    }

    else if (circle && click != 5 && !finish){
        setTimeout(() => {
            boxSelected[random].getElementsByClassName("svg-cross")[0].style.display = "inline"
            boxSelected[random].classList.add("selected-cross")

            finishGame("cross")
        }, 700);
    }
}

// finish game
let checkFinish = 0;
function finishGame(svg){
    for (let i = 0 ; i <= 6 ; i = i + 3){
        if(boxes[i].classList.contains(`selected-${svg}`) && boxes[i+1].classList.contains(`selected-${svg}`) && boxes[i+2].classList.contains(`selected-${svg}`)){
            finish = true
            checkFinish++
            boxes[i].style.backgroundColor = "#00c900"
            setTimeout(() => {
                boxes[i+1].style.backgroundColor = "#00c900"
            }, 400);
            setTimeout(() => {
                boxes[i+2].style.backgroundColor = "#00c900"
                showScore(svg)
            }, 800);
        } 
    }

    for (let i = 0 ; i <= 2 ; i++){
        if (boxes[i].classList.contains(`selected-${svg}`) && boxes[i+3].classList.contains(`selected-${svg}`) && boxes[i+6].classList.contains(`selected-${svg}`)){
            finish = true
            checkFinish++
            boxes[i].style.backgroundColor = "#00c900"
            setTimeout(() => {
                boxes[i+3].style.backgroundColor = "#00c900"
            }, 400);
            setTimeout(() => {
                boxes[i+6].style.backgroundColor = "#00c900"
                showScore(svg)
            }, 800);
        }
    }

    if (boxes[0].classList.contains(`selected-${svg}`) && boxes[4].classList.contains(`selected-${svg}`) && boxes[8].classList.contains(`selected-${svg}`)){
        finish = true
        checkFinish++
        boxes[0].style.backgroundColor = "#00c900"
        setTimeout(() => {
            boxes[4].style.backgroundColor = "#00c900"
        }, 400);
        setTimeout(() => {
            boxes[8].style.backgroundColor = "#00c900"
            showScore(svg)
        }, 800);
    }

    if (boxes[2].classList.contains(`selected-${svg}`) && boxes[4].classList.contains(`selected-${svg}`) && boxes[6].classList.contains(`selected-${svg}`)){
        finish = true
        checkFinish++
        boxes[2].style.backgroundColor = "#00c900"
        setTimeout(() => {
            boxes[4].style.backgroundColor = "#00c900"
        }, 400);
        setTimeout(() => {
            boxes[6].style.backgroundColor = "#00c900"
            showScore(svg)
        }, 800);
    }

    if (click == 5 && checkFinish == 0){
        showScore("draw")
    }
}

// show score
function showScore(svg){
    setTimeout(() => {
        document.querySelector(".score").style.display = "flex"

        boxes.forEach(function(box){
            box.style.backgroundColor = "rgb(255,255,255,.2)"
        })

        svgCross.forEach(function(cross){
            cross.style.display = "none"
        })

        svgCircle.forEach(function(circle){
            circle.style.display = "none"
        })

        if (svg == "cross"){
            document.querySelector(".score .svg-cross").style.display = "inline"
            document.querySelector(".win").style.display = "block"
        }
        else if (svg == "circle"){
            document.querySelector(".score .svg-circle").style.display = "inline"
            document.querySelector(".win").style.display = "block"
        }
        else if (svg == "draw"){
            document.querySelector(".score .svg-cross").style.display = "inline"
            document.querySelector(".score .svg-circle").style.display = "inline"
            document.querySelector(".draw").style.display = "block"
        }
    }, 300);
}