/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT * FROM movies WHERE duration < 90;';

const ejercicio03 = 'SELECT * FROM movies WHERE year BETWEEN 1930 AND year 1940;';
// 'SELECT * FROM movies WHERE year >= 1930 AND year <=1940;';

const ejercicio04 = 'SELECT * FROM movies WHERE title LIKE '%til%';'

const ejercicio05 = 'SELECT * FROM movies WHERE array_length(actors, 1) = 1;';
//SELECT * FROM movies WHERE CARDINALITY(actors) = 1;

const ejercicio06 = 'SELECT title, AVG(rating) FROM movies UNNEST(ratings) AS rating GROUP BY title';
//unnset(trae el array y utiliza los elementos y los tira en un tabla)
//SELECT AVG(rating) FROM UNNEST(ratings) AS ratings) FROM movies;

const ejercicio07 = 'SELECT actors FROM movies WHERE title LIKE "%Fast and%" AND year = 2016 ;'

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
