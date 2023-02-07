// var timer 

const left = document.querySelector(".left")
const start = document.querySelector(".start")
const shuffle = document.querySelector(".shuffle")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

// var content

const content = document.querySelector(".container")
const cards = document.querySelectorAll(".card")
const mark = document.querySelectorAll(".questionmark")
const image = document.querySelectorAll(".image")

// var info 

const lost = document.querySelector(".lost")
const won = document.querySelector(".won")
const score = document.querySelector(".score")

// Alert can't click

cards.forEach(cant)
function cant(card){
    card.title = 'Click the "Start" button first'
}

// animasi cek kartu

let count = 0;
let firstPick = "";
let secondPick = "";
let numFirst,numSecond;
let correct = 0;

function animasi(){
    cards.forEach(function(card){
        card.title = ""
        card.classList.remove("peek2")
        card.addEventListener("click",function(){
            card.classList.add("clicked")

            if (count == 0){
                firstPick = card.getAttribute("fruits")
                numFirst = card.getAttribute("nmr")

                count++;
            }
            else {
                secondPick = card.getAttribute("fruits")
                numSecond = card.getAttribute("nmr")
                count = 0;

                if (firstPick == secondPick && numFirst !== numSecond){
                    const correctCards = document.querySelectorAll(`.card[fruits = ${firstPick}]`)
                    const correctImage = document.querySelectorAll(`.card[fruits = ${firstPick}] img`)

                    correctCards[0].classList.add("checked")
                    correctCards[1].classList.add("checked")

                    setTimeout(function(){
                        for (let i = 0 ; i <= 1 ; i++){
                            correctCards[i].classList.remove("clicked")
                            correctCards[i].classList.remove("tutup")
                            correctCards[i].style.pointerEvents = "none"
                        }
                    },700)

                    correct++;
                    
                }
                else {
                    const incorrenctCards = document.querySelectorAll(".card.clicked")

                    setTimeout(function(){
                        for (let i = 0 ; i<=1;i++){
                            incorrenctCards[i].classList.add("tutup")
                            incorrenctCards[i].classList.remove("clicked")
                        }    
                    }, 700);                
                }
            }
        })
    })
}

// timer - start - shuffle

var sec = 59;
start.addEventListener("click",function(){
    
    setTimeout(function(){
        const myTimer = setInterval(timer,1000)
        function timer(){
            if (sec < 10){
                sec = "0" + sec;
            }
            second.innerHTML = sec;
            minute.innerHTML = "00"
            sec--;
            // if (sec < 0){
            //     sec = 59
            //     setTimeout(function(){
            //         minute.innerHTML = "00"
            //     },1000)
            // }
            if (minute.innerHTML == "00" && second.innerHTML == "00"){
                setTimeout(function(){
                    clearInterval(myTimer)
                    if (correct !== 8){
                        lost.style.display = "flex"
                    }
                    content.style.display = "none"
                    left.style.display = "none"
                },990)
            }
            if (correct == 8){
                clearInterval(myTimer)
                setTimeout(function(){
                    content.style.display = "none"
                    won.style.display = "flex"
                    left.style.display = "none"
                    lost.style.display = "none"
                    let value = Math.floor(((parseInt(second.innerHTML)) / 48)*100)
                    if (value == 0){
                        score.innerHTML = "Score : " + `${value}` + "😛"
                    }
                    else{
                        score.innerHTML = "Score : " + `${value}`
                    }
                },900)
            }
        }
    },1300)

    start.disabled = "true"
    start.style.color = "black"

    cards.forEach(function(card){
        card.style.order = Math.floor(Math.random()*10000 + 1)
        card.style.pointerEvents = "auto"
        card.classList.add("peek1")

        const peek = setTimeout(peek12,1200)
        function peek12(){
            card.classList.add("peek2")
        }
        setTimeout(function(){
            card.classList.remove("peek1")
            card.classList.remove("peek2")
        },1700)
    })
    animasi()
})


// image.forEach(function(img){
//     img.classList.add("solid")
//     setTimeout(function(){
//         img.classList.remove("solid")
//     },1000)
// })

// mark.forEach(function(mrk){
//     mrk.classList.add("transparent")
//     setTimeout(function(){
//         mrk.classList.remove("transparent")
//     },1200)
// })
// card.forEach(function(el,i){

//     var gambar = []
//     var angka = -1;
    
//     el.addEventListener("click",function(){
    

//         card[i].style.transform = "scale3d(0,1,1)"
//         card[i].classList.add("animate")
//         img[i].style.opacity = "1"
//         mark[i].style.opacity = "0"

//         angka++;
//         gambar.push(img[i].src)  
//         console.log(gambar)
//     })
// })

// for (let i = 0 ; i < 16 ; i++){
//     var angka = 0;
//     var sumber = []
//     var kartu = []
//     var gambar = []
//     var tandaTanya = []
//     card[i].addEventListener("click",function(){
//         card[i].classList.add("animate");
//         // img[i].style.opacity = "1"
//         // mark[i].style.opacity = "0"
//         img[i].classList.add("solid")
//         mark[i].classList.add("transparent")

//         // angka++;
//         sumber.push(img[i].src)
//         console.log(sumber)

//         kartu.push(card[i]);
//         gambar.push(img[i])
//         tandaTanya.push(mark[i])

//         console.log(kartu,gambar,tandaTanya)

//         if (sumber.length == 2){        
//             kartu[0].classList.remove("animate")
//             if (sumber[0] == sumber[1] ){


//                 sumber.pop()
//                 sumber.pop()
//                 console.log(sumber)
//                 angka++;
//             }
//             else{

//                 sumber.pop()
//                 sumber.pop()
//                 console.log(sumber)
//             }
//         }
//     })
// }

// function pop(variabel){
//     variabel.pop()
// }

// var sumber = []
// var kartu = []
// var gambar = []
// var tanda = []
// cards.forEach(function(card,i){
//     card.addEventListener("click",function(){
//         cards[i].classList.add("animate");
//         img[i].style.opacity = "1"
//         mark[i].style.opacity = "0"
//         console.log(i)

//         sumber.push(img[i].src)
//         kartu.push(cards[i])
//         gambar.push(img[i])
//         tanda.push(mark[i])
//         console.log(sumber,kartu,gambar,tanda)
        
//         if (sumber.length == 2){
//             if (sumber[1] == sumber[0]){
//                 console.log("oke")
//                 sumber.pop()
//                 sumber.pop()
//             }
//             else {
//                 kartu[0].classList.add("animate1")
//                 gambar[0].style.transition = "all .3s 1.3s"
//                 gambar[0].style.opacity = "0"
//                 tanda[0].style.transition = "all .3s 1s"
//                 tanda[0].style.opacity = "1"
//                 // kartu[1].classList.add("animate2")
//                 // kartu[1].classList.add("animate1")
//                 // gambar[1].style.transition = "all .3s 1.6s"
//                 // gambar[1].classList.add("transparent")
//                 // tanda[1].style.transition = "all .3s 1.3s"
//                 // tanda[1].classList.add("solid")
//                 console.log("oke juga")
//                 sumber.pop()
//                 sumber.pop()
//             }
//         }
//     })
// })