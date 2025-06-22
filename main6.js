const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function isEven(n) {
    return n % 2 == 0;
}
function every (arr, isEven) {
    for (let i = 0; i < arr.length; i++) {
        if(!isEven(arr[i])) {
            return false;
        }
    }
    return true;
}
console.log(every(arr, isEven));