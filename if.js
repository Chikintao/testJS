"use strict";

/* 1
 Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: P
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли 

const _numberOfFilms = +prompt("Сколько вильмов вы уже посмотрели?");

const personalMovieDB = {
  count: _numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const _userLastFilm = prompt("Один из последних фильмов?");
const _userRaiting = prompt("Нас сколько оцените его");

personalMovieDB.movies[`${_userLastFilm4}`] = _userRaiting;

console.log(personalMovieDB);
*/

/* 2 - IF Else

let num = 10;

if(num === 10){
console.log("угадал 10");
 }else{
 console.log("не угадал");
 }

// num === 50 ? console.log("OK") : console.log("No Ok");

switch (num) {
  case 10:
    console.log("угадал 10");
    break;
  case 20:
    console.log("угадал 20");
    break;
  default:
    console.log("не угадал");
}
*/
