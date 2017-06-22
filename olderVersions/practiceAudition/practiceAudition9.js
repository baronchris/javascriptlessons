function validate(num1, num2, step){
    var num1 = document.forms["rangeParameters"]["num1"].value;
    var num2 = document.forms["rangeParameters"]["num2"].value;
    var step = document.forms["rangeParameters"]["step"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        return false;
    }
    if (num2 == "" || isNaN(num1)) {
        alert("Num2 must be filled in with a number.");
        return false;
    }
    if(step =="" || isNaN(step) || step<1){
        alert("step must be a positive number");
           return false;
    }
    if(num1>(num2-1){
        alert("num1 must be smaller than num2");
        return false;
    }
    if((num2-num1)<1){
        alert("there must be more than one step between the inputs");
        return false;
    }
    alert("validation done");  
    var outstring =" ";
    outstring = ranger(num1, num2, step); 
    document.getElementById("resultsArray").innerText = outstring;
    document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("testStrip").style.display = "block"; //for debugging
    alert("Result:"+ outstring);  //for debugging
    return false;
}
    function ranger(num1, num2, step){
    alert("function called" + num1+ " " + num2);
    var resultString = " ";
    for(i=num1; i<num2; i++){
        if(i%2==0 && (i-num1)%step==0){
            resultString += "  "+ i;
            }
        }
    alert("resultFinal is" + resultString);
    return resultString;
}

function resetForm() {
    clearErrors();
    var resultArray =[];
    var printArray = "";
    document.getElementById("testStrip").style.display = "none";
    document.forms["rangeParameters"]["num1"].value = "";
    document.forms["rangeParameters"]["num2"].value = "";
    document.forms["rangeParameters"]["step"].value = "";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["rangeParameters"]["num1"].focus();

}

function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["rangeParameters"].elements.length; 
        loopCounter++) {
        if (document.forms["rangeParameters"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["rangeParameters"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}    
