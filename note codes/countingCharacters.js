function countingCharacters(stringToCount)
{
    console.log (stringToCount + " has " + 
              stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind){
    var findcount =0;
    var stringlength= stringToCount.length;
    for(var i=0; i<=stringlength; i++){
        if(stringToCount[i] == characterToFind){
            findcount++;
        }
    }
console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + 
                  findcount);
}

function countingCharacters3(str, search)
{var count =0;
 var numChars =search.length;
 var lastindex = str.length - numChars;
 for(var index=0; index <= lastindex; index++){
     var currentframe = str.substring(index, index + numChars);
     if(currentframe== search){
         count++;
     }
 }
console.log("String to search in: " + str);
  console.log("Characters to find: " + search);
  console.log("Number of times the character appears: " + count);
}
//isn't working, why?? copy from class below:  original: if(str[currentframe]  fixed if(currentframe== now fixed

//returning values without console.log
function countingCharacters3a(str, search)
{var count =0;
 var numChars =search.length;
 var lastindex = str.length - numChars;
 for(var index=0; index <= lastindex; index++){
     var currentframe = str.substring(index, index + numChars);
     if(currentframe== search){
         count++;
     }
 }
return count;
}
