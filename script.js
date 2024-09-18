let userScore = 0;
let compScore = 0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScores=document.querySelector("#user-score");
const compScores=document.querySelector("#comp-score");
const generatecompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    //console.log("Game was Draw !");
    msg.innerText="Game was Draw ! Play again :)";
    msg.style .backgroundColor="purple";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
       // console.log("Congo ! You Win !");
       userScore++;
       userScores.innerText=userScore;
        msg.innerText=`Congo ! You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style .backgroundColor="green";
    }else{
        //console.log("You Lose ! Comp Win !");
        compScore++;
        compScores.innerText=compScore;
        msg.innerText=`You Lose ! Comp Win ! Your ${userChoice} beats by ${compChoice}`;
        msg.style .backgroundColor="darkred";
    }
};
const playGame=(userChoice)=>{
   // console.log("user Choice :) ",userChoice);
    //generate computer choice 
    const compChoice=generatecompchoice();
   // console.log("Computer Choice :) ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
           // userWin=compChoice==="paper" ? false : true ;
           if(compChoice==="paper"){
            userWin=false;
           }else if(compChoice==="scissor"){
            userWin=true;
           }
        }else if (userChoice==="paper"){
                //rock,scissors
                //userWin=compChoice==="scissors" ? false : true ;
                if(compChoice==="scissor"){
                    userWin=false;
                   }else if(compChoice==="rock"){
                    userWin=true;
                   }
        }else if(userChoice==="scissor"){
            //rock,paper
            //userWin=compChoice==="rock" ? false : true ;
            if(compChoice==="rock"){
                userWin=false;
               }else if(compChoice==="paper"){
                userWin=true;
        }
    }
    showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
