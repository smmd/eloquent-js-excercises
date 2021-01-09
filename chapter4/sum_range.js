function range(num1, num2, step = 1) {
    let a = [];
    let num = num1;

    if (num1 > num2 && Math.sign(step)) {
        step = -1;
    }

    a.push(num1);
    while(num != num2) {
        num = num + (step);
        a.push(num);
    }

    return a;
}

function sum(a) {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }

    return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
