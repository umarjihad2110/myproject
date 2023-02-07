/*-------------------------------------- left/won ----------------------------------------*/

const left = document.querySelector(".left")
const won = document.querySelector(".won")

/*------------------------------------ board content ------------------------------------*/

var boards = []
var boardNum = [];
const content = document.querySelector(".container")

/*--------------------------------- make a numbur on div --------------------------------*/

for (let i = 100; i >= 91 ; i--){
    boardNum.push(i)
}

for (let i = 81 ; i <= 90 ; i++){
    boardNum.push(i)
}

for (let i = 80 ; i >= 71 ; i--){
    boardNum.push(i)
}

for (let i = 61 ; i <= 70 ; i++){
    boardNum.push(i)
}

for (let i = 60 ; i >= 51 ; i--){
    boardNum.push(i)
}

for (let i = 41 ; i <= 50 ; i++){
    boardNum.push(i)
}

for (let i = 40 ; i >= 31 ; i--){
    boardNum.push(i)
}

for (let i = 21 ; i <= 30 ; i++){
    boardNum.push(i)
}

for (let i = 20 ; i >= 11 ; i--){
    boardNum.push(i)
}

for (let i = 1 ; i <= 10 ; i++){
    boardNum.push(i)
}

/*------------------------------------- make a div --------------------------------------*/

for (let i = 0 ; i < 100 ; i++){
    boards.push(document.createElement("div"))
    boards[i].classList.add("board")
    boards[i].innerHTML = boardNum[i]

    content.appendChild(boards[i])
}

/*----------------------------------- rolling a dice -----------------------------------*/

const roll = document.querySelector(".roll")
const dice = document.querySelector(".dice")
const diceimg = document.querySelector(".diceimg")
let diceNum;
const pawn = document.querySelector(".pawn")
var level = 1;
var walk = 1;
var walk1,walk2,walk3,walk4,walk5,walk6,walk7,walk8,walk9,walk10;
let finish = 1;

