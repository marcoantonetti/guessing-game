
function guessgame(number){ 
    // User writes a number in the alert box. If it's equal to random number then you win. If not you have 4 more chances
    // If a repeated number is written down the console asks to retry the entry, without losing a chance
    // After 5 chances you lose
    var guesses = [];  

    for(chance = 1; chance < 6; chance++){

        var guess = window.prompt("Guess a number between 0-10")

        if( guess == number ){

                window.alert("Congratulations")    
                document.write(number)
                break

        } else if( guesses.includes(guess) ) {

                window.alert("Number already inserted")
                chance-=1
    
        } else if( chance == 5 ){

                window.alert("Oops you lose")
                document.write('Answer: ', number)
                return

        } else if( guess != number ){

                guesses[chance] = guess;
                window.alert("Incorrect, remember that you have " + (5-chance) + " more chances. \n You have guessed "
                + guesses.toString())    

        }

    }
}


// Random Number Genrator
var randomnumber = Math.round(Math.random() * 10) // https://medium.com/@josephcardillo/using-math-random-in-javascript-c49eff920b11

// Calling the function

guessgame(randomnumber)

