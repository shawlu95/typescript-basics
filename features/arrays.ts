const cars: string[] = ['ford', 'tsla'];

// object array
const dates: Date[] = [new Date(), new Date()];

// 2D array
const carsByMake: string[][] = [['f150'], ['corolla'], ['tiguan']];

// infer extracted element
const car: string = cars.pop();

// prevent incompataible
cars.push('toyota');

// help with map
cars.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (string | Date)[] = [new Date(), '1995-01-25'];
importantDates.push('1996-01-16');
