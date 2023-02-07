const button = document.querySelector("button")
const body = document.querySelector("body")

button.addEventListener("click",function(){
    body.classList.toggle("biru-muda");
})

const button2 = document.createElement("button")
const isiButton2 = document.createTextNode("random")
button2.appendChild(isiButton2)
button2.setAttribute("type","button")

button.after(button2)

button2.addEventListener("click",function(){
    const r = Math.round(Math.random()*255 + 0)
    const g = Math.round(Math.random()*255 + 0)
    const b = Math.round(Math.random()*255 + 0)

    const r1 = Math.round(Math.random()*255 + 0)
    const g1 = Math.round(Math.random()*255 + 0)
    const b1 = Math.round(Math.random()*255 + 0)

    body.style.background = "linear-gradient(to right,rgb("+ r +","+ g +","+ b +"),rgb("+ r1 +","+ g1 +","+ b1 +"))"
})

const sliderRed = document.querySelector("input[name=merah]")
const sliderGreen = document.querySelector("input[name=hijau]")
const sliderBlue = document.querySelector("input[name=biru]")

sliderRed.addEventListener("input",function(){
    const a = sliderRed.value;
    const b = sliderGreen.value;
    const c = sliderBlue.value;

    body.style.background = "rgb("+ a +","+ b +","+ c +")"
})

sliderGreen.addEventListener("input",function(){
    const a = sliderRed.value;
    const b = sliderGreen.value;
    const c = sliderBlue.value;

    body.style.background = "rgb("+ a +","+ b +","+ c +")"
})

sliderBlue.addEventListener("input",function(){
    const a = sliderRed.value;
    const b = sliderGreen.value;
    const c = sliderBlue.value;

    body.style.background = "rgb("+ a +","+ b +","+ c +")"
})

body.addEventListener("mousemove",function(event){
    const posX = Math.round((event.clientX/window.innerWidth)*255)
    const posY = Math.round((event.clientY/window.innerHeight)*255)
    body.style.background = "rgb("+ posX +", "+ posY +", 100)"
})