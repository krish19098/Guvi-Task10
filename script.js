const timerElement = document.getElementById("timer");
let seconds = 10;

function countdown() {
    if (seconds >= 0) {
        timerElement.textContent = seconds;
        seconds--;
        setTimeout(countdown, 1000);
    } else {
        timerElement.textContent = "Time's up!";
    }
}

countdown(); 
