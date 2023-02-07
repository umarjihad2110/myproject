var out = console.log.bind(document)

const svgCross = document.querySelectorAll(".svg-cross")
const svgCircle = document.querySelectorAll(".svg-circle")

const boxes = document.querySelectorAll(".box")

// run tic-tac-toe
let click = 0;
let finish = false
boxes.forEach(function(box,i){
    box.addEventListener("click",function(){
        click++;
        
        if (click % 2 == 1 && !finish && !box.classList.contains("selected-cross") && !box.classList.contains("selected-circle")){
            svgCross[i].style.display = "inline"
            
            box.classList.add("selected-cross")

            document.querySelector(".cross").style.boxShadow = "none"
            document.querySelector(".circle").style.boxShadow = "0 5px 0 -2px #bbb"

            finishGame("cross")
        }

        else if (click % 2 == 0 && !finish && !box.classList.contains("selected-cross") && !box.classList.contains("selected-circle")){
            svgCircle[i].style.display = "inline"

            box.classList.add("selected-circle")

            document.querySelector(".circle").style.boxShadow = "none"
            document.querySelector(".cross").style.boxShadow = "0 5px 0 -2px #bbb"

            finishGame("circle")
        }

        else if (box.classList.contains("selected-cross") || box.classList.contains("selected-circle")){
            click--
            alert("Wrong spot!")
        }
    })
})

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
       
    if (click == 9 && checkFinish == 0){
        showScore("draw")
    }
}

// show score
function showScore(svg){
    setTimeout(() => {
        document.querySelector(".score").style.display = "flex"
        
        document.querySelector(".circle").style.boxShadow = "none"
        document.querySelector(".cross").style.boxShadow = "none"

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