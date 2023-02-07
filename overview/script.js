const click = document.querySelectorAll("span.click")

click.forEach(function(e,i){
    e.addEventListener("click",function(){
        e.nextElementSibling.classList.toggle("show")
        e.parentElement.nextElementSibling.classList.toggle("show")
        e.nextElementSibling.classList.add("trans")
        e.parentElement.nextElementSibling.classList.add("trans")
        e.parentElement.parentElement.classList.toggle("trans2")
    })
})