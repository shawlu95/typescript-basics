interface Reportable {
  summary(): string;
}

const oldCivic = {
  make: 'civic',
  year: 1999,
  broken: true,

  summary(): string {
    return `${this.make} ${this.year}`;
  },
};

const drink = {
  color: 'clear',

  summary(): string {
    return `My color is ${this.color}`;
  },
};

// this function is a lot more reusable thanks to interface
const info = (item: Reportable): void => {
  console.log(item.summary());
};

info(oldCivic);
info(drink);
