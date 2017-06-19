function diceroll(numberrolls){
    for(var roll=0; roll<=numberrolls; roll++){
        console.log(Math.ceil(Math.random()*(1+6-1)));
    }
}

//or like below

function rollDice() {
    return Math.ceil(Math.random() * (1 + 6 - 1));
}
 
for (var i = 0; i < 100; i++) {
    console.log(rollDice());
}

function nSidedDice(maxrole, minrole, rollnumb){
    if(minrole >0){
    for(var roll=0; roll < rollnumb; roll++){
        console.log(Math.ceil(Math.random()*(1+maxrole-minrole) ));
    }
    }
    else{
        for(var roll=0; roll < rollnumb; roll++){
        console.log(Math.floor(Math.random()*(1+maxrole-minrole) ));
    }
    }
}
// simpler :
function nSidedDice2(maxrole, minrole, rollnumb){
    for(var roll=0; roll < rollnumb; roll++){
        console.log(Math.floor(Math.random()*(1+maxrole-minrole))+minrole);
}
}