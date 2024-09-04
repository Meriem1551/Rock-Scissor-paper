let score = JSON.parse(localStorage.getItem('score'))|| {
    wins : 0,
    losses:0,
    ties:0
};
let interval;
let isAutoPlay = false;
function autoPlay(){
    console.log("AutoPlay function called");
    if(!isAutoPlay){
        interval = setInterval(function (){
            let choice = pickComputerChoice();
            playGame(choice);
        }, 2000);
        isAutoPlay = true;
    }
    else{
        clearInterval(interval);
        isAutoPlay=false;
    }
}
function resetScore(){

    score.wins= 0,
    score.losses = 0,
    score.ties=0
    localStorage.removeItem('score');
    document.getElementById('wins').innerHTML = score.wins;
    document.getElementById('losses').innerHTML = score.losses;
    document.getElementById('ties').innerHTML = score.ties;
    document.getElementById('result').innerText= ``;
};

function pickComputerChoice(){
    let computerChoice = '';
    let randomNum  = Math.random();
    if(randomNum >= 0 && randomNum <= 1/3){
        computerChoice = 'rock';
    }
    else if(randomNum >= 1/3 && randomNum <= 2/3){
        computerChoice = 'paper';
    }
    else{
        computerChoice = 'scissor';
    }
    return computerChoice;
}

function showResult(yourChoice, computerChoice, result){
    if (result == 'you win.'){
        score.wins++;
    }
    else if(result == 'you lose.'){
        score.losses++;
    }
    else{
        score.ties++;
    }
    localStorage.setItem('score', JSON.stringify(score));
    document.getElementById('wins').innerHTML = score.wins;
    document.getElementById('losses').innerHTML = score.losses;
    document.getElementById('ties').innerHTML = score.ties;
    if(result!==''){ 
        document.getElementById('result').innerText= `you choose ${yourChoice}, computer chooses ${computerChoice}, ${result}`
    }
}

showResult('', '', '');

function playGame(game){
    let computerChoice = pickComputerChoice();
    let result = '';
    if(game == 'rock'){
        if(computerChoice == 'rock')
            result = 'tie.';
        else if(computerChoice == 'paper'){
            result = 'you loss.';
        }
        else{
            result = 'you win.';
        }
    }
    else if(game == 'paper'){
        if(computerChoice == 'rock')
            result = 'you win.';
        else if(computerChoice == 'paper'){
            result = 'tie.';
        }
        else{
            result = 'you lose.';
        }
    }
    else{
        if(computerChoice == 'rock')
            result = 'you lose.';
        else if(computerChoice == 'paper'){
            result = 'you win.';
        }
        else{
            result = 'tie.';
        }
    };
    showResult(game,computerChoice, result);
}





