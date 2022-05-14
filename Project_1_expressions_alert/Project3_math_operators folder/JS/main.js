function addition_Function() {
    var addition= 2 + 2;
    document.getElementById("Math").innerHTML= "2+2= "+addition;
} 

function subtraction_Function() {
    var Subtraction = 5 -2;
    document.getElementById("Minus").innerHTML= "5 - 2 = " + Subtraction;
} 

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 x 8 =" + simple_Math;
} 

function division () {
    var simple_Math = 48/6; 
    document.getElementById("Divide").innerHTML= "48 / 6 =" + simple_Math;
} 

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Multiple").innerHTML = "(1 + 2) * 10/ 2 -5" + simple_Math;
} 

function modulus_Operator() {
    var simple_Math = 25 % 6; 
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " +simple_Math;
} 

function negation_Operator() {
    var x = 10; 
    document.getElementById("Negatives").innerHTML = -x
} 

var X = 4
X = Math.log10(1000);
document.write(X);

var X = 5;
X++;
document.write(X); /*incrementing value*/

var Y = 3;
Y--;
document.write(Y) /*decreasing value*/ 

window.alert(Math.random()); /*window alert random number*/

window.alert(Math.random() * 100); /*window aler any number between 0-100*/

