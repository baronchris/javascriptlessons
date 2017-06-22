    var num1 = document.forms["rangeParameters"]["num1"].value;
    var num2 = document.forms["rangeParameters"]["num2"].value;
    var step = document.forms["rangeParameters"]["step"].value;
function ranger(num1, num2, step){
    var range=[];
    var resultArray=[];
    var current =num1;
    var resultfinal= null;
    for(var i=0; current<num2; i++){
        current= num1+i;
        range[i]=current;
    }
    for(var i=0; i<range.length; i++){
        if(range[i]%2 ==0 && i%step==0){
            resultArray[resultArray.length] =range[i];
        }
    }
    document.getElementById("submitButton").innerText = "Resubmit";
    document.getElementById("testStrip").style.display = "block";
    document.getElementById("results").innerText= resultArray[1];
    return false;    
}

function resetForm() {
    clearErrors();
    document.getElementById("testStrip").style.display = "none";
    document.forms["rangeParameters"]["num1"].value = "";
    document.forms["rangeParameters"]["num2"].value = "";
    document.forms["rangeParameters"]["step"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["rangeParameters"]["num1"].focus();
}