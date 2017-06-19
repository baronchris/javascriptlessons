var sentence = "I love learning software development";
 
for (var i=0; i < sentence.length; i++) {
     if(sentence[i] !== " "){
      console.log(sentence[i]);
     }
}
/* 
Explanation of the Code

In the for loop we are using the .length property in the loop's condition. 
Every string in JavaScript has a .length property, which indicates how many 
characters are in the string.
We compare the number of characters in our sentence string (the string's length) 
to the current value of i. This assures that the loop will only execute as many 
times as there are characters in our sentence string.
In the for loop's block of code, we use an if statement to check if the current character 
is not an empty space. If the current character is not an empty space, 
we print it to the Developer Console with console.log(sentence[i]);. 
Using sentence[i] states that we want the character at a certain index of the string.
 If we used sentence[0], we would get the first character in the string. 
 If we used sentence[1] we would get the second character in the string, and so on. 
 Since we use sentence[i], we are looking up the character at the 
 index of the current value of i.
Summary*/