step=0
function rangerRick(num1, num2, step){
    var range =[];
    resultArray = [];
    var current=0;
    var printAnswer="";
    for(var i=0; current<num2; i++){
        current=num1+i;
        range[i]=current;
    }
    var rangesize=range.length
    for(var j=0; j<rangesize; j++ ){
        if(range[j]%2 >0){
            range.splice(j,1);
        }
    }
    console.log("prestep 2 range " +range);
    var evenSize = range.length;
    alert(step +" " + evenSize);
    for(var k=0; k<evenSize; k++){
        if((k%step)==0){
            resultArray[resultArray.length] = range[k];   
        }
    }
    return resultArray;
}





function rangerRick(num1, num2, step){
    var range =[];
    var resultArray =[];
    var resultFinal = "";
     var current =0;
     alert("starting loop 1 "+" " + num1 +" " +" " +num2 + " "+ step); //for debugging.  NB works in console!!
    for(var i=0; current<num2 ; i++){   // breaks browser somewhere in here
        current = (num1+i);
        range[i]=current;}  
        alert("starting loop 2");  //never made it to this alert in browser 
            for(var j=0; j <range.length; j++){
                if(range[j]%2 ==0 && j%step==0){
                    resultArray[resultArray.length] =range[j];
                }
            }
            for(var k = 0; k < resultArray.length; k++){
            printArray +=  (" "+resultArray[k]);
        }
        alert("the results are"+ resultArray);  
        return printArray;
    }