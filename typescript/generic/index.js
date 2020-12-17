var numArr = [2, 34, 345, 99, 24];
var strArr = ['string', 'number', 'boolean', 'null', 'undefined', 'object'];
function reverseArr(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i > 0; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
reverseArr(numArr);
reverseArr(strArr);
