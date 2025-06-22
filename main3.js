const arr = [1, 2, 3, 6, 8, 4, 12, 34];
function cb(accumulator, num) {
    return accumulator + num;
}
function reduce(arr, cb, init) {
    let accumulator = init;
    for (let i = 0; i < arr.length; i++) {
        accumulator = cb(accumulator, arr[i]);
    }
    return accumulator;
}
console.log(reduce(arr, cb, 0));