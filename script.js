const containerE1 = document.querySelector(".animated-text")

const animatedText = ["Placement Committee"]

let idx = 0;

let charidx = 0;

updateText()

function updateText(){
    charidx++; // mob=ve to next letter of the word
    containerE1.innerHTML = `
    <h1>NMIMS ${animatedText[idx].slice(0, charidx)}</h1>
    `;
    // If that specific word is done
    if (charidx === animatedText[idx].length){
        careerIdx++;    // Move to next word
        charidx = 0;    // start with the first letter of the next word
    }
    setTimeout(updateText, 300)
}

/***** Multi - step form in register.html *****/

var form1 = document.getElementById("form1")
var form2 = document.getElementById("form2")

var next1 = document.getElementById("next1")
var back1 = document.getElementById("back1")
var next2 = document.getElementById("next2")

next1.onclick = function(){
    
}