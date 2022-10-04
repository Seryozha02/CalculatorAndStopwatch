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

let hour = 0;
let minute = 0;
let seconds = 0;
let milliSeconds =000;

let val

function start() {
    pause();
   val = setInterval(() => {timer() ;}, 10)
}

function pause() {
    clearInterval(val)
}

function reset() {

}