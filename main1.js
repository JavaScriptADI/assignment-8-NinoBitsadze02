const arr = [3, 5, 3, 5, 5, 3];
function square(n) {
    return n * n;
}
function map(arr, cb) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i]));
    }
    return result;
}
console.log(map(arr, square));