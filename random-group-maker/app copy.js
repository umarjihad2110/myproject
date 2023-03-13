var out = console.log.bind(document)

window.addEventListener("load",function(){

    // input width
    document.querySelector(".names_1").style.width = `${document.querySelector(".content").clientWidth}px`

    if (window.matchMedia("(min-width: 600px)").matches){
        document.querySelector("#groups").style.width = `${document.querySelector(".groups").clientWidth - (document.querySelector(".groups label").clientWidth + 5)}px`
    }

    // enter height and width
    document.querySelector(".enter").style.height = `${document.querySelector("#name_1").clientHeight}px`
    document.querySelector(".enter").style.width = `${document.querySelector("#name_1").clientHeight}px`

    // name input padding
    document.querySelector("#name_1").style.paddingRight = `${document.querySelector(".enter").clientWidth + 5}px`

    out()
})

// -------------> type_1

// set the focus input
const sumPeople = document.querySelector("#people")
const sumGroups = document.querySelector("#groups")

sumPeople.addEventListener("keyup",function(el){
    let x = el.key
    let p = el.value

    if (x == "Enter" && p != ""){
        sumGroups.focus()
    }
})

sumGroups.addEventListener("keyup",function(el){
    let x = el.key
    let p = el.value

    if (x == "Enter" && p != ""){
        namesInput.focus()
    }
})

// click enter
const enter = document.querySelector(".enter")

enter.addEventListener("click",function(){
    let name = namesInput.value
    let people = parseInt(sumPeople.value)
    let groups = parseInt(sumGroups.value)

    if (name != "" && isNaN(people) && isNaN(groups)){
        alert("Please input number of people and group first")
    }
    
    else if (name != "" && isNaN(people)){
        alert("Please input number of people first")
    }

    else if (name != "" && isNaN(groups)){
        alert("Please input number of group first")
    }

    else if (name != "" && numberList <= people){
        if (name == `n=${people}` && numberList == 1){
            autoList()
        }
        else {
            nameToList();
        }
    }
})

// input the names
const namesInput = document.querySelector("#name_1")
const nameList = document.querySelector(".name-list")

const generate = document.querySelector(".generate")
const clear = document.querySelector(".clear")

var arrNames = []

let numberList = 1
namesInput.addEventListener("keydown",function(el){
    let x = el.key
    let name = namesInput.value
    let people = parseInt(sumPeople.value)
    let groups = parseInt(sumGroups.value)

    if (name != "" && x == "Enter" && isNaN(people) && isNaN(groups)){
        alert("Please input number of people and group first")
    }

    else if (name != "" && x == "Enter" && isNaN(people)){
        alert("Please input number of people first")
    }

    else if (name != "" && x == "Enter" && isNaN(groups)){
        alert("Please input number of group first")
    }

    else if (name != "" && x == "Enter" && numberList <= people){
        if (name == `n=${people}` && numberList == 1){
            autoList()
        }
        else {
            nameToList();
        }
    }  
})

// function input names
function nameToList(){
    let name = namesInput.value
    let people = parseInt(sumPeople.value)

    // add names to array
    arrNames.push(name)
      
    // generate button display
    if (numberList == people){
        generate.style.display = "inline"
    }
    
    else {
        generate.style.display = "none"
    }

    // clear button display
    clear.style.display = "inline"

    // clear all the names
    clear.addEventListener("click",function(){
        nameList.innerHTML = ''
        generate.style.display = "none"
        result.innerHTML = ""
        clear.style.display = "none"
        numberList = 1
    })

    var number = document.createElement("span")
    var member = document.createElement("span")
    var li = document.createElement("li")

    number.classList.add("color")

    // label number on list
    number.innerText = numberList
    member.innerText = name

    number.title = "Click to remove the name"

    // input the name and number label into list
    li.appendChild(number)
    li.appendChild(member)

    nameList.appendChild(li)
    nameList.style.display = "flex"

    // remove names form list
    number.addEventListener("click",function(){
        nameList.removeChild(number.parentElement)
        let p = parseInt(number.innerText)
        numberList--

        // number innertext
        document.querySelectorAll(".color").forEach(function(el){
            let q = parseInt(el.innerText)
            if (q > p){
                q--
                el.innerText = q
            }
        })

        // remove names from array
        let index = arrNames.indexOf(number.nextElementSibling)
        arrNames.splice(index,1)
        
        // clear button display
        if (arrNames.length == 0){
            clear.style.display = "none"
        }

        let q = parseInt(sumPeople.value)
  
        // generate button display
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
          
        // generate button display
        if (p != numberList - 1){
            generate.style.display = "none"
            result.innerHTML = ''
        }

        else{
            generate.style.display = "inline"
        }
    })

    // the number of group change
    sumGroups.addEventListener("keyup",function(el){
        let p = parseInt(sumGroups.value)
        let array = ["Backspace","ArrowUp","ArrowDown","0","1",'2',"3","4",'5',"6","7",'8',"9"]
        let x = el.key
        let q = parseInt(sumPeople.value)
  
        // generate button display
        if (p != numberList - 1 && array.includes(x)){
            result.innerHTML = ''
        }

        if (sumGroups.value == ""){
            generate.style.display = "none"
        }

        else {
            if (numberList > 1 && q == numberList - 1){
                generate.style.display = "inline"
            }
        }
    })

    numberList++;

    namesInput.value = "";
    namesInput.focus();
}

