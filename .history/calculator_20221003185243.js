// Calculator's part

function clearScreen() {
    document.getElementById("result").value = ""
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    const sum = document.getElementById("result").value;
    const res = eval(sum)
    document.getElementById("result").value = res
}


// Stopwatch's part

let hour = 00;
let minute = 00;
let seconds = 00;
let milliSeconds = 000;

let time

function start() {
    pause();
   time = setInterval(() => {timer() ;}, 10)
}