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
})

// change type
const change = document.querySelector(".change-type")

const type1 = document.querySelector(".names_1")
const type2 = document.querySelector(".names_2")

const autoInfo = document.querySelector(".auto-info")

change.addEventListener("click",function(){
    type1.classList.toggle("show")
    type1.classList.toggle("hide")

    type2.classList.toggle("show")
    type2.classList.toggle("hide")

    autoInfo.classList.toggle("show-inline")
    autoInfo.classList.toggle("hide")

    if (type2.classList.contains("show")){
        generate.classList.add("show-inline")
        generate.classList.remove("hide")
    }

    else if (type1.classList.contains("show")){
        generate.classList.add("hide")
        generate.classList.remove("show-inline")
    }
    
    clear.classList.add("hide")
    clear.classList.remove("show-inline")

    result.innerHTML = ""
    nameList.innerHTML = ""
    numberList = 1
    arrNames = []

    sumPeople.focus()
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

    if (x == "Enter" && p != "" && type1.classList.contains("show")){
        namesInput.focus()
    }
    else if (x == "Enter" && p != "" && type2.classList.contains("show")){
        nameListInput.focus()
    }
})

// click enter
const enter = document.querySelector(".enter")

enter.addEventListener("click",function(){
    let name = namesInput.value
    let people = parseInt(sumPeople.value)
    let groups = parseInt(sumGroups.value)

    if (name != "" && people < groups){
        alert("The number of groups is more than people")
    }

    else if (name != "" && isNaN(people) && isNaN(groups)){
        alert("Please enter number of people and group first")
    }
    
    else if (name != "" && isNaN(people)){
        alert("Please enter number of people first")
    }

    else if (name != "" && isNaN(groups)){
        alert("Please enter number of group first")
    }

    else if (name != "" && numberList <= people && people >= groups){
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

let arrNames = []

let numberList = 1
namesInput.addEventListener("keydown",function(el){
    let x = el.key
    let name = namesInput.value
    let people = parseInt(sumPeople.value)
    let groups = parseInt(sumGroups.value)

    if (name != "" && x == "Enter" && people < groups){
        alert("The number of groups is more than people")
    }

    else if (name != "" && x == "Enter" && isNaN(people) && isNaN(groups)){
        alert("Please input number of people and group first")
    }

    else if (name != "" && x == "Enter" && isNaN(people)){
        alert("Please input number of people first")
    }

    else if (name != "" && x == "Enter" && isNaN(groups)){
        alert("Please input number of group first")
    }

    else if (name != "" && x == "Enter" && numberList <= people && people >= groups){
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
        generate.classList.remove("hide")
        generate.classList.add("show-inline")
    }
    
    else {
        generate.classList.add("hide")
        generate.classList.remove("show-inline")
    }

    // clear button display
    clear.classList.add("show-inline")
    clear.classList.remove("hide")

    // clear all the names
    clear.addEventListener("click",function(){
        nameList.innerHTML = ''
        result.innerHTML = ""
        numberList = 1
        arrNames = []
        
        generate.classList.add("hide")
        generate.classList.remove("show-inline")

        clear.classList.add("hide")
        clear.classList.remove("show-inline")
        
        namesInput.focus();
    })

    let number = document.createElement("span")
    let member = document.createElement("span")
    let li = document.createElement("li")

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
            clear.classList.add("hide")
            clear.classList.remove("show-inline")
        }

        let q = parseInt(sumPeople.value)
  
        // generate button display
        if (q != numberList - 1){
            generate.classList.add("hide")
            generate.classList.remove("show-inline")

            result.innerHTML = ''
        }

        else {
            clear.classList.add("show-inline")
            clear.classList.remove("hide")
        }
    })

    // number of people change
    sumPeople.addEventListener("keyup",function(){

        if (type1.classList.contains("show")){
            let p = parseInt(sumPeople.value)
            
            // generate button display
            if (p != numberList - 1){
                generate.classList.add("hide")
                generate.classList.remove("show-inline")
                
                result.innerHTML = ''
            }
            
            else{
                generate.classList.add("show-inline")
                generate.classList.remove("hide")
            }
        }
    })

    // the number of group change
    sumGroups.addEventListener("keyup",function(el){
        
        if (type1.classList.contains("show")){
            let p = parseInt(sumGroups.value)
            let array = ["Backspace","ArrowUp","ArrowDown","0","1",'2',"3","4",'5',"6","7",'8',"9"]
            let x = el.key
            let q = parseInt(sumPeople.value)
    
            // generate button display
            if (p != numberList - 1 && array.includes(x)){
                result.innerHTML = ''
            }

            if (sumGroups.value == ""){
                generate.classList.add("hide")
                generate.classList.remove("show-inline")
            }

            else {
                if (numberList > 1 && q == numberList - 1){
                    generate.classList.add("show-inline")
                    generate.classList.remove("hide")
                }
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
        generate.classList.add("show-inline")
        generate.classList.remove("hide")
    }
    
    else {
        generate.classList.add("hide")
        generate.classList.remove("show-inline")
    }

    // clear button display
    clear.classList.add("show-inline")
    clear.classList.remove("hide")

    // clear all the names
    clear.addEventListener("click",function(){
        nameList.innerHTML = ''
        result.innerHTML = ""
        numberList = 1
        arrNames = []
        
        generate.classList.add("hide")
        generate.classList.remove("show-inline")

        clear.classList.add("none")
        clear.classList.remove("show-inline")
        
        namesInput.focus();
    })

    for (let i = 1 ; i <= people ; i++){
        // add names to array
        arrNames.push(i)

        let number = document.createElement("span")
        let member = document.createElement("span")
        let li = document.createElement("li")

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

    let numbers = document.querySelectorAll(".color")

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
                clear.classList.add("hide")
                clear.classList.remove("show-inline")
            }
    
            let q = parseInt(sumPeople.value)
      
            // generate button display
            if (q != numberList - 1){
                generate.classList.add("hide")
                generate.classList.remove("show-inline")
                
                result.innerHTML = ''
            }
    
            else {
                generate.classList.add("show-inline")
                generate.classList.remove("hide")
            }
        })
    })

    // number of people change
    sumPeople.addEventListener("keyup",function(){
        
        if (type1.classList.contains("show")){
            let p = parseInt(sumPeople.value)
            
            // generate button display
            if (p != numberList - 1){
                generate.classList.add("hide")
                generate.classList.remove("show-inline")
                
                result.innerHTML = ''
            }
            
            else{
                generate.classList.add("show-inline")
                generate.classList.remove("hide")
            }
        }
    })

    // the number of group change
    sumGroups.addEventListener("keyup",function(el){
        
        if (type1.classList.contains("show")){
            let p = parseInt(sumGroups.value)
            let array = ["Backspace","ArrowUp","ArrowDown","0","1",'2',"3","4",'5',"6","7",'8',"9"]
            let x = el.key
            let q = parseInt(sumPeople.value)
            
            // generate button display
            if (p != numberList - 1 && array.includes(x)){
                result.innerHTML = ''
            }
            
            if (sumGroups.value == ""){
                generate.classList.add("hide")
                generate.classList.remove("show-inline")
            }
            
            else {
                if (numberList > 1 && q == numberList - 1){
                    generate.classList.add("show-inline")
                    generate.classList.remove("hide")
                }
            }
        }
    })

    numberList++
    namesInput.value = "";
    namesInput.focus();
}

