var out = console.log.bind(document)

const start = document.querySelector(".start button")
const content = document.querySelector(".container")
const timer = document.querySelector(".timer")

const question = document.querySelector("h2")
const options = document.querySelectorAll("ul li label")

const submit = document.querySelector(".container button")

const result = document.querySelector(".footer .result")

// questions and answers
var questAns = [
    // num1
    {
        question: "Which country has the largest population in the world?",
        opt1: "Russia", 
        opt2: "Indonesia",
        opt3: "China", // true
        opt4: "India",
        ans: "three"
    },
    // num2
    {
        question: "How many continents in the wolrd?",
        opt1: "4",
        opt2: "7", // true
        opt3: "5",
        opt4: "6",
        ans: "two"
    },
    // num3
    {
        question: "What is the capital of Mexico?",
        opt1: "Mexico City", // true
        opt2: "Ciudad Juarez",
        opt3: "Guadaljara",
        opt4: "Puebla",
        ans: "one"
    },
    // num4
    {
        question: "What is the name of the largest ocean in the world?",
        opt1: "India", 
        opt2: "Arctic",
        opt3: "Pacific", // true
        opt4: "Atlantic",
        ans: "three"
    },
    // num5
    {
        question: "How many states in USA?",
        opt1: "50", // true
        opt2: "45",
        opt3: "52",
        opt4: "47",
        ans: "one"
    },
    // num6
    {
        question: "What is the smallest country in the wolrd?",
        opt1: "Nauru",
        opt2: "Monaco",
        opt3: "San Marino",
        opt4: "Vatican City", // true
        ans: "four"
    },
    // num7
    {
        question: "What planet is closest to Earth?",
        opt1: "Neptune",
        opt2: "Venus", // true
        opt3: "Mars",
        opt4: "Mercury",
        ans: "two"
    },
    // num8
    {
        question: "How many time zones does China have?",
        opt1: "2",
        opt2: "3",
        opt3: "4",
        opt4: "1", // true
        ans: "four"
    },
    // num9
    {
        question: "What is the capital of Canada?",
        opt1: "Calgary",
        opt2: "Ottawa", // true
        opt3: "Edmonton",
        opt4: "Winnipeg",
        ans: "two"
    },
    // num10
    {
        question: "How many stars are on the Australian flag?",
        opt1: "4",
        opt2: "5",
        opt3: "6", // true
        opt4: "7",
        ans: "three"
    }
]

// start
start.addEventListener("click", () => {
    start.parentElement.style.display = "none"
    content.style.display = "flex"
    time();
    getQuestAndAns()
})

// timer
function time(){
    let sec = 40;
    let min = 1;
    setInterval(() => {
        if (sec > 9){
            timer.innerHTML = `0${min}:${sec}` 
        }
        else {
            timer.innerHTML = `0${min}:0${sec}`
        }
        sec--
        if (sec == 0){
            setTimeout(() => {
                sec = 59
                min = 0;
            }, 1000);
        }
        if (sec == 0 && min == 0){
            setTimeout(() => {
                content.style.display = "none"
                document.querySelector(".score").style.display = "flex"
                document.querySelector(".score .score-value").innerHTML = `${value}/10`                 
            }, 1900);
        }
    }, 1000);
}

// get questions and answer from object
function getQuestAndAns(num = 1){
    question.innerHTML = `${num}. ${questAns[num - 1].question}`
    options[0].innerHTML = `${questAns[num - 1].opt1}`
    options[1].innerHTML = `${questAns[num - 1].opt2}`
    options[2].innerHTML = `${questAns[num - 1].opt3}`
    options[3].innerHTML = `${questAns[num - 1].opt4}`
}

// submit ans
let numNow = 1;
let value = 0;
submit.addEventListener("click",function(){
    let ans; // answer
    
    // get answer from input
    for (let i = 0 ; i < 4 ; i++){
        if (options[i].previousElementSibling.checked){
            ans = options[i].previousElementSibling.id
        }
    }
    
    // check if the answer is true or false
    if (ans == `${questAns[numNow - 1].ans}`){
        result.innerHTML = "Correct"
        result.classList.remove("incorrect")
        result.classList.add("correct")
        value++;
    }
    else {
        result.innerHTML = "Incorrect"
        result.classList.remove("correct")
        result.classList.add("incorrect")
    }

    // get the number of question
    numNow++;

    // move to the next question
    setTimeout(() => {
        getQuestAndAns(numNow)
        result.innerHTML = ""
        result.classList.remove("correct")
        result.classList.remove("incorrect")

        for (let i = 0 ; i < 4 ; i++){
            options[i].previousElementSibling.checked = false
        }
    }, 500);

    // complete
    if (numNow == 11){
        setTimeout(() => {
            content.style.display = "none"
            document.querySelector(".score").style.display = "flex"
            document.querySelector(".score .score-value").innerHTML = `${value}/10`
        }, 1000);
    }
})