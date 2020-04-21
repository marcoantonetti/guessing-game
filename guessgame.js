
function guessgame(argument)
{ // Usuario escribe un numero. Si es igual al generado por el sistema gana. Sino tiene 4 chances mas.
    // Si ingresa numero repetido se le pide que ingreso otro de nuevo, sin perder una chance
    // Al usar sus 5 chances, pierde
    var guesses = [];  
for(chance=1;chance<6;chance++)
{ 
   var guess = window.prompt("Guess a number between 0-10")
   if(guess==randomnumber) 
   {
        window.alert("Congratulations")    
        document.write(randomnumber)
        break
   }
   if(guesses.includes(guess)) {
       window.alert("Number already inserted")
       chance-=1
   }
   if(chance==5){ window.alert("Oops you lose")
   document.write(randomnumber)}

   if(guess!=randomnumber)
   {    guesses[chance] = guess;
       window.alert("Incorrect, remember that you have " + (5-chance) + " chances in total \n you have guessed "
       + guesses.toString())    
   }

}
}
// El programa de arriba es el juego, aca abajo pongo para que se genere numero aleatorio 
var randomnumber = Math.round(Math.random() * 10) //esto genera un numero entero del 1-10
            // https://medium.com/@josephcardillo/using-math-random-in-javascript-c49eff920b11

// llamo a la funcion con el argumento randomnumber
console.log(randomnumber)
guessgame(randomnumber)

