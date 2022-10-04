// calculator's part
function clearScreen() {
    document.getElementById("result").value = ""
}

function display(value) {
    document.getElementById("result").value += value
}

function calculate() {
    const val = document.getElementById("result").value;
    const sum = eval(val)
    document.getElementById("result").value = sum
}

// stopwatch՛s part

let milliSeconds = 0
let seconds = 0
let minute = 0
let hour = 0

let asd

function start() {
    pause()

    asd = setInterval(() =>{ timer(); }, 10)
}

function pause() {
    clearInterval(asd)
}

function reset() {
    hour = 0
    minute = 0
    seconds = 0
    milliSeconds = 0

    document.getElementById("hour").innerText = "00"
    document.getElementById("minute").innerText = "00"
    document.getElementById("seconds").innerText = "00"
    document.getElementById("milliSeconds").innerText = "000"
}

function timer() {
    if((milliSeconds += 10) == 1000){
        milliSeconds = 0
        seconds++
    }

    if
}