var out = console.log.bind(document)

const hour = document.querySelector(".hour-value")
const minute = document.querySelector(".minute-value")
const second = document.querySelector(".second-value")
const milisecond = document.querySelector(".milisecond-value")

const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")

var timerMilSec = null
function milSec(){
    let milsec = 0
    timerMilSec = setInterval(() => {
        milsec++;
        if (milsec == 100){
            milsec = 0
        }
        if (milsec < 10){
            milisecond.innerHTML = `0${milsec}`
        }
        else {
            milisecond.innerHTML = `${milsec}`
        }
    }, 10);
}

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

start.addEventListener("click",function(){
    milSec()
    sec()
    min()
    hours()
});

stop.addEventListener("click",function(){
    clearInterval(timerMilSec)
    clearInterval(timerSec)
    clearInterval(timerMin)
    clearInterval(timerHour)
})

reset.addEventListener("click",function(){
    clearInterval(timerMilSec)
    clearInterval(timerSec)
    clearInterval(timerMin)
    clearInterval(timerHour)
    milisecond.innerHTML = "00"
    second.innerHTML = "00"
    minute.innerHTML = "00"
    hour.innerHTML = "00"
})