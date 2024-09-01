let score = JSON.parse(localStorage.getItem('score'))

function resetScore(){

    score.wins= 0,
    score.losses = 0,
    score.ties=0
    document.getElementById('result_card').innerHTML = `
    <p>
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
    </p>`
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
    document.getElementById('result_card').innerHTML = `
    <p>you choose ${yourChoice}, computer chooses ${computerChoice}, ${result}</p><br>
    <p>
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
    <button onclick="resetScore()" id="reset">Reset</button>
    </p>
    `;
}

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





