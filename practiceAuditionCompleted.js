//for num1 !=num2 order independent needs work.  
function validate(num1, num2, step){
    var num1 = document.forms["rangeParameters"]["num1"].value;
    var num2 = document.forms["rangeParameters"]["num2"].value;
    var step = document.forms["rangeParameters"]["step"].value;
    var n1=0+String(num1);
    var n1a =Number(n1);

    if (n1a == "" || isNaN(num1)) {
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
    if(Math.abs(num2 - n1a)<1){
        alert("there must be more than one step between the inputs");
        document.forms["rangeParameters"]["num1"].parentElement.className = "form-group has-error";
        document.forms["rangeParameters"]["num2"].parentElement.className = "form-group has-error";
        document.forms["rangeParameters"]["num1"].value = "";
        document.forms["rangeParameters"]["num2"].value = "";
        document.forms["rangeParameters"]["num1"].focus();
        return false;
    }
    var outstring ="";
    outstring = rangerArray(n1a, num2, step); 
    document.getElementById("resultsArray").innerText = outstring;
    document.getElementById("submitButton").innerText = "Recalculate";
    return false;
}
function rangerArray(n1a, num2, step){
    var range=[];
    var resultRange =[];
    var rangeFinal =[];
    for(var h=n1a; h<=(num2); h++){
        range[(h-n1a)]=h;
    }
        for(var i=0; i<=(range.length); i++){
            if(range[i] %2 ==0){
                resultRange[resultRange.length]=range[i];
            }
        }

        for(var j=0; (j+1)<resultRange.length ;j++){
            if(j%step==0){
                rangeFinal[rangeFinal.length] = resultRange[j];
            }
        }
    console.log(resultRange);
    console.log(rangeFinal)
    return rangeFinal;
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
