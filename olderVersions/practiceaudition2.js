function initialRange(num1, num2, step){
    var num1 = document.forms["rangeParameters"]["num1"].value;
    var num2 = document.forms["rangeParameters"]["num2"].value;
    var step = document.forms["rangeParameters"]["step"].value;
    var range=[];
    var current =num1;
    var arrayresults ="The even steps are"
    for(var i=0; current<num2; i++){
        current= num1+i;
        range[i]=current;
    } 
    stepCount(range, step);
    return False;
}
function stepCount(range, step){
    var step = document.forms["rangeParameters"]["step"].value;
    var steprange=[];
      for(var i=0; i<range.length; i++){
         if(i%step ==0){
             steprange[steprange.length] = range[i];
        }    
}
stepEven(steprange, step);
}
function stepEven(steprange, step){
    var step = document.forms["rangeParameters"]["step"].value;
    var evensteps=[];
    var arrayresults ="The even steps are";
    for (var i=0; i<steprange.length;i++){
        if(steprange[i]%2 ==0){
          evensteps[evensteps.length] = steprange[i];      
        }
    }
    for(stringindex=0; stringindex<evensteps.length; stringindex++){
        arrayresults += "<br>" + evensteps[stringindex];
    }
    document.getElementById("results").innerText= "hello" 
    return arrayresults;
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

