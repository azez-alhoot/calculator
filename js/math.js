

function sum(arr) {
    let result = 0;
    
    for (let i = 0; i < arr.length; i++) {
        result += parseInt(arr[i]);
    }

    return result;
}


function deduct(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result -= parseInt(arr[i]);
    }
    
    return result;
}

function multiply(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result *= parseInt(arr[i]);
    }
    
    return result;
}

function devide(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result /= parseInt(arr[i]);
    }
    
    return result;
}


