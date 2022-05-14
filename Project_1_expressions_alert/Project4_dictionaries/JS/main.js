function my_Dictionary() {
    var Home = {
        Type: "Condo", 
        Rooms:3,
        City:"San Francisco",
        Price:350,
        Pets:"No"
    }; /*KVP*/
    delete Home.Pets
    document.getElementById("Dictionary").innerHTML = Home.Pets;
}; /*Deletes*/
 

