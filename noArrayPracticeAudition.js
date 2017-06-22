function rangestring(num1,num2, step){
    var current=0;
    var resultString = "This is the result: ";
    for(i=0; current<num2; i++){
        current=num1+i;
        if(current%2==0 && i%step==0){
            resultString += current +" ,";
    }
}
return resultString;
}