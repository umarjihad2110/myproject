var out = console.log.bind(document)

const projects = document.querySelectorAll(".project")

projects.forEach(function(project){
    let length = project.classList.value.length
    let backgroundImage = project.classList.value.slice(8,length)
    
    project.style.backgroundImage = `url("../pic/${backgroundImage}.png")`
    project.style.backgroundSize = "cover"
})