

function rangerRick(num1, num2, step){
    var num1 = document.forms["rangeParameters"]["num1"].value;
    var num2 = document.forms["rangeParameters"]["num2"].value;
    var step = document.forms["rangeParameters"]["step"].value;
    var range=[];
    var rangeevenstep =[];
    var current =num1;
    for(var i=0; current<num2; i++){
        current= num1+i;
        range[i]=current;}
    if(range[i]%2 ==0 && i%step ==0){
        rangeevenstep[rangeevenstep.length] = range[i];
        document.getElementById("results").innerText= rangeevenstep.toString();
}   
    return false; 
}