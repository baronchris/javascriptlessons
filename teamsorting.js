var friends= ["Samwise", "Pippen", "Merry", "Gimli", "Legolas", "Boromir", "Aragorn", "Gandalf Mithrandir"];
function teamsort(friends){
var team1 = [];
var team2 = [];
for(var i=0; i< friends.length; i++){
    if(i%2 == 0){
        team1.push(friends[i]);
    }
    else{
        team2.push(friends[i]);
    }
}
console.log(team1);
console.log(team2);
}

function teamsortshift(friends){
    
    for(var i=0; i< friends.length; i++){
    if(i%2 == 0){
        team1.unshift(friends[i])
        }
    else{
        team2.unshift(friends[i])
    }
}
console.log(team1);
console.log(team2);
}
//or by length function
function teamlength(friends){
    var team1 = [];
    var team2 = [];
 
    for (var i = 0; i < friends.length; i++) {
        if (i % 2 == 0) {
            team1[team1.length] = friends[i];
        } 
        else {
            team2[team2.length] = friends[i];
        }
    }
console.log(team1);
console.log(team2);
}
