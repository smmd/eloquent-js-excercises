function reverseArray(a) {
    let result = [];

    for (let i = a.length - 1; i >= 0; i--) {
        result.push(a[i]);
    }

    return result;
}

function reverseArrayInPlace(arrayValue) {
    let oppositeIndex = arrayValue.length - 1;
    let opposite = 0;
    let current = 0;

    for (let i = 0; i <= arrayValue.length; i++) {
        if (oppositeIndex == i) {
            break;
        }

        opposite = arrayValue[oppositeIndex];
        current = arrayValue[i];

        arrayValue[i] = opposite;
        arrayValue[oppositeIndex] = current;

        oppositeIndex--;
     }

    return arrayValue;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
