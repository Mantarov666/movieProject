const router =require('express').Router();

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/homeController');
const createController = require('./controllers/creatController');
const detailsController = require('./controllers/detailsController')


// router.use(aboutController)

router.use(createController);
router.use(detailsController)
router.use(homeController);


module.exports = router