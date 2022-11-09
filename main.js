'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы посмотрели ?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {},
    genres: [],
    private: false
}

const a = prompt('Один из последих просмотренних фильмов ?'),
    b = prompt('На сколько оцените его ?'),
    c = prompt('Один из последих просмотренних фильмов ?'),
    d = prompt('На сколько оцените его ?')

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d

console.log(personalMovieDB.movies);