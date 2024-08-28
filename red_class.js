class Car {
  name = "";

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Ship extends Car {
  constructor(name) {
    super(name);
  }
}

const car = new Car("BMW");
const ship = new Ship("Alfa");

console.log(car.getName());
console.log(ship.getName());