function autoList(){
    let people = parseInt(sumPeople.value)

    numberList = people

    // generate button display
    if (numberList == people){
        generate.style.display = "inline"
    }
    
    else {
        generate.style.display = "none"
    }

    // clear button display
    clear.style.display = "inline"

    // clear all the names
    clear.addEventListener("click",function(){
        nameList.innerHTML = ''
        generate.style.display = "none"
        result.innerHTML = ""
        clear.style.display = "none"
        numberList = 1
    })

    for (let i = 1 ; i <= people ; i++){
        // add names to array
        arrNames.push(i)

        var number = document.createElement("span")
        var member = document.createElement("span")
        var li = document.createElement("li")

        number.classList.add("color")

        // label number on list
        number.innerText = i
        member.innerText = i

        number.title = "Click to remove the name"

        // input the name and number label into list
        li.appendChild(number)
        li.appendChild(member)

        nameList.appendChild(li)
        nameList.style.display = "flex"
    }

    var numbers = document.querySelectorAll(".color")

    // remove names form list
    numbers.forEach(function(number){
        number.addEventListener("click",function(){

            nameList.removeChild(number.parentElement)
            let p = parseInt(number.innerText)
            numberList--
    
            // number innertext
            document.querySelectorAll(".color").forEach(function(el){
                let q = parseInt(el.innerText)
                if (q > p){
                    q--
                    el.innerText = q
                }
            })
    
            // remove names from array
            let index = arrNames.indexOf(number.nextElementSibling)
            arrNames.splice(index,1)
            
            // clear button display
            if (arrNames.length == 0){
                clear.style.display = "none"
            }
    
            let q = parseInt(sumPeople.value)
      
            // generate button display
            if (q != numberList - 1){
                generate.style.display = "none"
                result.innerHTML = ''
            }
    
            else {
                generate.style.display = "inline"
            }
        })
    })

    // number of people change
    sumPeople.addEventListener("keyup",function(){
        let p = parseInt(sumPeople.value)
          
        // generate button display
        if (p != numberList - 1){
            generate.style.display = "none"
            result.innerHTML = ''
        }

        else{
            generate.style.display = "inline"
        }
    })

    // the number of group change
    sumGroups.addEventListener("keyup",function(el){
        let p = parseInt(sumGroups.value)
        let array = ["Backspace","ArrowUp","ArrowDown","0","1",'2',"3","4",'5',"6","7",'8',"9"]
        let x = el.key
        let q = parseInt(sumPeople.value)
  
        // generate button display
        if (p != numberList - 1 && array.includes(x)){
            result.innerHTML = ''
        }

        if (sumGroups.value == ""){
            generate.style.display = "none"
        }

        else {
            if (numberList > 1 && q == numberList - 1){
                generate.style.display = "inline"
            }
        }
    })

    numberList++
    namesInput.value = "";
    namesInput.focus();
}

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

// -------------> type_2


// input list to result element
function generateGroup(){
    
    let p = parseInt(sumPeople.value)
    let q = parseInt(sumGroups.value)

    // make ul
    for (let i = 0 ; i < q ; i++){
        var ul = document.createElement("ul")
        ul.classList.add("list-result")

        var h5 = document.createElement("h5")
        if (i == 0){
            h5.innerText = "1st Group"
        }
        else if (i == 1){
            h5.innerText = "2nd Group"
        }
        else if (i == 2){
            h5.innerText = "3rd Group"
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
