function operation(arr, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            for (let i = 0; i < arr.length; i++) {
                result += parseInt(arr[i]);
            }
            break;
        case '-':
            result = arr[0];
            for (let i = 1; i < arr.length; i++) {
                result -= parseInt(arr[i]);
            }
            break;
        case '*':
            result = arr[0];
            for (let i = 1; i < arr.length; i++) {
                result *= parseInt(arr[i]);
            }
            break;
        case '/':
            result = arr[0];
            for (let i = 1; i < arr.length; i++) {
                result /= parseInt(arr[i]);
            }
            break;
    }

    return result;
}