function guessNumber() {
     var randomNum = Math.floor(Math.random() * 11);
    // Math.Floor means whole number only 
    // Math.random means random number only
    // * 11 means only numbers within 0-10

    // console.log(randomNum);
    // output to the console for debugging

    var guess;
    //declare a variable

    guess = prompt("Choice a number between 3-10");
    // prompts user to enter a number between 3-10
    // console.log("Your guess is: " +guess);

    if (guess < 3){
        window.alert("ERROR! Enter a number between 3-10!");
    }else if (guess > 10){
        window.alert("ERROR! Enter a number between 3-10!");
    }else if (guess < randomNum){
        window.alert("Your guess is to low! You lose!");
    }else if (guess > randomNum){
        window.alert("Your guess is to high! You lose!");
    }else if (guess == randomNum){
        window.alert("You guessed it!")
    }else{
        window.alert("ERROR! Enter a number between 3-10!")
    }
}
