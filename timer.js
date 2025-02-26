let countdown;
let timeLeft = 30 * 60;
let maxTime = 30 * 60;
let isRunning = false;
const timerDisplay = document.getElementById("timer");
const timeInput = document.getElementById("timeInput");
const progressCircle = document.getElementById("progress");
const playPauseBtn = document.getElementById("playPauseBtn");
const circumference = 2 * Math.PI * 70;
progressCircle.style.strokeDashoffset = circumference;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    let progress = ((maxTime - timeLeft) / maxTime) * circumference;
    progressCircle.style.strokeDashoffset = circumference - progress;
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(countdown);
        playPauseBtn.setAttribute("src", "./img/play.svg")
    } else {
        countdown = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(countdown);
                alert("Time's up!");
            }
        }, 1000);
        playPauseBtn.setAttribute("src", "./img/pause.svg")
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    timeLeft = maxTime;
    playPauseBtn.setAttribute("src", "./img/play.svg")
    progressCircle.style.strokeDashoffset = circumference;
    updateDisplay();
}

function editTime() {
    if (!isRunning) {
        timeInput.value = timerDisplay.textContent;
        timerDisplay.style.display = "none";
        timeInput.style.display = "inline";
        timeInput.focus();
    }
}

function setTime() {
    let timeParts = timeInput.value.split(":");
    if (timeParts.length === 2) {
        let minutes = parseInt(timeParts[0], 10);
        let seconds = parseInt(timeParts[1], 10);
        if (!isNaN(minutes) && !isNaN(seconds)) {
            timeLeft = minutes * 60 + seconds;
            maxTime = timeLeft;
        }
    }
    timeInput.style.display = "none";
    timerDisplay.style.display = "inline";
    updateDisplay();
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        setTime();
    }
}

updateDisplay();