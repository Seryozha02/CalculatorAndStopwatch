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
let milliSeconds = 0;

let val

function start() {
    pause();
   val = setInterval(() => {timer() ;}, 10)
}

function pause() {
    clearInterval(val)
}

function reset() {
    hour = 0;
    minute = 0;
    seconds = 0
    milliSeconds = 0;

    document.getElementById("hour").innerText = "00"    
    document.getElementById("minute").innerText = "00"
    document.getElementById("seconds").innerText = "00"
    document.getElementById("milliSeconds").innerText = "000"    
}


function timer() {
    if((milliSeconds += 10) == 1000){
        milliSeconds = 000
        seconds++
    }

    if(seconds == 60) {
        seconds = 0
        minu
    }
}