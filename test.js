//Задачи для push()
//1
const nameFriend = ["Max", "Igor", "Slavik"];
nameFriend.push("Elya");
console.log(nameFriend);

//2
const fruits = [];

fruitsArr.push("Apple");
fruitsArr.push("Pineapple");
fruitsArr.push("Orange");

console.log(fruitsArr);

const _firsArr = [2, 4, 6];
//3
const pushArr = [1, 2, 3, 4];

pushArr.push(5);
console.log(pushArr);

//Задачи для pop()

//1
const colorArr = ["Red", "Black", "white", "gold"];
colorArr.pop();
console.log(colorArr);
//2
const spaceArr = [];
spaceArr.pop();
console.log(spaceArr);
//3
const popArr = [1, 2, 3, 4, 5, 6];

for (i = 0; i < 2; i++) {
  popArr.pop();
}
console.log(popArr);

//Задачи для shift()

//Удаление первого элемента:

const cities = ["Kiev", "Odessa", "Lviv"];
console.log(cities.shift());

//Работа с пустым массивом:

const spaceShiftArr = [];
console.log(spaceShiftArr.shift());

//Удаление и сохранение:

const shiftArr = [10, 12, 11];
const a = shiftArr.shift();

console.log(a);
