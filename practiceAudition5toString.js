    
    //toString didn't work
    var resultArray =[];
    var printArray = "";
function validate(){
    var num1 = document.forms["rangeParameters"]["num1"].value;
    var num2 = document.forms["rangeParameters"]["num2"].value;
    var step = document.forms["rangeParameters"]["step"].value;
    var range =[];
    var current =0;
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
    if(num1>=num2){
        alert("num1 must be smaller than num2");
        return false;
    }
    if((num2-num1)<=step){
        alert("there must be more than one step between the inputs");
        return false;
    }
function rangerRick(num1, num2, step){
    for(var i=0; current<num2 ; i++){
        current = (num1+i);
        range[i]=current;}
            for(var j=0; j <range.length; j++){
                if(range[j]%2 ==0 && j%step==0){
                resultArray[resultArray.length] =range[j];}}
            resultArray.toString() =printArray;
            alert("Result:"+ printArray);  //for debugging.  NB works win console!!
            document.getElementById("resultsArray").innerText = resultArray;
        return printArray;
    }
    document.getElementById("resultsArray").innerText = resultFinal;
    document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("testStrip").style.display = "block";  //for debugging
    return false;
}

  var resultFinal = rangerRick();



function resetForm() {
    clearErrors();
    var resultArray =[];
    var printArray = "";
    document.getElementById("testStrip").style.display = "none";
    document.forms["rangeParameters"]["num1"].value = "";
    document.forms["rangeParameters"]["num2"].value = "";
    document.forms["rangeParameters"]["step"].value = "";
    document.getElementById("results").style.display = "none";
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
