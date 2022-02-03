const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const createHabitController = require('../controllers/createhabit_controller');
const deleteHabitController = require('../controllers/deletehabit_controller');
const habitDetailsController = require('../controllers/habitdetails_controller');

//--parse url
router.use(express.urlencoded());

router.get('/', homeController.home);
router.post('/addHabit', createHabitController.create);
router.get('/delete', deleteHabitController.delete);
router.get('/details', habitDetailsController.showDetails);
router.get('/changestatus', habitDetailsController.updateStatus);

module.exports = router;
