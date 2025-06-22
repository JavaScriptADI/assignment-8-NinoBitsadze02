const arr = [11, 33, 21, 65, 24, 87, 26];
function isEven(n) {
    return n % 2 == 0;
}
function firstEven(arr, isEven) {
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            return arr[i];
        }
    }
}
console.log(firstEven(arr, isEven));