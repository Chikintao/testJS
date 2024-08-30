const cities = ["Kiev", "Odessa", "Rivne"];

cities.push("Kharkiv");
cities.unshift("Lviv");

console.log(cities[0]);
console.log(cities);

const citiesUSA = ["New-York", "LA"];

console.log(cities.concat(citiesUSA)); //обеденяет
console.log(cities.slice(0, 2)); //вытаскивает из масива

console.log(cities.splice(1, 2));

console.log(cities.reverse);

const _odessa = cities.find((city) => {
  city === "Odessa";
});

console.log(_odessa);

// Homework

const _arrOfNumber = [2, 3, 5, 712, 56, 6];

_arrOfNumber.forEach((element) => {
  console.log(element);
});

const _doubleArr = _arrOfNumber.map((number) => number * 2);
console.log(_doubleArr);
