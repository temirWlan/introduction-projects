const numArr: Array<number> = [2, 34, 345, 99, 24];
const strArr: Array<string> = ['string', 'number', 'boolean', 'null', 'undefined', 'object'];

function reverseArr<T>(arr: T[]): T[] {
  const newArr = [];

  for (let i = arr.length - 1; i > 0; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

reverseArr(numArr);
reverseArr(strArr);