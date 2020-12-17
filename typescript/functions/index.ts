function reduceNumbers(numbers: number[]): number {
  let res: number = 0;

  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }

  return res;
}

function showNumbersSum(): void {
  const sum = reduceNumbers([3, 6, 7, 9, 343, 23]);
  console.log(sum);
}

showNumbersSum();

// different function data
type Point = number | undefined;

interface Position {
  x: Point;
  y: Point;
};

interface PositionWithDefaultProperty extends Position {
  default: string
}

function calculatePosition(): Position;
function calculatePosition(a: number): PositionWithDefaultProperty;
function calculatePosition(a: number, b: number): Position;

function calculatePosition(a?: number, b?: number) {
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
      default: a.toString()
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