// -------------> type_2
const nameListInput = document.querySelector("#name_2")

// generate groups
const result = document.querySelector(".result")

// click genearate button
let check = 0
generate.addEventListener("click",function(){
    
    // get people and group number
    let people = parseInt(sumPeople.value)
    let groups = parseInt(sumGroups.value)

    if (type1.classList.contains("show")){
        let q = numberList - 1
        
        // the number doesn't match
        if (people < groups){
            alert("The number of groups is more than people")
        }

        else if (people != q){
            alert("The number of people does not match")
        }

        // number is matching
        else if (people == q){
            result.innerHTML = ""
            arrNames = shuffleArray(arrNames)
            generateGroup("type1")
        }
    }

    else if (type2.classList.contains("show")){

        // textarea value into array
        arrNames = nameListInput.value.split("\n")
        
        for (let i = 0 ; i < arrNames.length ; i++){
            if (arrNames[i] == ""){
                let index = arrNames.indexOf(arrNames[i])
                
                arrNames.splice(index,1)
            }
        } 

        if (people < groups){
            alert("The number of groups is more than people")
        }

        else if (isNaN(people) && isNaN(groups)){
            alert("Please enter number of people and group first")
        }
        
        else if (isNaN(people)){
            alert("Please enter number of people first")
        }
    
        else if (isNaN(groups)){
            alert("Please enter number of group first")
        }

        else if (nameListInput.value == ""){
            alert("Please enter your name list first")
        }
        
        else if (people != arrNames.length){
            alert("The number of people does not match")
        }
        
        // number is matching
        else if (people == arrNames.length && people >= groups){
            result.innerHTML = ""
            arrNames = shuffleArray(arrNames)
            generateGroup("type2")
        }
    }
})

