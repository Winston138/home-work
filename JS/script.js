'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов ?', 'logan'),
//       b = prompt('На сколько оцените его ?', '8.1'),
//       c = prompt('Один из последних просмотренных фильмов ?', 'logan'),
//       d = prompt('На сколько оцените его ?', '8.1');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) { // Этот цикл заменил 13-19 строки
    const a = prompt('Один из последних просмотренных фильмов ?', 'logan'),
          b = prompt('На сколько оцените его ?', '8.1');

          personalMovieDB.movies[a] = b;
}



console.log(personalMovieDB);