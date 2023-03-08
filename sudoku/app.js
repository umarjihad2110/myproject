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

    // put number into grid
    numberToGrid()
})

// function put numbers into grid
function numberToGrid(){

    // new shiffled array
    let newArrNumbers = shuffle(arrNumbers);

    // new array of boxes
    let newBoxes = []
    for (let j = 1 ; j <= 9 ; j++){
        for (let k = 1 ; k <= 9 ; k++){
            for (let i = 0 ; i < box.length ; i++){
                if (box[i].classList.contains(`${j}-${k}`)){
                    newBoxes.push(box[i])
                }
            }
        }
    }

    // input the numbers to 1st row
    for (let i = 0 ; i < 9 ; i++){
        newBoxes[i].innerHTML = newArrNumbers[i]
    }

    // check number availablity
    inputRandomNumber(newBoxes)
}

// function input random number
function inputRandomNumber(arr){

    let array = arr;
    
    for (let i = 9 ; i < array.length ; i++){
        array[i].innerHTML = ''
    }

    for (let i = 9 ; i < 80 ; i += 9){
        let newArrNumbers = shuffle(arrNumbers)
        // out(newArrNumbers)

        for (let j = 0 ; j < 9 ; j++){

            
            array[i+j].innerHTML = newArrNumbers[j]
            
            // check columns
            out(array[i+j])
            if (array[i+j].innerHTML == array[j].innerHTML){
                return numberToGrid()
            }
        }
        // break;
    }
}

// function check availablity number to join grid
// function checkAble(arr){
//     let array = arr;

//     for (let i = 9 ; i < array.length ; i++){
//         array[i].innerHTML = ''
//     }

//     for (let i = 9 ; i < 80 ; i += 9){
//         let newArrNumbers = shuffle(arrNumbers)
//         // out(newArrNumbers)

//         let innerNumbers = []

//         for (let j = 0 ; j < 9 ; j++){

            
//             array[i+j].innerHTML = newArrNumbers[j]
            
//             // check columns
//             out(array[i+j])
//             if (array[i+j].innerHTML == array[j].innerHTML){
//                 // out("hai")
//                 return checkAble()
//             }
//         }
//         break;
//     }
    
//     out(array[0].parentElement.children)
// }

// shuffle array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);

    return array
}
