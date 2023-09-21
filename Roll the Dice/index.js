
function RandomDiceNumberGenerator(){

    var randomNumberGenerationLeft = Math.floor(Math.random() * 6) + 1;
    var randomDiceGenerationLeft = "dice" + randomNumberGenerationLeft + ".png";
    var randomDiceImgGenerationLeft = "./images/" + randomDiceGenerationLeft;
    
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImgGenerationLeft);
    
     
    var randomNumberGenerationRight = Math.floor(Math.random() * 6) + 1;
    var randomDiceGenerationRight = "dice" + randomNumberGenerationRight + ".png";
    var randomDiceImgGenerationRight = "./images/" + randomDiceGenerationRight;
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImgGenerationRight);
    
    if(randomNumberGenerationLeft > randomNumberGenerationRight)
    {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    
    else if(randomNumberGenerationLeft < randomNumberGenerationRight)
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else
    {
        document.querySelector("h1").innerHTML = "It's a TIE!";
    }


} 

