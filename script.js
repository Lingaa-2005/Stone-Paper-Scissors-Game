let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was a Draw");
    msg.innerHTML = "<i>Game was a Draw. Play again!!</i>";
    msg.style.backgroundColor = "#081b31";
    msg.style.Color = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        console.log("Kudos!! You won");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerHTML = `<i>Kudos!! You won... Your ${userChoice} beats Computer's ${compChoice}</i>`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You lose.");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerHTML = `<i>Oops!! You lose... Computer's ${compChoice} beats Your ${userChoice}</i>`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log(`user choice : ${userChoice}`);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log(`Computer Choice : ${compChoice}`);

    if (userChoice === compChoice) {
        // Draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


