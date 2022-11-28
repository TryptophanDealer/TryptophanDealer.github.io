let activeImage = 0
let mistakes = 0
let fin = 0

let order = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83]
reorder()

function aiStart() {
    document.getElementById("startBtn2").style.display = "none";
    document.getElementById("normalBtn").style.display = "block";
    document.getElementById("exceptionBtn").style.display = "block";

    changePlayingCard()
};

function reorder() {order.sort(function(){return 0.5 - Math.random()})}

function pickDick() {
    if (aicards[order[activeImage]].dick === false) {wrong(), mistakes ++}
    else {right()};
    
    nextImage()};

function pickNotDick() {
    if (aicards[order[activeImage]].dick === true) {wrong(), mistakes ++}
    else {right()};
    
    nextImage()};

function changePlayingCard() {
    document.getElementById("playingImage").setAttribute("src", "./imgs/AIGame/"+aicards[order[activeImage]].image+".webp")
};

function results() {

};

function finalResult() {
    if (mistakes === 0) {document.getElementById("endContent").innerHTML = "Congratulations you've made it through without a single mistake, you're clearly very knowledgeable in the topic of dicks, you have nothing more to learn."}
    else if (mistakes < 4) {document.getElementById("endContent").innerHTML = "You've made a couple mistakes, you'll need to get a little bit more familiar with dicks, but overall good, you should spend a couple of hours looking at dick pics and you should be fine."}
    else if (mistakes < 8) {document.getElementById("endContent").innerHTML = "You did a pretty bad job, you'll need to come in for a studying session where we'll show you a practical demonstration about dicks, by the end you'll be familiar with all kinds of dicks."}
    else if (mistakes < 30) {document.getElementById("endContent").innerHTML = "You just straight up suck at this, you'll need to come in for studying sessions once every month until you improve. In the sessions we'll teach you how to recognize dicks, not just by looking at it, but also by touch, smell and taste."}
    else {document.getElementById("endContent").innerHTML = "Wow, you are really bad at this, suspiciously bad in fact, you either completely misunderstood the assigment, you failed on purpose, or you just have no idea what a dick actually is. Either way you'll need to come in for studying sessions once every week until we decide that you've improved. On each session you'll get intimately familiar with dozens of dick, by the end of it you'll be able to tell everything about a dick just from its taste."}
};

function nextImage() {
    if (activeImage > 28) {reorder(); activeImage = 0 ; changePlayingCard() ; finalResult(); modalBtn(); mistakes = 0; fin = 1}
    else {
    activeImage ++
    changePlayingCard()
    }
};


function right() {
    colorGreen()
    setTimeout(colorBack,300)
};

function wrong() {
    colorRed()
    setTimeout(colorBack,500)
};

function colorRed() {
    document.getElementById("aiPlayingField").style.backgroundColor = "rgb(110, 5, 21)"
};

function colorGreen() {
    document.getElementById("aiPlayingField").style.backgroundColor = "rgb(101,207,107)"
};

function colorBack() {
    document.getElementById("aiPlayingField").style.backgroundColor = "rgb(46, 24, 66)"
};

function closeModal() {end.style.display = "none"};

function modalBtn() {
    document.getElementById("end").style.display = "block";
  };

function ending() {
        if (effects[48].state === 1){
            document.getElementById("noBody3").style.display = "none"
            document.getElementById("noBody2").style.display = "block"}
        else {
            document.getElementById("noBody3").style.display = "none"
            document.getElementById("noBody4").style.display = "block"
            document.body.style.backgroundColor = "rgb(180,86,43)"
            document.body.style.color = "rgb(206,130,60)"}
    
  };
