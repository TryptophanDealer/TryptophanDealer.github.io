let credit = 200;
let trueCredit = 0;
        
        function creditPlus(x) { credit += x; showTrueCredit() };

        function creditMinus(x) { credit -= x; showTrueCredit() };

        function priceCalculator(id, state) {
    if (state === 0) {
            if (effects[id].drawback === false) {
            creditMinus(effects[id].price)                    
        }
        else if (effects[id].drawback === true) {
            creditPlus(effects[id].price)
        }
        else {alert("ERROR in effects.drawback")}
        }
    else if (state ===1) {
            if (effects[id].drawback === false) {
                creditPlus(effects[id].price)
            }
            else if (effects[id].drawback === true) {
                creditMinus(effects[id].price)
            }
            else {alert("ERROR in effects.drawback")}
        }
    else {alert("ERROR in effects.state")}
    };

        function pick(id) {

        if (isFinished == true) {popUp(1)}
        else if (effects[id].requiredBy > 0) {popUp(2)}
        else if (effects[id].requiresState > 0) {popUp(3)}
        else {

            if (effects[id].state === 0) {

                document.getElementById(effects[id].card).classList.toggle("effectsPicked")
                effects[id].state = 1
                priceCalculator(id, 0)
                requirementListener(id)
                requiredByListener(id)
            }
            else if (effects[id].state === 1) {

                document.getElementById(effects[id].card).classList.toggle("effectsPicked")
                effects[id].state = 0
                priceCalculator(id, 1)
                requirementListenerOff(id)
                requiredByListenerOff(id)
            }
            else {
                    window.alert("You can't pick this effect right now. It could be because of a bug, or an expoit, if you think it should be fixed, contact the creator.")
            }
        }
    };

        function hudHide() {
                creditCounter.classList.toggle("hidden")
        };

        function promptEffect(functions) {
                let value = Number(prompt("Set your value:"));
                if (isNaN(value) == true) { alert("It only works with numbers")}
                else if (value == null || value == "" || value == 0) {console.log("Prompt cancelled, or the value was either set to zero, or wasn't set at all")}
                        else {
                                functions(value)
                        };
                console.log(value)
        };

function requirementListener(id) {
    for (let cardId = 0; cardId < effects.length; cardId++) {
        if (effects[id].name == effects[cardId].requires) {effects[cardId].requiresState -= 1}
    };
};
function requirementListenerOff(id) {
    for (let cardId = 0; cardId < effects.length; cardId++) {
        if (effects[id].name == effects[cardId].requires) {effects[cardId].requiresState += 1}
    };
};

function requiredByListener(id) {
    for (let cardId = 0; cardId < effects.length; cardId++) {
        if (effects[cardId].name == effects[id].requires) {effects[cardId].requiredBy += 1}
    };}
function requiredByListenerOff(id) {
    for (let cardId = 0; cardId < effects.length; cardId++) {
        if (effects[cardId].name == effects[id].requires) {effects[cardId].requiredBy -= 1}
    };
};

let bulkBonus = 0

function bulkGeneral(id) {
    if (effects[id*3-2].state === 1 && effects[id*3-1].state === 1 && effects[id*3].state === 1) {subTitles[id].bulkStatus = 1; bulkBonus += 1}
    else if (effects[id*3-2].state != 1 || effects[id*3-1].state != 1 || effects[id*3].state != 1) {subTitles[id].bulkStatus = 0}
};

function bulkListener() {

    bulkBonus = 0

    for (let titleId = 1; titleId < subTitles.length; titleId++) {
        bulkGeneral(titleId)        
    };

    console.log("Current bulkBonus: "+bulkBonus)
};

function bulkCounter() {

    if (effects[40].state == 1) {
        console.log("Bulk function is active")
    }
}

function showTrueCredit() {
    if (effects[40].state == 1) {
        bulkListener()
        trueCredit = credit + bulkBonus*2
    }
    else { trueCredit = credit }
    
    document.getElementById("creditCounter").innerHTML = "Credit: " + trueCredit;
};

function toDo() {
    document.getElementById("toDoList").classList.toggle("hide")
};

popping = 0

function hidePopUp(){

    function endPopUp() {document.getElementById("popUpContainer").style.opacity = "0"}
    function fadeout() {document.getElementById("popUpContainer").style.display = "none", popping = 0}
    setTimeout(endPopUp,2000)
    setTimeout(fadeout,3000)
};

function showPopUp(){
    document.getElementById("popUpContainer").style.display = "block"
    function fadein() {document.getElementById("popUpContainer").style.opacity = "1", popping = 1}
    setTimeout(fadein,1)
};

function popUp(cond){
    if (popping === 0){

    if (cond === 1) {
    document.getElementById("popUp").innerHTML = "The game is finished. Reload the page if you want to play again."
    }
    else if (cond === 2) {
    document.getElementById("popUp").innerHTML = "You can't unpick this effect right now, because another picked effect requires it."
    }
    else if (cond === 3) {
    document.getElementById("popUp").innerHTML = "You can't pick this effect right now, because you lack a required effect for it."
    }
    else if (cond === 4) {
    document.getElementById("popUp").innerHTML = "You can't finish the game with a negative credit score"
    }
    showPopUp()
    hidePopUp()
}
};

function nextPage() {
    document.getElementById("noBody").style.display = "none"
    document.getElementById("noBody3").style.display = "none"
    document.getElementById("noBody2").style.display = "block"
    document.body.style.backgroundColor = "rgb(46, 24, 66)"
    document.body.style.color = "rgb(228, 228, 228)"
}

function nextPage2() {
    document.getElementById("noBody").style.display = "none"
    document.getElementById("noBody2").style.display = "none"
    document.getElementById("noBody3").style.display = "block"
    document.body.style.backgroundColor = "rgb(46, 24, 66)"
    document.body.style.color = "rgb(228, 228, 228)"
}