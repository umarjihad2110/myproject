//---------------------------------------> input output

const input = document.querySelector(".input")
const output = document.querySelector(".output")

const selectInput = document.querySelector("select[side='left']")
const selectOutput = document.querySelector("select[side='right']")

const convert = document.querySelector(".convert")

// --------------------------------------> convert

convert.addEventListener("click",function(){

    if (input.value == "") {
        output.innerHTML = "0"
    }

    else if (selectOutput.value == selectInput.value){
        output.innerHTML = input.value
    }

    else if (selectInput.value == "c"){
        if (selectOutput.value == "f"){
            output.innerHTML = input.value*(9/5) + 32 
        }
        else if (selectOutput.value == "r"){
            output.innerHTML = input.value*(4/5)
        }
        else{
            output.innerHTML = parseInt(input.value) + 273.15
        }
    }

    else if (selectInput.value == "f"){
        if (selectOutput.value == "c"){
            output.innerHTML = (input.value - 32)*(5/9) 
        }
        else if (selectOutput.value == "r"){
            output.innerHTML = (input.value - 32)*(4/9)
        }
        else{
            output.innerHTML = (input.value - 32)*(9/5) + 273.15
        }
    }
    else if (selectInput.value == "r"){
        if (selectOutput.value == "c"){
            output.innerHTML = input.value*(5/4) 
        }
        else if (selectOutput.value == "f"){
            output.innerHTML = input.value*(9/4) + 32
        }
        else{
            output.innerHTML = input.value*(5/4) + 273.15
        }
    }
    else if (selectInput.value == "k"){
        if (selectOutput.value == "c"){
            output.innerHTML = parseInt(input.value) - 273.15 
        }
        else if (selectOutput.value == "f"){
            output.innerHTML = (input.value - 273.15)*(9/5) + 32
        }
        else{
            output.innerHTML = (input.value - 273.15)*(4/5)
        }
    }

})

// c/5 = (f-32)/9 = r/4 = (k - 273.15)/5