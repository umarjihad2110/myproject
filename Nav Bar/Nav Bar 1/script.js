document.querySelectorAll(".item").forEach(function(item,i){
    let line = document.querySelector(".line")
    let box = document.querySelector(".box")

    item.addEventListener("click",function(){
        box.classList.remove("animate")
        box.style.marginLeft = ((20 + item.clientWidth) * i) + "px"
        box.classList.add("animate")
        // line.style.marginLeft = ((20 + item.clientWidth) * i) + "px"
    })
})
