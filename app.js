let computerChoice = '';
let resultCard = document.getElementById('resultCard');
function pickComputerChoice(){
    let randomNum  = Math.random();
    if(randomNum >= 0 && randomNum <= 1/3){
        computerChoice = 'rock';
    }
    else if(randomNum >= 1/3 && randomNum <= 2/3){
        computerChoice = 'scissor';
    }
    else{
        computerChoice = 'paper';
    }
}
function showResult(yourChoice, result){
    resultCard.style.visibility = 'visible' 
    resultCard.innerHTML = `
        <h3>You choosed ${yourChoice}, Computer choose ${computerChoice}. ${result}</h3>
        <button onclick="hideResult()" id="replay">Replay</button>
    `
}
function hideResult(){
    resultCard.style.visibility = 'hidden';
}
