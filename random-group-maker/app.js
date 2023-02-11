var out = console.log.bind(document)

document.querySelector(".names").style.width = `${document.querySelector(".content").clientWidth}px`

// input the names
const namesInput = document.querySelector("#name")
const nameList = document.querySelector(".name-list")
out(namesInput)

let numberList = 1
namesInput.addEventListener("keydown",function(el){
    var x = el.key
    var name = namesInput.value

    if (name != "" && x == "Enter"){
        out(name)

        var number = document.createElement("span")
        var member = document.createElement("span")
        var li = document.createElement("li")

        number.classList.add("color")

        number.innerText = numberList
        member.innerText = name

        li.appendChild(number)
        li.appendChild(member)

        nameList.appendChild(li)
        nameList.style.display = "flex"
        numberList++

        // namesInput.value = ""
    }
})

// remove names
