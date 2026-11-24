let score = JSON.parse(localStorage.getItem('score'))||
             {
                wins: 0,
                losses: 0,
                ties: 0
             };

document.querySelector('.para').innerHTML = `Wins: ${score.wins}   Looses: ${score.losses}   Ties: ${score.ties}`;

function getcomputerMove()
{
    const comp = Math.random();
    let computerMove;
    if( comp>0 && comp<=(1/3)){
      computerMove = 'rock';
    }
    else if((1/3)<comp && comp<=(2/3)){
        computerMove = 'paper';
    }
    else if((2/3)<comp && comp<1){
        computerMove = 'scissor';
    }
    return computerMove;
}


 let result = '';
function game(computerMove,ourMove)
{
   
    if(computerMove==='rock' && ourMove==='rock')
    {
        score.ties++;
        result = 'TIE';
    }
    else if(computerMove==='rock' && ourMove==='paper'){
        score.wins++;
        result = 'You win';
    }
    else if(computerMove==='rock' && ourMove==='scissor'){
        score.losses++;
        result = 'You loose';
    }
    else if(computerMove==='paper' && ourMove==='paper'){
        score.ties++;
        result = 'TIE';
    }
    else if(computerMove==='paper' && ourMove==='rock'){
        score.losses++;
        result = 'You loose';
    }
    else if(computerMove==='paper' && ourMove==='scissor'){
        score.wins++;
        result = 'You win';
    }
    else if(computerMove==='scissor' && ourMove==='rock'){
        score.wins++;
        result = 'You win';
    }
    else if(computerMove==='scissor' && ourMove==='paper'){
        score.losses++;
        result = 'You loose';
    }
    else if(computerMove==='scissor' && ourMove==='scissor'){
        score.ties++;
        result = 'TIE';
    }

    document.querySelector('.para').innerHTML = `Your move: ${ourMove}<br>Computer move: ${computerMove}<br>Result: ${result}<br>Wins: ${score.wins}    Losses: ${score.losses}    Ties: ${score.ties}`;

    localStorage.setItem('score', JSON.stringify(score));

}



document.querySelector('.rock').addEventListener('click',()=>{
    const computerMove = getcomputerMove();
    game(computerMove,'rock');
});

document.querySelector('.paper').addEventListener('click',()=>{
    const computerMove = getcomputerMove();
    game(computerMove,'paper');
});

document.querySelector('.scissor').addEventListener('click',()=>{
    const computerMove = getcomputerMove();
    game(computerMove,'scissor');
});

function resetscore()
{
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
}

document.querySelector('.reset').addEventListener('click',()=>{
    resetscore();
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.para').innerHTML = `Wins: 0    Looses: 0    Ties: 0`;
});