var undefinedvariable;
var myname=prompt("What is your name?")
function sayhello(myname){
    var myname= prompt("What is your name?");
    alert("hello " + myname)
}


var firstname=prompt("what is your first name?");
var lastname=prompt("what is your last name?");
function sayhello2(firstname, lastname){
    console.log("Hello "+firstname +" " + lastname);
    alert("Hello "+firstname +" " + lastname);
    var initials= confirm("can I call you "+ firstname[0] +"."+ lastname[0]+".");
    if (initials ==true){
    console.log("thanks, "+ firstname[0] +"."+ lastname[0]+"." );
    alert("thanks, "+ firstname[0] +"."+ lastname[0]+"." );}
    else{
    console.log("okay, jerk");
    alert ("okay, jerk");}
}


sayhello4(prompt("what is your first name?"));
function sayhello4(name2){
    alert("hello " + name2)
}
sayhello5(prompt("what is your first name?"),prompt("what is your last name?"));
function sayhello5(name2, name3){
    alert("hello " + name2 +" "+ name3)
}