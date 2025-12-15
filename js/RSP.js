let possibleMoves = ['rock', 'paper', 'scissors'];

let beats = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
};

let wins = 0;
let draws = 0;
let loses = 0;
let totalPlays = 0;

let playerChoices = {
    'rock': 0,
    'paper': 0,
    'scissors': 0
};

let computerChoices = {
    'rock': 0,
    'paper': 0,
    'scissors': 0
};

function updateStats() {
    document.getElementById('winsCell').innerHTML = wins;
    document.getElementById('drawsCell').innerHTML = draws;
    document.getElementById('losesCell').innerHTML = loses;
    document.getElementById('totalPlays').innerHTML = 'Total plays: ' + totalPlays;
    
    if (totalPlays > 0) {
        let winsPercent = (wins / totalPlays) * 100;
        let drawsPercent = (draws / totalPlays) * 100;
        let losesPercent = (loses / totalPlays) * 100;
        
        document.getElementById('winsPercentCell').innerHTML = winsPercent.toFixed(1) + '%';
        document.getElementById('drawsPercentCell').innerHTML = drawsPercent.toFixed(1) + '%';
        document.getElementById('losesPercentCell').innerHTML = losesPercent.toFixed(1) + '%';
    }
    
    // Update choice statistics
    document.getElementById('playerRockCount').innerHTML = playerChoices.rock;
    document.getElementById('playerPaperCount').innerHTML = playerChoices.paper;
    document.getElementById('playerScissorsCount').innerHTML = playerChoices.scissors;
    
    document.getElementById('computerRockCount').innerHTML = computerChoices.rock;
    document.getElementById('computerPaperCount').innerHTML = computerChoices.paper;
    document.getElementById('computerScissorsCount').innerHTML = computerChoices.scissors;
}

function playerMove(choice) {
    let player = choice;
    let computer = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    
    totalPlays++;
    playerChoices[player]++;
    computerChoices[computer]++;
    
    document.getElementById('gameLog').innerHTML = 
        'Player: ' + player + ' | Computer: ' + computer;
    
    if (player === computer) {
        document.getElementById('resultTitle').innerHTML = 'Draw!';
        draws++;
    } else if (beats[player] === computer) {
        document.getElementById('resultTitle').innerHTML = 'You win!';
        wins++;
    } else {
        document.getElementById('resultTitle').innerHTML = 'You lose!';
        loses++;
    }
    
    updateStats();
}

updateStats();