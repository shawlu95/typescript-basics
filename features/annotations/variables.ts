const apple: number = 5;
let speed: string = 'fast';

let hasName: boolean = false;

// value has identical name as type
let nothing: null = null;
let no: undefined = undefined;

// built-in object
let now: Date = new Date();

// array
let colors: string[] = ['red', 'black'];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 5,
};

// function signature
const log: (i: number) => void = (i: number) => {
  console.log(i);
};

// JSON.parse returns 'any'
const json = '{"x": 10, "y": 20}';
const coor: { x: number; y: number } = JSON.parse(json);
console.log(coor);

// typescript knows x is a number
console.log(coor.x.toFixed(2));

// declare a variable, assign later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true;
  }
}

//  when type cannot be inferred, can be multiple types
let numbers = [-10, -1, 12];
let positive: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positive = numbers[i];
  }
}
