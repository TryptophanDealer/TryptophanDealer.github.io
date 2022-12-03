function price(effect){
    if (effect.drawback === true){
        return("Gain: ")
    }
    else {return("Cost: ")}
};
let isFinished = false
let rowCounter = 1
let cardCounter = 1

function playingFieldFiller() {
    for (;rowCounter < subTitles.length; rowCounter++) {
        initiateIndependentRow(rowCounter)
        rowFiller(rowCounter)
    }
    document.getElementById("startModalFade").classList.toggle("hide")
    document.getElementById("finishBtn").classList.toggle("hide")
    insertTitles()    
    document.getElementById("hideIntro").style.display = "block"    
    document.getElementById("saveGameMode").innerHTML = gameMode
    document.getElementById("card51").addEventListener("click", glasses)
}

function rowFiller(rowId) {
    for (;document.getElementById("row"+rowId).children.length < 6; cardCounter++) {
        InitiateIndependentCard(rowId, cardCounter)
    }
}

function initiateIndependentRow(rowId){
    let rowTitle = document.createElement("h3")
        rowTitle.className = "title"
        rowTitle.setAttribute("id", "title"+rowId)
        rowTitle.innerHTML = subTitles[rowId].title
    document.getElementById("playingField").appendChild(rowTitle)

    let cardContainer = document.createElement("div")
        cardContainer.className = "row"
        cardContainer.setAttribute("id", "row"+rowId)
    document.getElementById("playingField").appendChild(cardContainer)
}
//--------------------------------------------------------------------------------------------------------------------------------
function imageSwitcherIndependent(id) {
    let effectImageSwitcherIndependent = document.createElement("div")
        effectImageSwitcherIndependent.className = "imageSwitcher"
        effectImageSwitcherIndependent.innerHTML = '<button class="button" onclick="alternateImage('+id+')">Switch image</button>'
        document.getElementById("card"+id).appendChild(effectImageSwitcherIndependent)
};
// document.getElementById(card1).appendChild(effectImageSwitcherIndependent)

function InitiateIndependentCard(rowId, id){

    let effectImageSwitcherIndependent = document.createElement("div")
        effectImageSwitcherIndependent.className = "imageSwitcher"
    //    effectImageSwitcherIndependent.innerHTML = '<button class="button" onclick="alternateImage('+id+')">Switch image</button>'
        effectImageSwitcherIndependent.innerHTML = '<img class="imageSwitcherIcon" onclick="alternateImage('+id+')" src="./imgs/replaceImageIcon.webp" alt="Switch image">'
    document.getElementById("row"+rowId).appendChild(effectImageSwitcherIndependent)

    let cardId = document.createElement("div")
        if (effects[id].drawback === false){cardId.className = "effects"}
            else {cardId.className = "effectsDrawback"}
        cardId.setAttribute("id", "card"+id)
        cardId.setAttribute("onclick", "pick("+id+")")
    document.getElementById("row"+rowId).appendChild(cardId)

    let effectName = document.createElement("h2")
        effectName.className = "effectNames"
        effectName.innerHTML = effects[id].name
    cardId.appendChild(effectName)

    let effectImage = document.createElement("img")
        effectImage.className = "effectImages"
        effectImage.setAttribute("src", "./imgs/"+effects[id].image[0]+".webp")
        effectImage.setAttribute("alt", effects[id].artist+' - '+effects[id].name)
    cardId.appendChild(effectImage)

    let table = document.createElement("table")
        table.className = "table"
    cardId.appendChild(table)

    let tableRow = table.insertRow(0)
    let effectArtist = tableRow.insertCell(0)
        effectArtist.innerHTML = "Artist: "+effects[id].artist[0]
    let effectCost = tableRow.insertCell(1)
        effectCost.innerHTML = price(effects[id])+effects[id].price
        effectCost.setAttribute("id", "cardCost"+id)

    if (effects[id].requires == "") {}
    else {let effectRequirements = document.createElement("p")
        effectRequirements.className = "effectRequirements"
        effectRequirements.innerHTML = "Requires "+effects[id].requires
    cardId.appendChild(effectRequirements)}

    let effectDescription = document.createElement("p")
        effectDescription.className = "effectDescriptions"
        effectDescription.innerHTML = effects[id].description
    cardId.appendChild(effectDescription)

};

