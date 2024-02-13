const Movie = require ('../models/Movie')

exports.create = (movieData)=> Movie.create(movieData)
   


exports.getAll = ()=> Movie.find();


exports.getOne = (id) =>{

   return movie.find(film=> film._id==id)
}