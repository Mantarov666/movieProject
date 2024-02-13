const router = require('express').Router();
const movieService = require('../services/movieService')

router.get('/create', (req, res)=>{
    res.render('create')
});


router.post('/create', async (req, res)=>{
    const newMovieData = req.body 
    console.log(newMovieData)
  try { await movieService.create(newMovieData)
         res.redirect('/')
     } catch (err){
            console.log(err)
            res.redirect('/create')
     }
})



module.exports = router;