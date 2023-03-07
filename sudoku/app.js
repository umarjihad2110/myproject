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

    for (let i = 0 ; i < box.length ; i++){
        if (box[i].classList.contains("1-1")){
            out(box[i])
        }
    }

    // put number into grid
    numberToGrid()
})

// function put numbers into grid
function numberToGrid(){
    let newArrNumbers = shuffle(arrNumbers);
    out(newArrNumbers)

    for (let i = 0 ; i < 9 ; i++){
        box[i].innerHTML = newArrNumbers[i]
    }

    out(box)
}

// shuffle array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);

    return array
}
