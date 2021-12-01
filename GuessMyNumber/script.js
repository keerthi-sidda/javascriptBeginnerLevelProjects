'use strict';
let secretNumber = Math.floor(Math.random()*20)+1;
let score = 20;
let highScore = 0;
const displayMessage = function(message){
     document.querySelector('.message').textContent = message;
};
const displayScore = function(score){
    document.querySelector('.score').textContent = score;
};
const displayHighScore = function(highScore){
    document.querySelector('.highscore').textContent = highScore;
};
const changeBodyBgColor = function(colorCode){
    document.querySelector('body').style.backgroundColor = colorCode;
};
document.querySelector('.again').addEventListener('click',
    function(){
        score = 20;
        secretNumber = Math.floor(Math.random()*20)+1;
        displayScore(score);
        //document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing...');
        document.querySelector('.number').style.width = '15rem';
        changeBodyBgColor('#222');
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

    }
);
document.querySelector('.check').addEventListener('click',
    function(){
        const guess = Number(document.querySelector('.guess').value);
        //when number equals null
        if(!guess){
            //document.querySelector('.message').textContent = '⛔ No Number!';
            displayMessage('⛔ No Number!');
            displayScore(score);
        }
        else{
            //when number equals guessed number
            if(secretNumber == guess){
                //document.querySelector('.message').textContent = '✅ Correct Number!';
                displayMessage('✅ Correct Number!');
                document.querySelector('.number').textContent = secretNumber;
                score++;
                displayScore(score);
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                if(score > highScore){
                    highScore = score;
                }
                
            }
            else{
                if(score > 1){
                    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
                    score--;
                    displayScore(score);
                }
                else{
                    displayMessage('💥 You lost the game!'); 
                    score = 0;
                    displayScore(score);
                    changeBodyBgColor('#FF0000');
                }
            }
        }
        displayHighScore(highScore);
    }
);