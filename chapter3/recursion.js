// Your code here.
function isEven(num){
    if (num === 0){
        return (true);
    } else if (num === 1){
        return (false);
    } else {
        num = num - 2;
        return (isEven(num));
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
