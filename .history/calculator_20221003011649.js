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

let miliSeconds = 0
let seconds = 0
let minute = 0
let hour = 0

let asd

function start() {
    pause()

    asd = setInterval(() =>{ timer();}, 10)
}