function alternateImage(id) {
    if (effects[id].activeImage == 0) {
        document.getElementById("card"+id).children[1].setAttribute("src", "./imgs/"+effects[id].image[1]+".webp")
        document.getElementById("card"+id).children[2].firstChild.firstChild.firstChild.innerHTML = "Artist: "+effects[id].artist[1]
        effects[id].activeImage = 1
    }
    else if (effects[id].activeImage == 1) {
        document.getElementById("card"+id).children[1].setAttribute("src", "./imgs/"+effects[id].image[2]+".webp")
        document.getElementById("card"+id).children[2].firstChild.firstChild.firstChild.innerHTML = "Artist: "+effects[id].artist[2]
        effects[id].activeImage = 2
    }
    else {
        document.getElementById("card"+id).children[1].setAttribute("src", "./imgs/"+effects[id].image[0]+".webp")
        document.getElementById("card"+id).children[2].firstChild.firstChild.firstChild.innerHTML = "Artist: "+effects[id].artist[0]
        effects[id].activeImage = 0
    }
};

function insertTitles() {

    let mainDiv = document.createElement("div")
    mainDiv.className = "mainTitle"

    let mainTitle = document.createElement("h1")
    mainTitle.innerHTML = "Features"

    let mainDescription = document.createElement("h3")
    mainDescription.innerHTML = "This is the section where you can choose which filters, functions and additional features you'd like to purchase for your app.<br><br>Our filters won't work on photo subjects under the age of consent!"
    
    mainDiv.appendChild(mainTitle)
    mainDiv.appendChild(mainDescription)

    document.getElementById("playingField").insertBefore(mainDiv, playingField.childNodes[0])

    let drawbackDiv = document.createElement("div")
    drawbackDiv.className = "drawbackTitle"

    let drawbackTitle = document.createElement("h1")
    drawbackTitle.innerHTML = "Extra credit"

    let drawbackDescription = document.createElement("h3")
    drawbackDescription.innerHTML = "This is the section where you can get more credit by helping us either with advertising, testing new features, having a positive effect on our community, or in other small ways.<br><br> At the end you can't finish with a negative credit score!"

    drawbackDiv.appendChild(drawbackTitle)
    drawbackDiv.appendChild(drawbackDescription)
    
    document.getElementById("playingField").insertBefore(drawbackDiv, playingField.childNodes[23])
}

function finish() {
if (trueCredit < 0) {popUp(4)}

    else {


    if ((effects[39].state === 1)) {
        document.getElementById("noBody").style.display = "none"
        document.getElementById("noBody2").style.display = "none"
        document.getElementById("noBody3").style.display = "block"
        document.body.style.backgroundColor = "rgb(46, 24, 66)"
        document.body.style.color = "rgb(228, 228, 228)"
    }
    else if (effects[48].state === 1){
        document.getElementById("noBody").style.display = "none"
        document.getElementById("noBody3").style.display = "none"
        document.getElementById("noBody2").style.display = "block"
        document.body.style.backgroundColor = "rgb(46, 24, 66)"
        document.body.style.color = "rgb(228, 228, 228)"
    }
    else {
        document.getElementById("noBody").style.display = "none"
        document.getElementById("noBody3").style.display = "none"
        document.getElementById("noBody2").style.display = "none"
        document.getElementById("noBody4").style.display = "block"
        document.body.style.backgroundColor = "rgb(180,86,43)"
        document.body.style.color = "rgb(206,130,60)"
    }

        document.documentElement.scrollTop = 0
        isFinished = true
        document.getElementById("finishBtn").classList.toggle("hide")
        endFieldFiller()
        glasses()
}
};

function alternateImagex(id) {
    if (effects[id].activeImage == 0) {
        document.getElementById("cardx"+id).children[1].setAttribute("src", "./imgs/"+effects[id].image[1]+".webp")
        document.getElementById("cardx"+id).children[2].firstChild.firstChild.firstChild.innerHTML = "Artist: "+effects[id].artist[1]
        effects[id].activeImage = 1
    }
    else if (effects[id].activeImage == 1) {
        document.getElementById("cardx"+id).children[1].setAttribute("src", "./imgs/"+effects[id].image[2]+".webp")
        document.getElementById("cardx"+id).children[2].firstChild.firstChild.firstChild.innerHTML = "Artist: "+effects[id].artist[2]
        effects[id].activeImage = 2
    }
    else {
        document.getElementById("cardx"+id).children[1].setAttribute("src", "./imgs/"+effects[id].image[0]+".webp")
        document.getElementById("cardx"+id).children[2].firstChild.firstChild.firstChild.innerHTML = "Artist: "+effects[id].artist[0]
        effects[id].activeImage = 0
    }
};

