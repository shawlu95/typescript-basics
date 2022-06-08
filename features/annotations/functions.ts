const add = (a: number, b: number): string => {
  return (a * b).toLocaleString();
};

console.log(add(2, 3));

// three way to declare functions
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const mult = function (a: number, b: number): number {
  return a * b;
};

const logger = (msg: string): void => {
  console.log(msg);
};

//  Type 'null' is not assignable to type 'void'.
// const logger2 = (msg: string): void => {
//   console.log(msg);
//   return null;
// };

const logger3 = (msg: string): void => {
  console.log(msg);
  return undefined;
};

// will never reach end of function (rare use case)
const throwError = (msg: string): never => {
  throw new Error(msg);
};

// destructure arguments
const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date, weather);
};
logWeather({ date: new Date(), weather: 'sunny' });
