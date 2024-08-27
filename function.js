"use strict";

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  console.log(num); // 20
  let num = 10;
  console.log(num); // 10
}

showFirstMessage("Hello World!");

console.log(num); // 20

//Замыкание функции - фунция со всеми внешними переменными(ищет переменную на шаг выше)

//return
function calc(a, b) {
  return a + b;
}

console.log(calc(2, 3));

//
function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

//function expression

const logger = function () {
  console.log("Hello");
};
logger();

// Arrow function

const calcSum = (a, b) => {
  return a + b;
};
