var out = console.log.bind(document)

// initialization

const output = document.querySelector(".password span:nth-child(2)")
const star = document.querySelector(".password .star")
const length = document.querySelector(".length input")
const upper = document.querySelector(".upper input")
const lower = document.querySelector(".lower input")
const number = document.querySelector(".num input")
const symbol = document.querySelector(".symbol input")
const button = document.querySelector("button")
const copy = document.querySelector(".output svg")

// array of password

var upperLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerLetter = []

for (let i = 0 ; i < upperLetter.length ; i++){
    lowerLetter.push(upperLetter[i].toLowerCase())
}

var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var symbols = ["`","~","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|",":",";",`"`,",",".","<",">","/","?"]

// output margin

setInterval(() => {
    document.querySelector(".password").style.borderRight = "0"
}, 500);

setInterval(() => {
    document.querySelector(".password").style.borderRight = "1px solid black"
}, 1000);

// generate password

button.addEventListener("click",function(){
    if (length.value < 8 || length.value > 20){
        output.innerHTML = "Wrong format"
        star.style.display = "inline"
    }
    else {

        var withUpper = false , withLower = false , withNumber = false , withSymbol = false

        if (upper.checked == true){
            withUpper = true;
        }
        if (lower.checked == true){
            withLower = true;
        }
        if (number.checked == true){
            withNumber = true
        }
        if (symbol.checked == true){
            withSymbol = true
        }
        
        var password = "";
        var random;
        
        for (let i = 1 ; i <= length.value ; i++){ 

            // only uppercase
            if (withUpper && !withLower && !withNumber && !withSymbol){
                random = Math.floor(Math.random()*26 + 0)
                password += upperLetter[random]
                star.style.display = "none"
            }

            // only lowercase 
            else if (!withUpper && withLower && !withNumber && !withSymbol){
                random = Math.floor(Math.random()*26 + 0)
                password += lowerLetter[random]
                star.style.display = "none"
            }

            // only numbers
            else if (!withUpper && !withLower && withNumber && !withSymbol){
                random = Math.floor(Math.random()*10 + 0)
                password += numbers[random]
                star.style.display = "none"
            }

            // only symbols
            else if (!withUpper && !withLower && !withNumber && withSymbol){
                random = Math.floor(Math.random()*29 + 0)
                password += symbols[random]
                star.style.display = "none" 
            }

            // upercase & lowercase
            else if (withUpper && withLower && !withNumber && !withSymbol){
                random = Math.floor(Math.random()*2 + 1)

                if (random == 1){
                    random = Math.floor(Math.random()*26 + 0)
                    password += upperLetter[random]
                }
                else if (random == 2){
                    random = Math.floor(Math.random()*26 + 0)
                    password += lowerLetter[random]
                }
                star.style.display = "none"
            }

            // uppercase & numbers
            else if (withUpper && !withLower && withNumber && !withSymbol){
                random = Math.floor(Math.random()*2 + 1)

                if (random == 1){
                    random = Math.floor(Math.random()*26 + 0)
                    password += upperLetter[random]
                }
                else if (random == 2){
                    random = Math.floor(Math.random()*10 + 0)
                    password += `${numbers[random]}`
                }
                star.style.display = "none"
            }

            // uppercase & symbols
            else if (withUpper && !withLower && !withNumber && withSymbol){
                random = Math.floor(Math.random()*2 + 1)

                if (random == 1){
                    random = Math.floor(Math.random()*26 + 0)
                    password += upperLetter[random]
                }
                else if (random == 2){
                    random = Math.floor(Math.random()*29 + 0)
                    password += symbols[random]
                }
                star.style.display = "none"
            }

            // lowercase & numbers
            else if (!withUpper && withLower && withNumber && !withSymbol){
                random = Math.floor(Math.random()*2 + 1)

                if (random == 1){
                    random = Math.floor(Math.random()*26 + 0)
                    password += lowerLetter[random]
                }
                else if (random == 2){
                    random = Math.floor(Math.random()*10 + 0)
                    password += `${numbers[random]}`
                }
                star.style.display = "none"
            } 

            // lowercase & symbols
            else if (!withUpper && withLower && !withNumber && withSymbol){
                random = Math.floor(Math.random()*2 + 1)

                if (random == 1){
                    random = Math.floor(Math.random()*26 + 0)
                    password += lowerLetter[random]
                }
                else if (random == 2){
                    random = Math.floor(Math.random()*29 + 0)
                    password += symbols[random]
                }
                star.style.display = "none"
            }

            // numbers & symbols
            else if (!withUpper && !withLower && withNumber && withSymbol){
                random = Math.floor(Math.random()*2 + 1)

                if (random == 1){
                    random = Math.floor(Math.random()*10 + 0)
                    password += `${numbers[random]}`
                }
                else if (random == 2){
                    random = Math.floor(Math.random()*29 + 0)
                    password += symbols[random]
                }
                star.style.display = "none"
            }

            // uppercase & lowercase & numbers
            else if (withUpper && withLower && withNumber && !withSymbol){
                random = Math.floor(Math.random()*3 + 1)

                if (random == 1){
                    random = Math.floor(Math.random()*26 + 0)
                    password += upperLetter[random]
                }
                else if (random == 2){
                    random = Math.floor(Math.random()*26 + 0)
                    password += lowerLetter[random]
                }
                else if (random == 3){
                    random = Math.floor(Math.random()*10 + 0)
                    password += `${numbers[random]}`
                }
                star.style.display = "none"
            }

            // uppercase & lowercase & symbols
            else if (withUpper && withLower && !withNumber && withSymbol){
                random = Math.floor(Math.random()*3 + 1)

                if (random == 1){
                    random = Math.floor(Math.random()*26 + 0)
                    password += upperLetter[random]
                }
                else if (random == 2){
                    random = Math.floor(Math.random()*26 + 0)
                    password += lowerLetter[random]
                }
                else if (random == 3){
                    random = Math.floor(Math.random()*29 + 0)
                    password += symbols[random]
                }
                star.style.display = "none"
            }

            // uppercase & numbers & symbols
            else if (withUpper && !withLower && withNumber && withSymbol){
                random = Math.floor(Math.random()*3 + 1)

                if (random == 1){
                    random = Math.floor(Math.random()*26 + 0)
                    password += upperLetter[random]
                }
                else if (random == 2){
                    random = Math.floor(Math.random()*10 + 0)
                    password += `${numbers[random]}`
                }
                else if (random == 3){
                    random = Math.floor(Math.random()*29 + 0)
                    password += symbols[random]
                }
                star.style.display = "none"
            }

            // lowercase & numbers & symbols
            else if (!withUpper && withLower && withNumber && withSymbol){
                random = Math.floor(Math.random()*3 + 1)

                if (random == 1){
                    random = Math.floor(Math.random()*26 + 0)
                    password += lowerLetter[random]
                }
                else if (random == 2){
                    random = Math.floor(Math.random()*10 + 0)
                    password += `${numbers[random]}`
                }
                else if (random == 3){
                    random = Math.floor(Math.random()*29 + 0)
                    password += symbols[random]
                }
                star.style.display = "none"
            }

            // uppercase & lowercase & numbers & symbols
            else if (withUpper && withLower && withNumber && withSymbol){
                random = Math.floor(Math.random()*4 + 1)

                if (random == 1){
                    random = Math.floor(Math.random()*26 + 0)
                    password += upperLetter[random]
                }
                else if (random == 2){
                    random = Math.floor(Math.random()*26 + 0)
                    password += lowerLetter[random]
                }
                else if (random == 3){
                    random = Math.floor(Math.random()*10 + 0)
                    password += `${numbers[random]}`
                }
                else if (random == 4){
                    random = Math.floor(Math.random()*29 + 0)
                    password += symbols[random]
                }
                star.style.display = "none"
            }

            // all false 
            else {
                password = "Wrong format"
                star.style.display = "inline"
            }

            // random = Math.floor(Math.random()*4 + 1);

            // if (random == 1){
            //     random = Math.floor(Math.random()*26 + 0)
            //     password += upperLetter[random]
            // }
            // else if (random == 2){
            //     random = Math.floor(Math.random()*26 + 0)
            //     password += lowerLetter[random]
            // }
            // else if (random == 3){
            //     random = Math.floor(Math.random()*10 + 0)
            //     password += `${numbers[random]}`
            // }
            // else if (random == 4){
            //     random = Math.floor(Math.random()*29 + 0)
            //     password += symbols[random]
            // }
        }

        output.innerHTML = password

    }

    // length.value = ""
    // upper.checked = false
    // lower.checked = false
    // symbol.checked = false
    // number.checked = false
})

// copy password

copy.addEventListener("click",function(){

    // Copy the text inside the text field
    navigator.clipboard.writeText(output.innerHTML);

    // Alert the copied text
    alert("Copied the text: " + output.innerHTML);
})