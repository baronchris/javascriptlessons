function initialRange(num1, num2, step){
    var num1 = document.forms["rangeParameters"]["num1"].value;
    var num2 = document.forms["rangeParameters"]["num2"].value;
    var step = document.forms["rangeParameters"]["step"].value;
    var range=[];
    var current =num1;
    var steprange=[];
    var evensteps=[];
    for(var i=0; current<num2; i++){
        current= num1+i;
        range[i]=current;
    for(var i=0; i<range.length; i++){
         if(i%step ==0){
             steprange[steprange.length] = range[i];
    for (var index=0; index<steprange.length;index++){
        if(steprange[index]%2 ==0){
          evensteps[evensteps.length] = steprange[index];      
        }
    for(stringindex=0; stringindex<evensteps.length; stringindex++){
        evensteps[stringindex] = arrayresults[(stringindex)];
    }
    }
    }
}
    }
     document.getElementById("results").evensteps.toString();

    return evensteps, false;
}
 
function resetForm() {
    clearErrors();
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
