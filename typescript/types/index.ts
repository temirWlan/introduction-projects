// string
const str: string = 'jlljlj';
const currentStatus: string = 'pending';

// number 
const count: number = 34134;
const speed: number = 250;
const floanNum: number = 4.7;

// boolean
const isFetching: boolean = true;
const isDeclared: boolean = false;

// undefined 
const u: undefined = undefined;

// null
const n: null = null;

// object
const obj: object = {
  a: 'a',
  b: 53
};

// array
const randomNumArr: number[] = [1, 3, 13, 34, 4234]; // number - type, [] - array
const strArr: string[] = str.split(''); 
const numArr: Array<number> = [3, 3, 5, 3, 34, 32]; // Define with generic(<>), Array - global class,  number - type

// tuple
let a: [number, boolean];
a = [10, false];
const b: [boolean, string] = [true, 'somestring'];

// any
let someArr: Array<any> = [2, 3, 4, 'string'];
someArr = [3, 'dfjlsfj', true, {}];
let anyVar: any = 17;
anyVar = 'type has changed to string';

// void
function sayHello(name: string): void {
  alert(`Hello ${name}`);
}
const calculateCount = (a: number, b: number): void => console.log(a + b);

// never 
function catchError(message: string): never {
  throw new Error(message);
}

// function infiniteFunc(): never { // won't finish
//   while (true) {};
// }


// Own type(declare by 'type' keyword)
type password = string;
type ID = string | number; // more than one type

const userPassword: password = 'password123';
const stringID: ID = '2342';
const numberID: ID = 2342;

type Status = 'loading' | 'loaded' | 'error';

function showResult(status: Status) {
  // some code
}

showResult('loading');
showResult('loaded');
