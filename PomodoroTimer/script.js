const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

stop.style.display="none";

let interval;

let timeLeft = 1500;

function update(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60 ;
    let formattedTime =` ${minutes} :  ${seconds}`;

    timer.innerHTML = formattedTime;
}

function startTimer(){
    start.style.display="none";
    stop.style.display="block";
    interval = setInterval(() => {
        timeLeft= timeLeft-1;
        update();
        if(timeLeft === 0){
            alert('Times Up');
            timeLeft = 1500;
        }
    }, 1000);
}
    

function stopTimer(){
    clearInterval(interval);
    start.style.display="block";
    stop.style.display="none";
}
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    update();
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);