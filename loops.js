/*Звездочки

let result = "";
const arrow_length = 6;

for (let i = 0; i < arrow_length; i++) {
  for (j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
*/

/*Задачи:

1 При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

2 При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

3 При помощи цикла for выведите чётные числа от 2 до 10 включительно

4 Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

 Цикл, который нужно переписать:
 
 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 }
5 Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]*/

//1
// let i = 5;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 2
/*
for (i = 20; i > 10; i--) {
  console.log(i);
  if (i == 13) {
    break;
  }
}


//3
for (i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}*/

/*4

let i = 2;

while (i <= 16) {
  if (i % 2 === 0) {
    i++;
    continue;
  } else {
    console.log(i);
  }~
  i++;
}*/

//5 Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// const arr = [];

// for (let i = 5; i <= 10; i++) {
//   arr.push(i);
// }

// console.log(arr);
