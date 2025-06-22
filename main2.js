const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven(n) {
    return n % 2 == 0;
}
function filter(arr, cb) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filter(arr, isEven));