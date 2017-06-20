var step=0;
function rangerRick(num1, num2, step){
    var range=[];
    var current =num1;
    var rangeevenstep =[]
    for(var i=0; current<num2; i++){
        current= num1+i;
        range[i]=current;
    if(range[i]%2 ==0 && i%step ==0){
        rangeevenstep[rangeevenstep.length] = range[i];
    }
    }
    return rangeevenstep.toString();
}