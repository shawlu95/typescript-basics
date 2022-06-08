const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// declare type for tuple to enforce order (rare use-case)
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];

// tuple is not descriptive
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weight: 3354,
};
