var userName = window.prompt("Please enter your name");
var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName;  

var useroperand1= parseInt(window.prompt("Enter a number"))
var useroperand2= parseInt(window.prompt("Enter another number"))

var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");

operand1.innerHTML += " " + useroperand1;
operand2.innerHTML += " " + useroperand2;

var sum = useroperand1 + useroperand2
var substraction = useroperand1 - useroperand2
var product = useroperand1*useroperand2
var quotient = useroperand1/useroperand2
var modResult = useroperand1%useroperand2       

document.getElementById("addition").innerHTML = "The sum of " + useroperand1 + " and " + useroperand2 + " is " + sum;
document.getElementById("subtraction").innerHTML = "The subtraction of " + useroperand1 + " and " + useroperand2 + " is " + substraction;
document.getElementById("product").innerHTML = "The product of " + useroperand1 + " and " + useroperand2 + " is " + product;
document.getElementById("quotient").innerHTML = "The division of " + useroperand1 + " and " + useroperand2 + " is " + quotient;
document.getElementById("modResult").innerHTML = "The mod of " + useroperand1 + " and " + useroperand2 + " is " + modResult;

/* Esta es una forma mas eficiente de escribir el codigo
var numbersString = num1 + " and " + num2 + " is ";
document.getElementById("addition").innerHTML = "The sum of " + numbersString + sum;
document.getElementById("subtraction").innerHTML = "The difference between " + numbersString + difference;
document.getElementById("multiplication").innerHTML = "The product of " + numbersString + product;
document.getElementById("division").innerHTML = "The quotient of " + numbersString + quotient;
document.getElementById("modulus").innerHTML = "The result of the mod operation on " + numbersString + modResult;*/