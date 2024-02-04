
//VARIABLES
let win = 0;
let lose = 0;
let tie = 0;
let isAutoplay = false;
let id;

let winDisplay = document.getElementById("win");
let loseDisplay = document.getElementById("lose");
let tieDisplay = document.getElementById("tie");
let button = document.getElementById("autoplay");
let display = document.getElementById("display");

console.log("button")
function userInput(value) {
    let sysInput = systemInput();
    console.log(value, sysInput);
    play(value, sysInput);
    win = win.toString().padStart(3, 0);
    lose = lose.toString().padStart(3, 0);
    tie = tie.toString().padStart(3, 0);

    winDisplay.innerHTML = `win ${win}`;
    loseDisplay.innerHTML = `lose ${lose}`;
    tieDisplay.innerHTML = `tie ${tie}`;

    console.log("win:", win, "lose:", lose, "tie:", tie);
   

}
function systemInput() {
    let systemInput = Math.round(Math.random() * 2);
    if (systemInput == 0) {
        return 'rock';
    } else if (systemInput == 1) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function play(userIn, systemIn) {
    if (userIn == 'rock') {
        if (systemIn == 'rock') {
            tie++;
            console.log("tie");
        } else if (systemIn == 'paper') {
            lose++;
            console.log("lose");
        } else {
            win++;
            console.log("win");
        }
    }
    else if (userIn == 'paper') {
        if (systemIn == 'rock') {
            win++;
            console.log("win");
        } else if (systemIn == 'paper') {
            tie++;
            console.log("tie");
        } else {
            lose++;
            console.log('lose');
        }
    }
    else {
        if (userIn == 'scissor') {
            if (systemIn == 'rock') {
                win++;
                console.log("win");
            } else if (systemIn == 'paper') {
                lose++;
                console.log("lose");
            } else {
                tie++;
                console.log("tie");
            }
        }
    }
}

function reset() {
    let win = 0;
    let lose = 0;
    let tie = 0;
    winDisplay.innerHTML = `win :000`;
    loseDisplay.innerHTML = `lose :000`;
    tieDisplay.innerHTML = `tie :000`;
    console.log("win:", win, "lose:", lose, "tie:", tie)

}




function autoplay() {
    if (!isAutoplay) {
        button.innerHTML = "⏸️";
        button.className = "Activate";
        isAutoplay = true;
        id = setInterval(() => {
            let userIn = systemInput();
            console.log(userIn);
            userInput(userIn);

        }, 500);
    } else {
        clearInterval(id);
        isAutoplay=false;
        button.innerHTML = "▶️";
        button.className = "Deactivate";
    }

}