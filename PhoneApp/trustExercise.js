let writeActive = 0
let locationActive = 0
let rollsRemaining = 3
let done = 0

function reorderTrue() {
    writeLocation.sort(function(){return 0.5 - Math.random()})
    write.sort(function(){return 0.5 - Math.random()})
};

reorderTrue();

function reRoll() {
    if (done === 0) {
    document.getElementById("rollingField").innerHTML = "What you have to write: <br>"+write[writeActive]
    document.getElementById("rollingField2").innerHTML = "Where you have to write it: <br>"+writeLocation[locationActive]
    document.getElementById("rollCounter").innerHTML = "Rolls remaining: <br>"+rollsRemaining
    }
    else if (done === 1) {
    document.getElementById("rollingField3").innerHTML = "What you have to write: <br>"+write[writeActive]
    document.getElementById("rollingField4").innerHTML = "Where you have to write it: <br>"+writeLocation[locationActive]
    document.getElementById("rollCounter").innerHTML = "Rolls remaining: <br>"+rollsRemaining
    }
};

function reRollWrite() {
    if (rollsRemaining > 0) {
    writeActive ++
    rollsRemaining --
    reRoll()
    }

    else {noMoreRolls()}
};

function reRollLocation() {
    if (rollsRemaining > 0) {
    locationActive ++
    rollsRemaining --
    reRoll()
    }

    else {noMoreRolls()}
};

function reRollAll() {
    if (rollsRemaining > 0) {
    writeActive ++
    locationActive ++    
    rollsRemaining --
    reRoll()
    }

    else {noMoreRolls()}
};

function addRolls(number){
    rollsRemaining += number
    document.getElementById("rollCounter").innerHTML = "Rolls remaining: <br>"+rollsRemaining
};

function doubleUp(){
    rollsRemaining = rollsRemaining*2
    document.getElementById("rollCounter").innerHTML = "Rolls remaining: <br>"+rollsRemaining
};

function noMoreRolls() {
    function backColor(){document.getElementById("rollCounter").style.backgroundColor = "rgb(86, 50, 119)"}

    document.getElementById("rollCounter").style.backgroundColor = "red"

    setTimeout(backColor, 400)
};

function hide(id){
    id.style.display = "none"
};

function finalize(){
    if (bonuses.double === 1){
    document.getElementById("rollingField3").classList = "rollingField"
    document.getElementById("rollingField4").classList = "rollingField"
    done = 1
    bonuses.double = 2
    rollsRemaining ++
    reRollAll()
    }
    else {
        document.getElementById("introductionFade").style.display = "block"
        document.getElementById("intro1").innerHTML = "Good job"
        document.getElementById("intro2").innerHTML = "Now, if you you haven't done it yet, do the bodywriting task and once you're done click continue"
    }
};

function start() {
    reRoll()
    hide(introductionFade)
    document.getElementById("start").style.display = "none"
    document.getElementById("lookBack").classList = "start"
    document.getElementById("continue").classList = "start"

};

function cont() {
    document.getElementById("noBody2").style.display = "none"
    document.getElementById("noBody4").style.display = "block"
    document.body.style.backgroundColor = "rgb(180,86,43)"
    document.body.style.color = "rgb(206,130,60)"
};

function taken(id){
    if (id == permanent) {
    if (bonuses.permanent === 0) {
    permanent.style.backgroundColor = "blueviolet";
    addRolls(1);
    bonuses.permanent = 1
    }}

    else if (id == heart) {
    if (bonuses.heart === 0) {
    heart.style.backgroundColor = "blueviolet";
    addRolls(1);
    bonuses.heart = 1
    }}

    else if (id == pic) {
    if (bonuses.pic === 0) {
    pic.style.backgroundColor = "blueviolet";
    addRolls(1);
    bonuses.pic = 1
    document.getElementById("picKeep").classList = "bonus"
    document.getElementById("picSend").classList = "bonus"
    document.getElementById("picShare").classList = "bonus"
    }}

    else if (id == picKeep) {
    if (bonuses.picKeep === 0) {
    picKeep.style.backgroundColor = "blueviolet";
    addRolls(1);
    bonuses.picKeep = 1
    }}

    else if (id == picSend) {
    if (bonuses.picSend === 0) {
    picSend.style.backgroundColor = "blueviolet";
    addRolls(1);
    bonuses.picSend = 1
    }}

    else if (id == picShare) {
    if (bonuses.picShare === 0) {
    picShare.style.backgroundColor = "blueviolet";
    addRolls(1);
    bonuses.picShare = 1
    }}

    else if (id == double) {
    if (bonuses.double === 0) {
    double.style.backgroundColor = "blueviolet";
    doubleUp();
    bonuses.double = 1
    }}
};