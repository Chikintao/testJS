//string

"use strict";

const str = "teSt";
const arr = [1, 2, 3];

//
console.log(str[2]);

// Изменение регистров

console.log(str.toUpperCase()); //TEST
console.log(str.toLowerCase()); //test

// indexOf  - поиск под строки
let fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); //5
console.log(fruit.indexOf("q")); //-1

//
let logg = "hello world";

console.log(logg.slice(6, 11)); //world

console.log(logg.substring(6, 11)); //world

console.log(logg.substring(6, 11));

//Number methods

const num = 12.2;
console.log(Math.round(num)); //12

const test = "12.2px";
console.log(parseInt(test)); //12 - number
console.log(parseFloat(test)); //12 - number
