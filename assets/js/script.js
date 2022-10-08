document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "option1") {
                alert("You clicked submit");
            } else {
                let game = this.getAttribute("data-type");
                alert(`You clicked ${game}`);
            }
        })
    }
})


function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongScore() {

}

function displayButtons() {

}

function displayFlag() {

}