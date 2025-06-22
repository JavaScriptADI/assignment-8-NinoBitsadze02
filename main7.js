const arr = [1, 2, 3, 4, 5, 6, 7];
function isEven(n) {
    return n % 2 == 0;
}
function some(arr, isEven) {
    for (let i = 0; i < arr.length; i++){
        if(isEven(arr[i])) {
            return true;
        }
    }
    return false;
}
console.log(some(arr, isEven));