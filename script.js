let buttons = document.querySelectorAll(".but");
let reset = document.querySelector("#reset");
let winner = document.querySelector(".win");
let message = document.querySelector("#message")
let turn1 = true;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]
buttons.forEach(but => {
    but.addEventListener("click", () => {
        console.log("done");
        if (turn1) {
            but.innerText = "X";
            turn1 = false;
        } else {
            but.innerText = "O";
            turn1 = true;
        }
        but.disabled = true;
        checkWinner();
})
});

function disableBut() {
    for (let x of buttons) {
        x.disabled = true;
    }
}

function enableBut() {
    for (let x of buttons) {
        x.disabled = false;
        x.innerText = "";
    }
}
function showWinner(display) {
    message.innerText = `${display} is the winner`;
    winner.classList.remove("win");
    winner.classList.add("show");
    disableBut();
}

function checkWinner() {
    for(let i = 0; i < win.length; i++) {
    let first = win[i][0];
    let second = win[i][1];
    let third = win[i][2];
    let display = buttons[first].innerText;
    if (buttons[first].innerText != "" && buttons[second].innerText != "" && buttons[third].innerText != "") 
    if (buttons[first].innerText == buttons[second].innerText && buttons[second].innerText == buttons[third].innerText) {
        showWinner(display);
        return;
    }
}
}

reset.addEventListener("click", () => {
    turn1 = true;
    enableBut();
    winner.classList.remove("show");
    winner.classList.add("win");
})
