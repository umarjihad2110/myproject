var out = console.log.bind(document)

document.querySelector(".names").style.width = `${document.querySelector(".content").clientWidth}px`

// input the names
const namesInput = document.querySelector("#name")
const nameList = document.querySelector(".name-list")

const sumPeople = document.querySelector("#people")
const sumGroups = document.querySelector("#groups")

let numberList = 1
namesInput.addEventListener("keydown",function(el){
    var x = el.key
    var name = namesInput.value
    var people = parseInt(sumPeople.value)
    var groups = parseInt(sumGroups.value)

    if (name != "" && x == "Enter" && numberList <= people){
        
        if (numberList == people){
            document.querySelector(".generate").style.display = "inline"
        }

        out(name)

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

        // remove names
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

            document.querySelector(".generate").style.display = "none"
        })

        numberList++
    }
    
})