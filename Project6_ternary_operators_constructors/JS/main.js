function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model; 
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color;
} 
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); 
function myFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color.Color + "-colored" + Erik.Vehicle_Model + 
    "manufactured in" + Erik.Vehicle_Year;
} 

function Person(first, last, age, eye) {
    this.firstName = first; 
    this.lastName = last; 
    this.age = age; 
    this.eyeColor = eye;
} 

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9; 
        function Plus_one() {Starting_point += 1;} 
        Plus_one();
        return Starting_point;
    }
} 