function initiateEndCard(rowId, id){
        // "row"+rowID replaced by endRow1

    if (effects[id].state === 1) {

    let effectImageSwitcherIndependent = document.createElement("div")
        effectImageSwitcherIndependent.className = "imageSwitcher"
    //    effectImageSwitcherIndependent.innerHTML = '<button class="button" onclick="alternateImage('+id+')">Switch image</button>'
        effectImageSwitcherIndependent.innerHTML = '<img class="imageSwitcherIcon" onclick="alternateImagex('+id+')" src="./imgs/replaceImageIcon.webp" alt="Switch image">'
    document.getElementById("endRow"+rowId).appendChild(effectImageSwitcherIndependent)

    let cardId = document.createElement("div")
        if (effects[id].drawback === false){cardId.className = "effects"}
            else {cardId.className = "effectsDrawback"}
        cardId.setAttribute("id", "cardx"+id)
        cardId.setAttribute("onclick", "pick("+id+")")
    document.getElementById("endRow"+rowId).appendChild(cardId)

    let effectName = document.createElement("h2")
        effectName.className = "effectNames"
        effectName.innerHTML = effects[id].name
    cardId.appendChild(effectName)

    let effectImage = document.createElement("img")
        effectImage.className = "effectImages"
        effectImage.setAttribute("src", "./imgs/"+effects[id].image[0]+".webp")
        effectImage.setAttribute("alt", effects[id].artist+' - '+effects[id].name)
    cardId.appendChild(effectImage)

    let table = document.createElement("table")
        table.className = "table"
    cardId.appendChild(table)

    let tableRow = table.insertRow(0)
    let effectArtist = tableRow.insertCell(0)
        effectArtist.innerHTML = "Artist: "+effects[id].artist[0]
    let effectCost = tableRow.insertCell(1)
        effectCost.innerHTML = price(effects[id])+effects[id].price
        effectCost.setAttribute("id", "cardCostx"+id)

    if (effects[id].requires == "") {}
    else {let effectRequirements = document.createElement("p")
        effectRequirements.className = "effectRequirements"
        effectRequirements.innerHTML = "Requires "+effects[id].requires
    cardId.appendChild(effectRequirements)}

    let effectDescription = document.createElement("p")
        effectDescription.className = "effectDescriptions"
        effectDescription.innerHTML = effects[id].description
    cardId.appendChild(effectDescription)

    endCardNumber ++
}
};

function endFiller(rowId) {
for (let i = 0; i < effects.length; i++) {
    InitiateEndCard(rowId, i)
  }
};

function initiateEndRow(rowId){
    let cardContainer = document.createElement("div")
        cardContainer.className = "row"
        cardContainer.setAttribute("id", "endRow"+rowId)
    document.getElementById("endField").appendChild(cardContainer)
};

let endCardNumber = 0
let endRowCounter = 1
let endCardCounter = 1
let pickedEffects = 0

function pickedEffectsCounter() {
    pickedEffects = 0

    for (let i = 0; i < effects.length; i++) {
        if (effects[i].state === 1) {pickedEffects ++}
    }
    endRowCounter = Math.ceil(pickedEffects / 3) + 1
};

function endFieldRower() {
    pickedEffectsCounter()
    for (let i = 0; i < endRowCounter; i++) {
        initiateEndRow(i)
    }
}

function endFieldFiller() {
    setTimeout(sandBoxer, 10)
        endFieldRower()
    for (let i = 1 ;endCardNumber < pickedEffects;i ++) {
        endRowFiller(i)
    }
};

function endRowFiller(rowId) {
    for (;document.getElementById("endRow"+rowId).children.length < 6; endCardCounter++) {
        initiateEndCard(rowId, endCardCounter)
    }
};

function revealEnding() {
    document.getElementById("endModalFade").style.display ="block"
    saveResults()
    if (effects[59].state != 1) {
        document.getElementById("endSpan").innerHTML = "which really hurts by the way, why don't you want to give me a hug, do you not like me?<br><br>It doesn't matter, I fooled you, so I win!"
    }
    document.getElementById("endBtn1").innerHTML = "Show Endscreen"
};

function sandBoxer() {
if (gameMode === "Sandbox") {
    for (let i = 1; i<effects.length; i++) {
        if (effects[i].state === 1) {
        document.getElementById("cardCostx"+i).innerHTML = "Free"
        }
    }
}
};

function hideEnding() {
    document.getElementById("endModalFade").style.display ="none"
}