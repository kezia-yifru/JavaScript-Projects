function displayType(shoe) {
    var shoeType = shoe.getAttribute ("data-shoe-type"); 
    alert(shoeType + " when I wear these " + shoe.innerHTML + "I feel great!");
}