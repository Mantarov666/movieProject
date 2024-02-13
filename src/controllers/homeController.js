const router = require('express').Router();
const movieService = require('../services/movieService')


router.get('/', async (req, res)=>{

    const movies = await movieService.getAll().lean()
    
    res.render('home', {movies})
});

router.get('/about', (req, res)=>{
    res.render('about')
});

router.all('*', (req, res)=>{
    res.render('404')
})


module.exports = router