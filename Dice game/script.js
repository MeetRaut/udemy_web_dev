var randomNumber1 = Math.round(Math.random() * 6);

if(randomNumber1 === 1){
    document.getElementById("img1").src = "/images/dice1.png";
}else if(randomNumber1 === 2){
    document.getElementById("img1").src = "/images/dice2.png";
}else if(randomNumber1 === 3){
    document.getElementById("img1").src = "/images/dice3.png";
}else if(randomNumber1 === 4){
    document.getElementById("img1").src = "/images/dice4.png";
}else if(randomNumber1 === 5){
    document.getElementById("img1").src = "/images/dice5.png";
}else{
    document.getElementById("img1").src = "/images/dice6.png";
}

var randomNumber2 = Math.round(Math.random() * 6);

if(randomNumber2 === 1){
    document.getElementById("img2").src = "/images/dice1.png";
}else if(randomNumber2 === 2){
    document.getElementById("img2").src = "/images/dice2.png";
}else if(randomNumber2 === 3){
    document.getElementById("img2").src = "/images/dice3.png";
}else if(randomNumber2 === 4){
    document.getElementById("img2").src = "/images/dice4.png";
}else if(randomNumber2 === 5){
    document.getElementById("img2").src = "/images/dice5.png";
}else{
    document.getElementById("img2").src = "/images/dice6.png";
}

if(randomNumber1 > randomNumber2){
    document.getElementById("text").innerHTML="Player 1 wins";
}else if(randomNumber1 < randomNumber2){
    document.getElementById("text").innerHTML="Player 2 wins";
}else{
    document.getElementById("text").innerHTML="Draw";
}