function initialRange(num1, num2, step){
    var num1 = document.forms["rangeParameters"]["num1"].value;
    var num2 = document.forms["rangeParameters"]["num2"].value;
    var step = document.forms["rangeParameters"]["step"].value;
    var range=[];
    var current =num1;
    var arrayresults =""
    for(var i=0; current<num2; i++){
        current= num1+i;
        range[i]=current;
    } 
    console.log("the range is: "+ range)
    stepCount(range, step);
}
function stepCount(range, step){
    var steprange=[];
      for(var i=0; i<range.length; i++){
         if(i%step ==0){
             steprange[steprange.length] = range[i];
        }    
}
console.log("the stepped numbers are: " +steprange);
stepEven(steprange, step);
}
function stepEven(steprange, step){
    var evensteps=[];
    var arrayresults ="The even steps are";
    for (var i=0; i<steprange.length;i++){
        if(steprange[i]%2 ==0){
          evensteps[evensteps.length] = steprange[i];      
        }
    }
    console.log("the even stepped number are: "+evensteps);
    for(stringindex=0; stringindex<evensteps.length; stringindex++){
        arrayresults += "<br>" + evensteps[stringindex];
    }
    console.log(arrayresults)
    return arrayresults;
    document.getElementById("results").innerText= arrayresults;
    return False;
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

