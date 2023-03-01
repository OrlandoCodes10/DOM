const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if(!gameOver) {
        p1Score +=1;
        if(p1Score === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
    
})
p2Button.addEventListener('click', function () {
    if(p2Score !==winningScore) {
        p2Score += 1;
        p2Display.textContent = p2Score;
    }
    
})

//When we click on player 1, we want the score to go up for player one

//We want to make sure when someone hits the winning score the game is done or need to know when the game is over