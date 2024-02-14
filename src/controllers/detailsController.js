
const router = require('express').Router();
const movieService = require('../services/movieService')


 router.get('/movies/:movieId', async (req, res)=>{
        const movieId = req.params.movieId;

       const detFilm = await movieService.getOne(movieId).lean(); 
     
        
        res.render('details', {detFilm})
    })

module.exports = router