// input list to result element
function generateGroup(type){
    
    let p = parseInt(sumPeople.value)
    let q = parseInt(sumGroups.value)

    if (type == "type1"){

        // make ul
        for (let i = 0 ; i < q ; i++){
            let ul = document.createElement("ul")
            ul.classList.add("list-result")

            let h5 = document.createElement("h5")
            
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
                let li = document.createElement("li")
                li.classList.add("list-item")
                
                ul.appendChild(li)
            }

            result.appendChild(ul)
        }

        const listResult = document.querySelectorAll(".list-result")

        // input the rest of li into ul
        if (p % q != 0){
            for (let j = 0 ; j < p % q ; j++){
                let li = document.createElement("li")
                li.classList.add("list-item")
                
                listResult[j].appendChild(li)
                result.insertBefore(listResult[(p % q) - 1 - j],result.children[0])
            }
        }

        const listItem = document.querySelectorAll(".list-item")

        listItem.forEach(function(el,i){
            el.innerText = arrNames[i]
        })
    }

    else if (type == "type2"){
        
        // make ul
        for (let i = 0 ; i < q ; i++){
            let ul = document.createElement("ul")
            ul.classList.add("list-result")

            let h5 = document.createElement("h5")
            
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
                let li = document.createElement("li")
                li.classList.add("list-item")
                
                ul.appendChild(li)
            }

            result.appendChild(ul)
        }

        // input the rest of li into ul
        const listResult = document.querySelectorAll(".list-result")

        if (p % q != 0){
            for (let j = 0 ; j < p % q ; j++){
                let li = document.createElement("li")
                li.classList.add("list-item")
                
                listResult[j].appendChild(li)
                result.insertBefore(listResult[(p % q) - 1 - j],result.children[0])
            }
        }

        const listItem = document.querySelectorAll(".list-item")

        listItem.forEach(function(el,i){
            el.innerText = arrNames[i]
        })

        // click clear button
        clear.classList.add("show-inline")
        clear.classList.remove("hide")

        clear.addEventListener("click",function(){
            
            // reset
            nameList.innerHTML = ''
            result.innerHTML = ""
            arrNames = []

            clear.classList.add("hide")
            clear.classList.remove("show-inline")
            
            namesInput.focus();
        })

        // the number of people change
        sumPeople.addEventListener("keyup",function(el){
            if (type2.classList.contains("show")){
                let key = el.key
                let array = ["Backspace","ArrowUp","ArrowDown","0","1",'2',"3","4",'5',"6","7",'8',"9"]
        
                // clear button display
                if (array.includes(key)){
                    result.innerHTML = ''
                    arrNames = []

                    clear.classList.add("hide")
                    clear.classList.remove("show-inline")
                }
            }
        })

        // the number of group change
        sumGroups.addEventListener("keyup",function(el){
            
            if (type2.classList.contains("show")){
                
                let key = el.key
                let array = ["Backspace","ArrowUp","ArrowDown","0","1",'2',"3","4",'5',"6","7",'8',"9"]
        
                // generate button display
                if (array.includes(key)){
                    result.innerHTML = ''
                    arrNames = []

                    clear.classList.add("hide")
                    clear.classList.remove("show-inline")
                }
            }
        })
    }
}

// shuffle array of names
function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
    
    return array
}