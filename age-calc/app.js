var out = console.log.bind(document)

const calc = document.querySelector(".calc");
const input = document.querySelector(".date-input")

var months = [31,28,31,30,31,30,31,30,31,31,30,31]

calc.addEventListener("click",function(){
    
    let age = new Date(input.value)
    let day = age.getDate()
    let month = age.getMonth() + 1
    let year = age.getFullYear()

    let dateNow = new Date()
    let dayNow = dateNow.getDate()
    let monthNow = dateNow.getMonth() + 1
    let yearNow = dateNow.getFullYear()

    let ageDay, ageMonth, ageYear;

    leapCheck(year)

    if (isNaN(day)){
        alert("Please input the date")
        result("-",'-','-')
        return;
    }

    if(year > yearNow || (year == yearNow && month > monthNow) || (year == yearNow && month == monthNow && day > dayNow)){
        alert("Not born yet!");
        result("-","-","-");
        return;
    }
    
    ageYear = yearNow - year

    if(monthNow >= month){
        ageMonth = monthNow - month;
    }
    else{
        ageYear--;
        ageMonth = 12 + monthNow - month;
    }

    if(dayNow >= day){
        ageDay = dayNow - day;
    }
    else{
        ageMonth--;
        
        let days = months[monthNow - 2];
        ageDay = days + dayNow - day;
        
        if (ageMonth < 0){
            ageMonth = 11;
            ageYear--;
        }
    }

    result(ageDay,ageMonth,ageYear);

    if(day == dayNow && month == monthNow){
        document.querySelector(".congrats").innerHTML = "Happy Birthday🥳🤩"
        document.querySelector(".congrats").style.display = "block"
        document.querySelector(".congrats").style.fontSize = "25px"
    }
})

function result(day,month,year){
    document.querySelector(".day-value").innerHTML = day
    document.querySelector(".month-value").innerHTML = month
    document.querySelector(".year-value").innerHTML = year
}

function leapCheck(year){
    if (year % 4 == 0 && year % 400){
        months[1] = 29
    }
    else {
        months[1] = 28
    }
}