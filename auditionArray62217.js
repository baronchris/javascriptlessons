function rangerArray(num1, num2, step){
    var range=[];
    var resultRange =[];
    for(var h=num1; h<(num2+1); h++){
        range[(h-num1)]=h;
    }
    console.log(range);
    alert("range is "+ range);
        for(var i=0; i<(num2+1); i++){
            if(range[i]%2==0 && i%step ==0){
                resultRange[resultRange.length]=range[i];
            }
        }
    console.log(resultRange);
    return resultRange;
}