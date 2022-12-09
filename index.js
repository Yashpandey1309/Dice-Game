//dice1
var randomnumber1;
randomnumber1 = Math.floor(Math.random()*6 +1);
var image = document.querySelectorAll('img')[0];
if(randomnumber1===1){
    image.setAttribute("src",'images/dice1.png');
}
else if(randomnumber1===2){
    image.setAttribute("src",'images/dice2.png');
}
else if(randomnumber1===3){
    image.setAttribute("src",'images/dice3.png');
}
else if(randomnumber1===4){
    image.setAttribute("src",'images/dice4.png');
}
else if(randomnumber1===5){
    image.setAttribute("src",'images/dice5.png');
}
else if(randomnumber1===6){
    image.setAttribute("src",'images/dice6.png');
}



//dice 2
var randomnumber2;
randomnumber2 = Math.floor(Math.random()*6 +1);
    var image1 = document.querySelectorAll('img')[1];
    if(randomnumber2===1){
        image1.setAttribute("src",'images/dice1.png');
    }
    else if(randomnumber2===2){
        image1.setAttribute("src",'images/dice2.png');
    }
    else if(randomnumber2===3){
        image1.setAttribute("src",'images/dice3.png');
    }
    else if(randomnumber2===4){
        image1.setAttribute("src",'images/dice4.png');
    }
    else if(randomnumber2===5){
        image1.setAttribute("src",'images/dice5.png');
    }
    else if(randomnumber2===6){
        image1.setAttribute("src",'images/dice6.png');
    }


//result

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WON !! ";
    document.querySelectorAll("p")[0].style.color="yellow";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="PLAYER 2 WON !!";
    document.querySelectorAll("p")[1].style.color="yellow";
}
else if(randomnumber1===randomnumber2){
    document.querySelector("h1").innerHTML="DRAW";
    document.querySelectorAll("p")[0].style.color="yellow";
    document.querySelectorAll("p")[1].style.color="yellow";
}