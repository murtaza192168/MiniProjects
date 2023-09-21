
function RandomDiceNumberGenerator(){
    //Player1
    var randomNumberGenerationLeft = Math.floor(Math.random() * 6) + 1;
    var randomDiceGenerationLeft = "dice" + randomNumberGenerationLeft + ".png";
    var randomDiceImgGenerationLeft = "./images/" + randomDiceGenerationLeft;
    
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImgGenerationLeft);
    
    // Player 2 
    var randomNumberGenerationMiddle = Math.floor(Math.random() * 6) + 1;
    var randomDiceGenerationMiddle = "dice" + randomNumberGenerationMiddle + ".png";
    var randomDiceImgGenerationMiddle = "./images/" + randomDiceGenerationMiddle;
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImgGenerationMiddle);
    
    //Player 3
    var randomNumberGenerationRight = Math.floor(Math.random() * 6) + 1;
    var randomDiceGenerationRight = "dice" + randomNumberGenerationRight + ".png";
    var randomDiceImgGenerationRight = "./images/" + randomDiceGenerationRight;
    document.querySelectorAll("img")[2].setAttribute("src", randomDiceImgGenerationRight);
    

    // if(randomNumberGenerationLeft > randomNumberGenerationMiddle )
    // {
    //     document.querySelector("h1").innerHTML = "Player 1 Wins!";
    // }
    
    // else if(randomNumberGenerationLeft < randomNumberGenerationMiddle)
    // {
    //     document.querySelector("h1").innerHTML = "Player 2 Wins!";
    // }
    // else
    // {
    //     document.querySelector("h1").innerHTML = "It's a TIE!";
    // }

// /////////////////////////
if(randomDiceGenerationLeft === randomDiceGenerationMiddle === randomDiceGenerationRight)
{
    document.querySelector("h1").innerHTML = "It's a TIE among all!";
}
else if(randomDiceGenerationLeft === randomDiceGenerationMiddle)
{
    document.querySelector("h1").innerHTML = "It's a TIE between 1 and 2 !";
}
else if(randomDiceGenerationMiddle === randomDiceGenerationRight)
{
    document.querySelector("h1").innerHTML = "It's a TIE between 2 and 3 !";
}
else if( randomDiceGenerationLeft === randomDiceGenerationRight)
{
    document.querySelector("h1").innerHTML = "It's a TIE between 1 and 3 !";
}
/////

else if((randomNumberGenerationLeft > randomNumberGenerationMiddle) && (randomNumberGenerationLeft > randomNumberGenerationRight))
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if((randomNumberGenerationMiddle > randomNumberGenerationLeft) && (randomNumberGenerationMiddle > randomNumberGenerationRight))
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
document.querySelector("h1").innerHTML = "Player 3 Wins!";
}



}
