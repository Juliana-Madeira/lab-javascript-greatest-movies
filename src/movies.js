const movies = require('.data.js')


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayMovies) {

  const allDirectors = arrayMovies.map(movie =>  movie.director);
  return allDirectors;
} 


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if(!moviesArray.length){
    return 0
  }
  const dramaStevenSpielberg = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg');
  return dramaStevenSpielberg.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayMovies) {
  if(!arrayMovies.length){
    return 0;
  }
  
  let soma = arrayMovies.reduce ((acc, movie) => {return acc + movie.score}, 0);
  let media = parseFloat((soma / arrayMovies.length).toFixed(2));
  
  return media;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayMovies) {

  let howManyDramas;

  for (let i = 0; i < arrayMovies.length; i+=1){
    if (arrayMovies[i] === 'Drama'){
      howManyDramas= howManyDramas + 1;
    }
    return howManyDramas;
  }
  


  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
