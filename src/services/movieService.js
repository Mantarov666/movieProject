const Movie = require ('../models/Movie')

exports.create = (movieData)=> Movie.create(movieData)
   


exports.getAll = ()=> Movie.find();


exports.getOne = (movieId) => {
    const movie = Movie.findById(movieId)
    return movie
} 
 
   