roll.addEventListener("click",function(){
    roll.style.pointerEvents = "none"
    diceNum = Math.floor(Math.random()*6 + 1)
    // diceNum = 1

    dice.classList.add("rolling")

    setTimeout(() => {
        diceimg.src = `dice/dice${diceNum}.png`
    }, 500);

    walk = walk + diceNum;
    finish += diceNum;
    setTimeout(() => {
        
        /*--------------------------- 1st row --------------------------*/

        if (level == 1){
                
            if (walk > 10){
                pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish - diceNum == 10){
                    pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`

                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${21 - walk}) + ((100vh - 75px) / 20)*(2*(${21 - walk} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk1 = 10 - (21 - walk) + 1;
                        walk = 1;
                        level++;
                    }, 1000);
                }
                else{
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
                    }, 1000);

                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${21 - walk}) + ((100vh - 75px) / 20)*(2*(${21 - walk} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk1 = 10 - (21 - walk) + 1;
                        walk = 1;
                        level++;
                    }, 2000);
                }
            }
            else {
                pawn.style.transform = `translate(calc(5px*(${walk}) + ((100vh - 75px) / 20)*(2*(${walk} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish == 4){
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(5) + ((100vh - 75px) / 20)*(2*(5 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(4 - 1) + 5px*(4 - 1))*(-1)))`
    
                        walk3 = 10;
                        walk = 6;
                        level = 4; 
                        finish = 36;
                    }, 1100);
                }
            }
        }

        /* -------------------------------- 2nd row -------------------------------*/

        else if (level == 2){
            if (walk + walk1 - 1 > 10){
                pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish - diceNum == 20){
                    pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`

                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${(walk + walk1 - 1) - 10}) + ((100vh - 75px) / 20)*(2*(${(walk + walk1 - 1) - 10} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk2 = (walk + walk1 - 1) - 10
                        walk = 1;
                        level++;
                    }, 1000);
                }

                else{
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
                    }, 1000);
    
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${(walk + walk1 - 1) - 10}) + ((100vh - 75px) / 20)*(2*(${(walk + walk1 - 1) - 10} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk2 = (walk + walk1 - 1) - 10
                        walk = 1;
                        level++;
                    }, 2000);
                }
            }
            else {
                pawn.style.transform = `translate(calc(5px*(${10 - (walk + walk1 - 2)}) + ((100vh - 75px) / 20)*(2*(${10 - (walk + walk1 - 2)} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`
            }
        }

        /* ----------------------------------- 3rd row ---------------------------------*/

        if (level == 3){
            if (walk + walk2 - 1 > 10){
                pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish - diceNum == 30){
                    pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`

                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${21 - (walk + walk2 - 1)}) + ((100vh - 75px) / 20)*(2*(${21 - (walk + walk2 - 1)} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk3 = 21 - (walk + walk2 - 1)
                        walk = 1;
                        level++;
                    }, 1000);    
                }
                else {
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
                    }, 1000);
    
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${21 - (walk + walk2 - 1)}) + ((100vh - 75px) / 20)*(2*(${21 - (walk + walk2 - 1)} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk3 = 21 - (walk + walk2 - 1)
                        walk = 1;
                        level++;
                    }, 2000);
                }

            }
            else {
                pawn.style.transform = `translate(calc(5px*(${walk + walk2 - 1}) + ((100vh - 75px) / 20)*(2*(${walk + walk2 - 1} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish == 28){
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(8) + ((100vh - 75px) / 20)*(2*(8 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(1 - 1) + 5px*(1 - 1))*(-1)))`

                        finish = 8;
                        level = 1;
                        walk = 8;
                    }, 1000);
                }
            }
        }

        /*----------------------------------- 4th row -----------------------------------*/

        else if (level == 4){
            if ((11 - (walk3 - walk + 1)) > 10){
                pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish - diceNum == 40){
                    pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`

                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${walk - walk3}) + ((100vh - 75px) / 20)*(2*(${walk - walk3} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk4 = walk - walk3;
                        walk = 1;
                        level++
                    }, 1000);    
                }
                else {
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
                    }, 1000);
    
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${walk - walk3}) + ((100vh - 75px) / 20)*(2*(${walk - walk3} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk4 = walk - walk3;
                        walk = 1;
                        level++
                    }, 2000);
                }

            }
            else {
                pawn.style.transform = `translate(calc(5px*(${walk3 - walk + 1}) + ((100vh - 75px) / 20)*(2*(${walk3 - walk + 1} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`
            }
        }

        /*------------------------------------- 5th row ----------------------------------*/

        else if (level == 5){
            if (walk4 + walk - 1 > 10){
                pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish - diceNum == 50){
                    pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`

                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${21 - (walk + walk4 - 1)}) + ((100vh - 75px) / 20)*(2*(${21 - (walk + walk4 - 1)} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk5 = 21 - (walk + walk4 - 1)
                        walk = 1;
                        level++;
                    }, 1000);    
                }
                else {
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
                    }, 1000);
    
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${21 - (walk + walk4 - 1)}) + ((100vh - 75px) / 20)*(2*(${21 - (walk + walk4 - 1)} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk5 = 21 - (walk + walk4 - 1)
                        walk = 1;
                        level++;
                    }, 2000);
                }

            }
            else {
                pawn.style.transform = `translate(calc(5px*(${walk + walk4 - 1}) + ((100vh - 75px) / 20)*(2*(${walk + walk4 - 1} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish == 48){
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(7) + ((100vh - 75px) / 20)*(2*(7 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(7 - 1) + 5px*(7 - 1))*(-1)))`
    
                        walk6 = 3;
                        walk = 5;
                        level = 7; 
                        finish = 67;
                    }, 1000);
                }
            }
        }

        /*------------------------------------ 6th row -------------------------------------*/

        else if (level == 6){
            if ((11 - (walk5 - walk + 1)) > 10){
                pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish - diceNum == 60){
                    pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`

                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${walk - walk5}) + ((100vh - 75px) / 20)*(2*(${walk - walk5} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk6 = walk - walk5;
                        walk = 1;
                        level++
    
                        if (finish == 61){
                            setTimeout(() => {
                                pawn.style.transform = `translate(calc(5px*(5) + ((100vh - 75px) / 20)*(2*(5 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(10 - 1) + 5px*(10 - 1))*(-1)))`
            
                                walk9 = 10;
                                walk = 6;
                                finish = 96;
                                level = 10;
                            }, 100);
                        }
                    }, 1000);
                }
                else {
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
                    }, 1000);
    
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${walk - walk5}) + ((100vh - 75px) / 20)*(2*(${walk - walk5} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk6 = walk - walk5;
                        walk = 1;
                        level++
    
                        if (finish == 61){
                            setTimeout(() => {
                                pawn.style.transform = `translate(calc(5px*(5) + ((100vh - 75px) / 20)*(2*(5 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(10 - 1) + 5px*(10 - 1))*(-1)))`
            
                                walk9 = 10;
                                walk = 6;
                                finish = 96;
                                level = 10;
                            }, 100);
                        }
                    }, 2000);
                }

            }
            else {
                pawn.style.transform = `translate(calc(5px*(${walk5 - walk + 1}) + ((100vh - 75px) / 20)*(2*(${walk5 - walk + 1} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`
            }
        }

        /*----------------------------------- 7th row ----------------------------------*/

        else if (level == 7){
            if (walk6 + walk - 1 > 10){
                pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish - diceNum == 70){
                    pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`

                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${21 - (walk + walk6 - 1)}) + ((100vh - 75px) / 20)*(2*(${21 - (walk + walk6 - 1)} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk7 = 21 - (walk + walk6 - 1)
                        walk = 1;
                        level++;
                    }, 1000);    
                }
                else {
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
                    }, 1000);
    
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${21 - (walk + walk6 - 1)}) + ((100vh - 75px) / 20)*(2*(${21 - (walk + walk6 - 1)} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk7 = 21 - (walk + walk6 - 1)
                        walk = 1;
                        level++;
                    }, 2000);
                }

            }
            else {
                pawn.style.transform = `translate(calc(5px*(${walk + walk6 - 1}) + ((100vh - 75px) / 20)*(2*(${walk + walk6 - 1} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`
            }
        }

        /*--------------------------------- 8th row ------------------------------------*/

        else if (level == 8){
            if ((11 - (walk7 - walk + 1)) > 10){
                pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish - diceNum == 80){
                    pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`

                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${walk - walk7}) + ((100vh - 75px) / 20)*(2*(${walk - walk7} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk8 = walk - walk7;
                        walk = 1;
                        level++
                    }, 1000);    
                }
                else {
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
                    }, 1000);
    
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${walk - walk7}) + ((100vh - 75px) / 20)*(2*(${walk - walk7} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk8 = walk - walk7;
                        walk = 1;
                        level++
                    }, 2000);
                }

            }
            else {
                pawn.style.transform = `translate(calc(5px*(${walk7 - walk + 1}) + ((100vh - 75px) / 20)*(2*(${walk7 - walk + 1} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish == 78){
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(5) + ((100vh - 75px) / 20)*(2*(5 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(5 - 1) + 5px*(5 - 1))*(-1)))`

                        walk = 4
                        walk4 = 2;
                        finish = 45;
                        level = 5
                    }, 1000);
                }
            }
        }

        /*------------------------------------- 9th row ---------------------------------*/

        else if (level == 9){
            if (walk8 + walk - 1 > 10){
                pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish - diceNum == 90){
                    pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
                
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${21 - (walk + walk8 - 1)}) + ((100vh - 75px) / 20)*(2*(${21 - (walk + walk8 - 1)} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk9 = 21 - (walk + walk8 - 1)
                        walk = 1;
                        level++;
                    }, 1000);    
                }
                else {
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(10) + ((100vh - 75px) / 20)*(2*(10 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
                    }, 1000);
    
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(${21 - (walk + walk8 - 1)}) + ((100vh - 75px) / 20)*(2*(${21 - (walk + walk8 - 1)} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level + 1} - 1) + 5px*(${level + 1} - 1))*(-1)))`
    
                        walk9 = 21 - (walk + walk8 - 1)
                        walk = 1;
                        level++;
                    }, 2000);
                }

            }
            else {
                pawn.style.transform = `translate(calc(5px*(${walk + walk8 - 1}) + ((100vh - 75px) / 20)*(2*(${walk + walk8 - 1} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                if (finish == 90){
                    setTimeout(() => {
                        pawn.style.transform = `translate(calc(5px*(9) + ((100vh - 75px) / 20)*(2*(9 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(6 - 1) + 5px*(6 - 1))*(-1)))`

                        walk5 = 10
                        walk = 2
                        level = 6;
                        finish = 52;
                    }, 1000);
                }
            }
        }

        /*---------------------------------- 10th row --------------------------------*/

        else if (level == 10){

            if (finish > 100){
                pawn.style.transform = `translate(calc(5px*(1) + ((100vh - 75px) / 20)*(2*(1 - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`

                setTimeout(() => {
                    pawn.style.transform = `translate(calc(5px*(${2 - (walk9 - walk + 1)}) + ((100vh - 75px) / 20)*(2*(${2 - (walk9 - walk + 1)} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))` 

                    walk9 = 2 - (walk9 - walk + 1);
                    finish = 100 - (walk9) + 1
                    walk = 1;
                }, 1000);
            }
            else {
                pawn.style.transform = `translate(calc(5px*(${walk9 - walk + 1}) + ((100vh - 75px) / 20)*(2*(${walk9 - walk + 1} - 1) + 1) - (25px / 2)),calc((10px + ((100vh - 75px)/10)*(${level} - 1) + 5px*(${level} - 1))*(-1)))`
            }
        }

        /*------------------------------------- finish ---------------------------------*/

        if (finish == 100){
            setTimeout(() => {
                content.style.display = "none"
                left.style.display = "none"
                won.style.display = "flex"
            }, 1100);
        }
    }, 1100);

    setTimeout(() => {
        dice.classList.remove("rolling")
    }, 1100);

    setTimeout(() => {
        roll.style.pointerEvents = "auto"
    }, 2500);
})






