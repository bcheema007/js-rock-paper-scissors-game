const output = document.querySelector('div');
const btns = document.querySelectorAll('button');
const playAgainBtn = document.querySelector('#playAgain');
const arr = ['Rock', 'Paper', 'Scissors'];
let rockImg = document.querySelector('#rock');
let paperImg = document.querySelector('#paper');
let scissorImg = document.querySelector('#scissors');
const rock = document.querySelector('#rock2');
const paper = document.querySelector('#paper2');
const scissor = document.querySelector('#scissors2');

let playerWins = 0;
let computerWins = 0;

for(let i = 0; i < btns.length - 1; i++) {
    btns[i].addEventListener('click', winner);
    btns[i].setAttribute('style', 'margin-Top:10px;');
}

playAgainBtn.addEventListener('click', reset);

function winner(event) {
    const choice = Math.floor(Math.random() * arr.length);
    const computerChoice = arr[choice];

    const playerChoice = event.target.innerText;

    output.textContent = "";

    let message = "";
    
    if(playerChoice === computerChoice) {
        message = "Draw!";
        toggle(playerChoice); //to set correct images
    }
    else if(playerChoice === 'Rock' && computerChoice === 'Scissors') {
        message = "Player Wins!";
        playerWins++;
        rockImg.classList.toggle('hide');
        scissorImg.classList.toggle('hide');
    }
    else if(playerChoice === 'Scissors' && computerChoice === 'Rock') {
        message = "Computer Wins!";
        computerWins++;
        scissorImg.classList.toggle('hide');
        rockImg.classList.toggle('hide');
    }
    else if(playerChoice === 'Rock' && computerChoice === 'Paper') {
        message = "Computer Wins!";
        computerWins++;
        rockImg.classList.toggle('hide');
        paperImg.classList.toggle('hide');
    }
    else if(playerChoice === 'Paper' && computerChoice === 'Rock') {
        message = "Player Wins!";
        playerWins++;
        paperImg.classList.toggle('hide');
        rockImg.classList.toggle('hide');
    }
    else if(playerChoice === 'Paper' && computerChoice === 'Scissors') {
        message = "Computer Wins!";
        computerWins++;
        paperImg.classList.toggle('hide');
        scissorImg.classList.toggle('hide');
    }
    else {
        message = "Player Wins!";
        playerWins++;
        scissorImg.classList.toggle('hide');
        paperImg.classList.toggle('hide');
    }

    output.innerHTML = `Player[${playerWins}] Computer[${computerWins}] <br> ${playerChoice} vs ${computerChoice} <br> ${message}`;

    output.setAttribute('style', 'line-height: 1.5;');

}

function reset() {
    if(!rockImg.classList.toggle('hide')) { //if class exists returns false but ! makes it true and therefore inside statement is run.
        rockImg.classList.toggle('hide');
    }
    if(!rock.classList.toggle('hide')) {
        rock.classList.toggle('hide');
    }
    if(!paperImg.classList.toggle('hide')) {
        paperImg.classList.toggle('hide');
    }
    if(!paper.classList.toggle('hide')) {
        paper.classList.toggle('hide');
    }
    if(!scissorImg.classList.toggle('hide')) {
        scissorImg.classList.toggle('hide');
    }
    if(!scissor.classList.toggle('hide')) {
        scissor.classList.toggle('hide');
    }
}

function toggle(playerChoice) {

    if(playerChoice === 'Rock') {
        rockImg.classList.toggle('hide');
        rock.classList.toggle('hide');
    }
    else if(playerChoice === 'Paper') {
        paperImg.classList.toggle('hide');
        paper.classList.toggle('hide');
    }
    else {
        scissorImg.classList.toggle('hide');
        scissor.classList.toggle('hide');
    }
}