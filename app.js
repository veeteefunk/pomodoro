const workBtn = document.getElementById('work-btn')
let typeOfCountdown = ""
let numOfMins = 0
const shortBreakBtn = document.getElementById('short-break-btn')
const longBreakBtn = document.getElementById('long-break-btn')
const timeDisplay = document.getElementById('time-display')

workBtn.addEventListener("click", startTimer)
shortBreakBtn.addEventListener("click", startTimer)
longBreakBtn.addEventListener("click", startTimer)

function startWork() {
    typeOfCountdown = "work"
}

function startTimer() {

    if(typeOfCountdown = "work") {
        numOfMins = 25
    } else if (typeOfCountdown = "longbreak") {
        numOfMins = 15
    } else {
        numOfMins = 5
    }

    let allowedTime = numOfMins * 60;

    timeDisplay.innerText = `${Math.floor(allowedTime / 60)}:${allowedTime % 60}`;
}