function clearScreen() {
    document.getElementById("result").value = ""
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    const sum = document.getElementById("result").value;
    eval(sum)
    const sum = document.getElementById("result").
}