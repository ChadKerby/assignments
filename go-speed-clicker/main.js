let score;
const duration = 10;
let startTime;
let ended = true;
const timerTxt = document.getElementById("timer");
const clicksTxt = document.getElementById("clicks");
const button = document.getElementById("clickBtn");

// start game function
function startGame(){
    score = -1;
    ended = false;
    startTime = new Date().getTime();
// timer with setInterval
    const timerId = setInterval(function(){
        const total = (new Date().getTime() - startTime) / 1000;

        if(total < duration){
            timerTxt.textContent = total.toFixed(3);
            clicksTxt.textContent = (score / total).toFixed(2);
        }else{
            eneded = true;
            clearInterval(timerId);
            endGame();
        }
    }, 1);
}

function endGame(){
    const clicksBySec = (score / duration).toFixed(2);
    timerTxt.textContent = duration.toFixed(3);
    clicksTxt.textContent = clicksBySec;

    setTimeout(function(){
        
    }

}