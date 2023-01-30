const UserChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')

const choices = document.querySelectorAll('button');

let userChoice
let userValue
let randomNumber
choices.forEach(choices => choices.addEventListener('click' , (e) =>{
    computerChoiceDisplay.innerHTML = ""
    resultDisplay.innerHTML = ""
    userChoice = e.target.id
    UserChoiceDisplay.innerHTML = userChoice
    if(userChoice === "ROCK"){
        userValue = 1;
        // var x = document.createElement('img');
        // x.setAttribute("src" , "rockimg.png");
        // x.setAttribute("width" , "100px")
        // document.getElementById('user-choice').appendChild(x).lastChild
    }
    if(userChoice === "PAPER"){
        userValue = 2;
        // var x = document.createElement('img');
        // x.setAttribute("src" , "paperimg.png");
        // x.setAttribute("width" , "100px")
        // document.getElementById('user-choice').appendChild(x);
    }
    if(userChoice === "SCISSORS"){
        userValue = 3;
        // var x = document.createElement('img');
        // x.setAttribute("src" , "scissorsimg.png");
        // x.setAttribute("width" , "100px")
        // document.getElementById('user-choice').appendChild(x);
    }
    setTimeout(generateComputerChoice,500)
    setTimeout(generateResult,500)
    
}))

function generateComputerChoice(){
    randomNumber = Math.floor(Math.random()*3)+1;
    if(randomNumber === 1){
        computerChoiceDisplay.innerHTML = "ROCK";
        // var x = document.createElement('img');
        // x.setAttribute("src" , "rockimg.png");
        // x.setAttribute("width" , "100px")
        // document.getElementById('computer-choice').appendChild(x).lastChild
    }
    if(randomNumber === 2){
        computerChoiceDisplay.innerHTML = "PAPER";
        // var x = document.createElement('img');
        // x.setAttribute("src" , "paperimg.png");
        // x.setAttribute("width" , "100px")
        // document.getElementById('computer-choice').appendChild(x);
    }
    if(randomNumber === 3){
        computerChoiceDisplay.innerHTML = "SCISSORS";
        // var x = document.createElement('img');
        // x.setAttribute("src" , "scissorsimg.png");
        // x.setAttribute("width" , "100px")
        // document.getElementById('computer-choice').appendChild(x);
    }

    generateResult()
}
function generateResult(){
    if(randomNumber === userValue){
        resultDisplay.innerHTML="MATCH DRAW"
        resultDisplay.style.backgroundColor="yellow";
        resultDisplay.style.color="black";
    }
    if(randomNumber === 1 && userChoice === "PAPER"){
        resultDisplay.innerHTML = "CONGRATULATIONS YOU HAVE WON THE GAME !"
        resultDisplay.style.backgroundColor="green";
        resultDisplay.style.color="black";
    }
    if(randomNumber === 1 && userChoice === "SCISSORS"){
        resultDisplay.innerHTML = "SORRY YOU HAVE LOST THE GAME !"
        resultDisplay.style.backgroundColor="red";
        resultDisplay.style.color="black";
    }
    if(randomNumber === 2 && userChoice === "ROCK"){
        resultDisplay.innerHTML = "SORRY YOU HAVE LOST THE GAME !"
        resultDisplay.style.backgroundColor="red";
        resultDisplay.style.color="black";
    }
    if(randomNumber === 2 && userChoice === "SCISSORS"){
        resultDisplay.innerHTML = "CONGRATULATIONS YOU HAVE WON THE GAME !"
        resultDisplay.style.backgroundColor="green";
        resultDisplay.style.color="black";
    }
    if(randomNumber === 3 && userChoice === "ROCK"){
        resultDisplay.innerHTML = "CONGRATULATIONS YOU HAVE WON THE GAME !"
        resultDisplay.style.backgroundColor="green";
        resultDisplay.style.color="black";
    }
    if(randomNumber === 3 && userChoice === "PAPER"){
        resultDisplay.innerHTML = "SORRY YOU HAVE LOST THE GAME !"
        resultDisplay.style.backgroundColor="red";
        resultDisplay.style.color="black";
    }
}

