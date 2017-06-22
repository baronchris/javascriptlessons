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
    if((num2 - num1)<1){
        alert("there must be more than one step between the inputs \n and num2 must be larger");
        return false;
    }
    alert("validation done");  //for debugging
    var outstring ="";
    outstring = ranger(num1, num2, step); 
    document.getElementById("resultsArray").innerText = outstring;
    document.getElementById("submitButton").innerText = "Recalculate";
    alert("Result:"+ outstring);  //for debugging in case html display fails
    return false;
}
    function ranger(num1, num2, step){
    alert("function called" + num1+ " " + num2);//for debugging, verifies values passed.  
    var resultString = " ";
    for(i=num1; i<num2; i++){
        if(i%2==0 && (i-num1)%step==0){
            resultString +=i+ ", ";
            }
        }
    alert("resultFinal is" + resultString); //for debugging
    return resultString;  //will not pass in browser if num1 <10?
}

function resetForm() {
    clearErrors();
    var resultArray =[];
    var printArray = "";
    document.forms["rangeParameters"]["num1"].value = "";
    document.forms["rangeParameters"]["num2"].value = "";
    document.forms["rangeParameters"]["step"].value = "";
    document.getElementById("submitButton").innerText = "Submit";
    document.getElementById("resultsArray").innerText = "";
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
