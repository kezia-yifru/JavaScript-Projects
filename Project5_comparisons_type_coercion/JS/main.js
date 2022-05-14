document.write("10" + 5); 
document.write(typeof 3); 

function my_Function() {
    document.getElementById("Practice").innerHTML = 0/0;
    document.getElementById("Practice").innerHTML = isNan('007');
    document.getElementById("Practice").innerHTML = isNaN('This is a string');
}  

document.write(2E310);

document.write(-3E310);
 
document.write(10>2);
document.write(10<2); 

console.log(2 + 2); 

console.log(3>7); 

document.write(10 == 10); 
document.write(3==11); 
X = 10; 
Y = 10; 
document.write(X === Y); 

X = 82;
Y = "82"; 
document.write(X === Y); 

document.write(5 > 2 && 10 > 4); 
document.write(5 > 10 && 10 > 4); 
document.write(5 > 10 || 10 > 4); 
document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
} 

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
} 

document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger"); 

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
} 

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough"; 
    document.getElementById("Vote").innerHTML = Can_vote + "to vote";
} 
 


