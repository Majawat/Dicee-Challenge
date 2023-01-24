

function rollDice(){
    var p1Value = Math.floor(Math.random()*6) +1;
    var p2Value = Math.floor(Math.random()*6) +1;
    
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice" + p1Value + ".png");
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice" + p2Value + ".png");
    
    if(p1Value > p2Value){
        document.querySelector("h1").innerHTML = "&#128681;" + "Player One Wins!";
    }else{
        document.querySelector("h1").innerHTML = "Player Two Wins!"+"&#128681;";
    }
    
    if(p1Value===p2Value){
        document.querySelector("h1").innerHTML = "Draw!"
    }
}

