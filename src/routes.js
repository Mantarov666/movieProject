const router =require('express').Router();

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/homeController');
const createController = require('./controllers/creatController')


// router.use(aboutController)

router.use(createController)
router.use(homeController);


module.exports = router