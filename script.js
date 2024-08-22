"use strict";

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
