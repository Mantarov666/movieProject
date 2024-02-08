const router =require('express').Router();

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/homeController')

router.use(homeController);
router.use(aboutController)

module.exports = router