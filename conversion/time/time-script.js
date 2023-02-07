// var cons = console

// ---------------------------------> input/output

const input = document.querySelector(".input")
const output = document.querySelector(".output")

const selectInput = document.querySelector("select[side='left']")
const selectOutput = document.querySelector("select[side='right']")

const convert = document.querySelector(".convert")

// ---------------------------------> convert

function power(a,b){
    let x = a;
    if (b == 0){
        return 1;
    }
    else if (b < 0){
        b = b * (-1)
        for (let i = 1 ; i <= b ; i++){
            a = a/x;
        }
        return a/x;
    }
    else {
        for (let i = 1 ; i < b ; i++){
            a = a*x;
        }
        return a;
    }
}

convert.addEventListener("click",function(){
    output.innerHTML = input.value*(power(60,(selectInput.value - selectOutput.value)))
})