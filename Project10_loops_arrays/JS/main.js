function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++
    } 
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
} 

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    } 
    document.getElementById("List_of_Instruments").innerHTML = Content;
} 

function Student_pictures() {
    var Student_Picture = [];
    Student_Picture[0] = "studying";
    Student_Picture[1] = "playing tag";
    Student_Picture[2] = "taking a test"; 
    Student_Picture[3] = "eating lunch"; 
    document.getElementById("Array").innerHTML = "In this picture, the student is" +
        Student_Picture[2] + "."
} 

var X = 82;
document.write(X);
{
    let X = 33; 
    document.write("<br>" + X); 
} 
document.write("<br>" + X);
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
} 

 

function myFunction() {
    return "Hi";
} 
document.getElementById("demo").innerHTML = myFunction();




