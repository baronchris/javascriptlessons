function former(num1, num2){
alert("number test");
var num1 = document.forms["ranger"]["num1"].value;
var num2 = document.forms["ranger"]["num2"].value;
alert("test");
if(num1>0 && num2>num1){
var tester= formCalc(num1, num2);
document.getElementById("resultSpace").innertext = tester;
document.getElementById("submitButton").innerText = "Recalculate";
document.getElementById("testStrip").style.display = "block";
return false;
}
}

function formCalc(num1, num2){
    alert("function called " +num1+" "+num2);
    var range=" ";
    var current=0;
    for(var i=0; current<num2; i++){
    current=(num1+i);
    range += (current+ "</br>");}
    alert("result is " + range);
    console.log(range);
return range;
}
