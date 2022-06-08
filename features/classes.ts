class Vehicle {
  // declare property in constructor arg with modifier
  constructor(public color: string) {
    this.color = color;
  }

  public drive(): void {
    console.log('yoooooo');
  }

  protected honk(): void {
    // private + subclass
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheel: number) {
    super('any_color');
  }

  // override
  public drive(): void {
    console.log('vrooooom');
  }

  private honkTwice(): void {
    this.honk();
    this.honk();
  }

  public aggressiveDrive(): void {
    this.honkTwice();
  }
}

const vehicle = new Car(4);
vehicle.drive();
vehicle.aggressiveDrive();

console.log(vehicle.color, vehicle.wheel);
