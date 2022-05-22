function validateForm() 
{
    let x =
document.forms["myForm"] 
["fname"].value;
    if(x == "") {
        alert("Don't forget your name dude!"); 
        return false;
    }
}