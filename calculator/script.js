const result = document.querySelector(".current-result")
const btn = document.querySelectorAll(".btn")

btn.forEach(function(item){
    item.addEventListener("click", () => {
        if (item.id == "clear"){
            result.innerHTML = "";
        }
        else if (item.id == "del"){
            let str = result.innerHTML.toString()
            result.innerHTML = str.slice(0,-1)
        }
        else if (result.innerHTML == "" && item.id == "equal"){
            result.innerHTML = "Empty!"
            setTimeout(() => {
                result.innerHTML = ""
            }, 2000);
        }
        else if (result.innerHTML != "" && item.id == "equal"){
            result.innerHTML = eval(result.innerHTML)
        }
        else {
            result.innerHTML += item.id
        }
        console.log(result.innerHTML)
    })
})
