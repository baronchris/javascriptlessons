//for num1 !=num2 order independent needs work.  
function validate(num1, num2, step){
    var num1 = document.forms["rangeParameters"]["num1"].value;
    var num2 = document.forms["rangeParameters"]["num2"].value;
    var step = document.forms["rangeParameters"]["step"].value;
    if (num1 == undefined || isNaN(num1)) {
        alert("Num1 must be filled in with a number");
        document.forms["rangeParameters"]["num1"]
        .parentElement.className = "form-group has-error";
        document.forms["rangeParameters"]["num1"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num1)) {
        alert("Num2 must be filled in with a number.");
        document.forms["rangeParameters"]["num2"].parentElement.className = "form-group has-error";
        document.forms["rangeParameters"]["num2"].focus();
        return false;
    }
    if(step =="" || isNaN(step) || step<1){
        alert("step must be a positive number");
        document.forms["rangeParameters"]["step"].parentElement.className = "form-group has-error";
        document.forms["rangeParameters"]["step"].focus();
           return false;
    }
    if(Math.abs(num2 - num1)<1){
        alert("there must be more than one step between the inputs");
        document.forms["rangeParameters"]["num1"].parentElement.className = "form-group has-error";
        document.forms["rangeParameters"]["num2"].parentElement.className = "form-group has-error";
        document.forms["rangeParameters"]["num1"].value = "";
        document.forms["rangeParameters"]["num2"].value = "";
        document.forms["rangeParameters"]["num1"].focus();
        return false;
    }
    var outstring ="";
    outstring = rangerArray(num1, num2, step); 
    document.getElementById("resultsArray").innerText = outstring;
    document.getElementById("submitButton").innerText = "Recalculate";
    return false;
}
function rangerArray(num1, num2, step){
    alert(num1 +" "+num2+" "+step);
    var range=[];
    var resultRange =[];
    for(var h=num1; h<=num2; h++){
        range[(h-num1)]=h;
    }
    console.log(range);
    alert("range is "+ range);
        for(var i=0; (i<range.length+1); i++){
            if(range[i]%2==0 && i%step ==0){
                resultRange[resultRange.length]=range[i];
            }
        }
    console.log(resultRange);
    return resultRange;
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
