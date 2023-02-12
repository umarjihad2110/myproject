var out = console.log.bind(document)

window.addEventListener("load",function(){
    document.querySelector(".names").style.width = `${document.querySelector(".content").clientWidth}px`
})

// input the names
const namesInput = document.querySelector("#name")
const nameList = document.querySelector(".name-list")

const sumPeople = document.querySelector("#people")
const sumGroups = document.querySelector("#groups")

const generate = document.querySelector(".generate")

var arrNames = []

let numberList = 1
namesInput.addEventListener("keydown",function(el){
    var x = el.key
    var name = namesInput.value
    var people = parseInt(sumPeople.value)

    if (name != "" && x == "Enter" && numberList <= people){

        // add names to array
        arrNames.push(name)
        
        if (numberList == people){
            generate.style.display = "inline"
        }
        
        else {
            generate.style.display = "none"
        }

        var number = document.createElement("span")
        var member = document.createElement("span")
        var li = document.createElement("li")

        number.classList.add("color")

        number.innerText = numberList
        member.innerText = name

        number.title = "Click to remove the name"

        li.appendChild(number)
        li.appendChild(member)

        nameList.appendChild(li)
        nameList.style.display = "flex"

        // remove names form list
        number.addEventListener("click",function(){
            nameList.removeChild(number.parentElement)
            let p = parseInt(number.innerText)
            numberList--

            document.querySelectorAll(".color").forEach(function(el){
                let q = parseInt(el.innerText)
                if (q > p){
                    q--
                    el.innerText = q
                }
            })

            // remove names from array
            let index = arrNames.indexOf(name)
            arrNames.splice(index,1)

            let q = parseInt(sumPeople.value)

            if (q != numberList - 1){
                generate.style.display = "none"
                result.innerHTML = ''
            }

            else {
                generate.style.display = "inline"
            }
        })

        // number of people change
        sumPeople.addEventListener("keyup",function(){
            let p = parseInt(sumPeople.value)

            if (p != numberList - 1){
                generate.style.display = "none"
                result.innerHTML = ''
            }

            else{
                generate.style.display = "inline"
            }
        })

        // the number of group change
        sumGroups.addEventListener("keyup",function(){
            let p = parseInt(sumGroups.value)

            if (p != numberList - 1){
                result.innerHTML = ''
            }
        })

        numberList++

        namesInput.value = ""
    }
    
})

// generate groups
const result = document.querySelector(".result")

// click genearate button
let check = 0
generate.addEventListener("click",function(){
    let p = parseInt(sumPeople.value)
    let q = numberList - 1
    
    // the number doesn't match
    if (p != q){
        alert("The number of people does not match")
    }

    else if (p == q){
        result.innerHTML = ""
        shuffleArray()
        generateGroup()
    }
})

// input list to result element
function generateGroup(){
    

    let p = parseInt(sumPeople.value)
    let q = parseInt(sumGroups.value)

    // make ul
    for (let i = 0 ; i < q ; i++){
        var ul = document.createElement("ol")
        ul.classList.add("list-result")

        var h5 = document.createElement("h5")
        if (i == 0){
            h5.innerText = "1st Group"
        }
        else if (i == 1){
            h5.innerText = "2nd Group"
        }
        else {
            h5.innerText = `${i+1}th Group` 
        }
        ul.appendChild(h5)
        
        // input li into ul
        for (let j = 0 ; j < Math.floor(p/q) ; j++){
            var li = document.createElement("li")
            li.classList.add("list-item")
            
            ul.appendChild(li)
        }

        result.appendChild(ul)
    }

    const listResult = document.querySelectorAll(".list-result")

    // input the rest of li into ul
    if (p % q != 0){
        for (let j = 0 ; j < p % q ; j++){
            var li = document.createElement("li")
            li.classList.add("list-item")
            
            listResult[j].appendChild(li)
            result.appendChild(ul)
        }
    }

    const listItem = document.querySelectorAll(".list-item")

    listItem.forEach(function(el,i){
        el.innerText = arrNames[i]
    })
}

// shuffle array of names
function shuffleArray() {
    arrNames.sort(() => Math.random() - 0.5);
    return arrNames
}
