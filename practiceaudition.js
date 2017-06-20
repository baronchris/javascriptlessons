function allrange(num1, num2){
    var range =[];
    var current =num1;
    for(var i=0; current<num2; i++){
        current= num1+i;
        range[i]=current;
    } 
    var revrange=[];
     revrange=range.reverse()
    console.log(revrange);
    console.log(range)
}

function stepcount(range, step)
{   var steprange =[];
    for(var i=0; i<range.length; i++){
         if(i%step ===0){
             steprange[steprange.length] = range[i];
        }    
}
console.log(steprange);
}
function stepeven(steprange){
    var evensteps =[];
    for (var i=0; i<steprange.length;i++){
        if(steprange[i]%2 ===0){
          evensteps[evensteps.length] = steprange[i];      
        }
    }
    return evensteps;
}