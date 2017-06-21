function formhandler(num1, num2){
    var num1 = document.forms["form1"]["num1"].value;
    var num2 = document.forms["form1"]["num2"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["form1"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["form1"]["num1"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num2)) {
       alert("Num2 must be filled in with a number.");
       document.forms["form1"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["form1"]["num2"].focus();
       return false;
    }
    var answer = Number(num1) + Number(num2);
    document.getElementById("submitButton").innerText = "Resubmit";
    document.getElementById("testStrip").style.display = "block";
    document.getElementById("results").innerText=answer;
    return false;
}