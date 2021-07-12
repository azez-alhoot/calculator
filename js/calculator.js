let value = '';
let calculator = document.getElementById("calculator");
let resultArea = document.getElementById("result-area");

function setResults() {
    resultArea.textContent = value;
}

function calculate(){
    
    if (value.includes('+')) {
        let arr = value.split('+');
        value = operation(arr, '+');
        setResults();
    }
    
    else if (value.includes('-')) {
        let arr = value.split('-')
        value =  operation(arr, '-');
        setResults();
    }
    
    else if (value.includes('*')) {
        let arr = value.split('*')
        value = operation(arr, '*');
        setResults();
    }
    
    else if (value.includes('/')) {
        let arr = value.split('/')
        value = operation(arr, '/');
        setResults();
    }
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

let calcBtn = document.getElementById('do-calck');
calcBtn.addEventListener('click', function(e){
    calculate();
})

