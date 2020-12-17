function reduceNumbers(numbers) {
    var res = 0;
    for (var i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }
    return res;
}
function showNumbersSum() {
    var sum = reduceNumbers([3, 6, 7, 9, 343, 23]);
    console.log(sum);
}
showNumbersSum();
;
function calculatePosition(a, b) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        };
    }
    if (a && !b) {
        return {
            x: a,
            y: undefined,
            "default": a.toString()
        };
    }
    return {
        x: a,
        y: b
    };
}
console.log(calculatePosition());
console.log(calculatePosition(54325));
console.log(calculatePosition(2342, 324329));
