function number(array) {
    let result = "";
    for (let i = 0; i < array.lenght; i++) {
        result += array[i] + "  ";
    }
    return result;
}

console.log(number([1, 2, 3, 4, 5]));