
const router = require('express').Router();
const movieService = require('../services/movieService')


    router.get('/movie/:movieId', (req, res)=>{
        const filmId = req.params.movieId;
       const detFilm =  movieService.getOne(filmId); 
        
        res.render('details', {detFilm})
    })

module.exports = router