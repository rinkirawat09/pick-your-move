let userScore = 0;
let compScore = 0;

//accessing the choices : stone, paper or scissors
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    // array me store kiya so that indexing ko use kr skae random no. generate krne ke liye
    const options =["rock", "paper", "scissors"];
    // rock, paper, scissors
   const randomIdx = Math.floor(Math.random()*3);
   return options[randomIdx];


};
// DrawGame function
const drawGame = ()=>{
    msg.innerText = "Game was Draw. play Again!.";
    msg.style.backgroundColor = "Blue";

};

// show Winner function
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`you Win!   ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you Loose!   ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}



const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();

    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice ==="scissors"? false : true;
        } else{
            userWin = compChoice ==="rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");

        console.log("choice was clicked", userChoice);
        playGame(userChoice);

    });
});