const arr = [1, 5, 3, 7, 67, 13, 9];
function isEven(n) {
    return n % 2 == 0;
}
function firstEven(arr, isEven) {
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            return i;
        }
    }
    return -1;
}
console.log(firstEven(arr, isEven));