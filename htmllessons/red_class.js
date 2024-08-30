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

// OOP
class MyCar {
  #name;
  constructor(name) {
    this.#name = name;
  }
  move() {
    console.log(`${this.#name} is moving`);
  }
  wash() {
    console.log(`${this.#name} is washing`);
  }
}

class Bicyle {
  #name;
  drive() {
    console.log(`${this.#name} is driving`);
  }
}

const myCar = new MyCar("BMW");
const bicycle = new Bicycle("Moto");

bicycle.drive();

myCar.wash();
