function getPilihanComputer(){
    var comp = Math.random()

    if (comp < 0.34){
        return "kertas"
    }
    else if (comp >= 0.34 && comp < 0.67){
        return "batu"
    }
    else{
        return "gunting"
    }
}

function getHasil(comp,player){
    if( player == comp ) {
        return 'SERI!';
    } 
    if( player == 'kertas' ) {
        return ( comp == 'batu' ) ? 'MENANG!' : 'KALAH!';
    } 
    if( player == 'batu' ) {
        return ( comp == 'kertas' ) ? 'KALAH!' : 'MENANG!';
    } 
    if( player == 'gunting' ) {
        return ( comp == 'batu' ) ? 'KALAH' : 'MENANG!';
    }
}


const pilihan = document.querySelectorAll("li img")

pilihan.forEach(function(pil){
    pil.addEventListener("click",function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer,pilihanPlayer);
        
        const imgComputer = document.querySelector(".img-komputer")
        imgComputer.setAttribute("src","img/" + pilihanComputer + ".png")

        const info = document.querySelector(".info")
        info.innerHTML = hasil;        
    });
});

// const kertas = document.querySelector(".kertas")
// kertas.addEventListener("click",function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = kertas.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
    
//     const imgComputer = document.querySelector(".img-komputer")
//     imgComputer.setAttribute("src","img/" + pilihanComputer + ".png")

//     const info = document.querySelector(".info")
//     info.innerHTML = hasil;
// })

// const batu = document.querySelector(".batu")
// batu.addEventListener("click",function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = batu.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
    
//     const imgComputer = document.querySelector(".img-komputer")
//     imgComputer.setAttribute("src","img/" + pilihanComputer + ".png")

//     const info = document.querySelector(".info")
//     info.innerHTML = hasil;
// })

// const gunting = document.querySelector(".gunting")
// gunting.addEventListener("click",function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = gunting.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
    
//     const imgComputer = document.querySelector(".img-komputer")
//     imgComputer.setAttribute("src","img/" + pilihanComputer + ".png")

//     const info = document.querySelector(".info")
//     info.innerHTML = hasil;
// })