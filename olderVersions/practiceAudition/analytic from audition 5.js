
function rangerRick(num1, num2, step){
var resultArray =[];
var printArray = "";
var range =[];
var current =0;
    for(var i=0; current<num2 ; i++){
        current = (num1+i);
        range[i]=current;}
            for(var j=0; j <range.length; j++){
                if(range[j]%2 ==0 && j%step==0){
                    resultArray[resultArray.length] =range[j];}}
            for(var k = 0; k < resultArray.length; k++){
            printArray +=  (" "+resultArray[k]);}
        alert(resultArray);  //for debugging.  NB works win console!!
        return printArray;
    }