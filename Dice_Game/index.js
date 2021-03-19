
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img01 = "images/dice" + randomNumber1 + ".png";
var image01 = document.querySelectorAll("img")[0];
image01.setAttribute("src", img01);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img02 = "images/dice" + randomNumber2 + ".png";
var image02 = document.querySelectorAll("img")[1];
image02.setAttribute("src", img02);

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 wins";
} 
else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = "Player 2 wins";
}
else{
    document.querySelector('h1').innerHTML = "Draws";
}


