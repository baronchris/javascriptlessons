var numbers =[];
function findMax(...numbers){
    var max= Math.max(numbers);
    for(var i=0; i<=numbers.length; i++){
        if(numbers[i]= max){
        var maxposition =i;
        }
    }
    console.log("the maximum is " + max);
    console.log("the maximum number is at location " + maxposition)
}
