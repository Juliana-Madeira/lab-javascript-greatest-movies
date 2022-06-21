const movies = require('.data.js')


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(movie => 
    movie.director)
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
function scoresAverage(moviesArray) {
  if(!moviesArray.length){
    return 0
  }
  let sum = moviesArray.reduce((acc, movie) => {            //reduce receive 2 arguments
    if(!movie.score){
      movie.score = 0
    }
    return acc + movie.score}, 0 ) 
  let average = Number((sum/moviesArray.length).toFixed(2))      //decimals and 2 decimals place
  return average 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  
  let allDrama = moviesArray.filter(movie => movie.genre.includes('Drama'));

  return scoresAverage(allDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // let newMoviesArray = moviesArray.map(movie => movie)    
  let newMoviesArray = [...moviesArray]
  newMoviesArray.sort((a, b) => {                         
        if(a.year > b.year){
          return 1
        }
        if(b.year > a.year){
          return -1
        }
      
        if(a.title > b.title){
          return 1
        }
        if(b.title > a.title){
          return -1
        }
       return 0                               
  })    
    return newMoviesArray;                               
 }}
 
 
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titlesArray = moviesArray.map(movie => movie.title);
  titlesArray.sort();
  return titlesArray.slice(0, 20);              //vai "cortar" e devolver somente do 0 ao 20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map(movie => {
    const newMovie = { ...movie, duration: getInMinutes(movie.duration) }               //(new object)
    return newMovie;
  })
  return newMoviesArray;
}

//examples:
// '43min'
// '1h'    => ["1", ""]
// '2h 15min' => ["2", "15min"]
function getInMinutes(duration){
  let hoursInMinutes = 0;
  let minutes = 0;
  if(duration.includes('h')){
    const timeArray = duration.split('h')      // ["1", ""]   se fosse 1h por exemplo
    hoursInMinutes = parseInt(timeArray[0]) * 60; 
    if(timeArray[1].includes('min')){
      minutes = parseInt(timeArray[1].replace("min", "").trim()); 
    } 
  } else if(duration.includes("min")){
    minutes = parseInt(duration.replace("min", ""))        //trocar min por "" = espaço vazio
  }
  return hoursInMinutes + minutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if(moviesArray.length == 0){
    return null
  }
  //quero essa estrutura pra ver cada filme de que ano é, separar filmes por respectivo ano
  // const moviesByYear = {
  //   '2000': [filme1, filme2],
  //   '2001': [filme3, filme4]
  // }

  //crio objeto vazio
  const moviesByYear = {};                   //começa sendo esse objeto vazio, nao tenho e nao sei as informaçoes ainda


  //crio chaves(years nesse caso) dentro do objeto com arrays vazios
  moviesArray.forEach(movie => {                  //forEach nao tem return, nao precisa de return, map sim - dentro do objeto vazio moviesByYear
    moviesByYear[movie.year] = [];
  })
  
  //insiro nos arrays vazios acima, de cada ano, os filmes de cada ano (respectivos)
  moviesArray.forEach(movie => {
    moviesByYear[movie.year].push(movie)           //jogar cada filme no seu array vazio pra preencher com cada filme de cada ano
  })
  
  //crio variavel para calcular medias
  const scoresByYear = []
  //example:
  //const scoreByYear = {
  //   '1994': 8.5,
  //   '1955': 9.5
  // }

  //pegar medias de scores por cada ano
  for (let year in moviesByYear){              //for in somente usado para objetos, pega a chave e for of em objeto pegará o valor
    const yearScore = {
      year: year,
      score: scoresAverage(moviesByYear[year])
    }
    scoresByYear.push(yearScore);
  }

  scoresByYear.sort((a, b) => b.score - a.score)

  return `The best year was ${scoresByYear[0].year} with an average score of ${scoresByYear[0].score}`
}



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
