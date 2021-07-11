
let value = '';
let calculator = document.getElementById("calculator");
let resultArea = document.getElementById("result-area");

function calculate() {

    if (value.includes('+')) {
        let arr = value.split('+')
        sum(arr);
    }

    else if (value.includes('-')) {
        let arr = value.split('-')
        deduct(arr);
    }

    else if (value.includes('*')) {
        let arr = value.split('*')
        multiply(arr);
    }

    else if (value.includes('/')) {
        let arr = value.split('/')
        devide(arr);
    }
}

function sum(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += parseInt(arr[i]);
    }
    value = result;
    resultArea.textContent = result;
}


function deduct(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result -= parseInt(arr[i]);
    }
    value = result;
    resultArea.textContent = result;
}

function multiply(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result *= parseInt(arr[i]);
    }
    value = result;
    resultArea.textContent = result;
}

function devide(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result /= parseInt(arr[i]);
    }
    value = result;
    resultArea.textContent = result;
}


calculator.addEventListener("click", function (e) {
    if (e.target.className == 'btn') {

        if (e.target.value == 'c') {
            value = '';
            resultArea.textContent = value;
        }
        else {
            value += e.target.value;
            resultArea.textContent = value
        }
    }
})
