const express = require('express');

const routes = express.Router();

// Controllers
const carCtrl = require('../app/controllers/cars.ctrl');

/** 
 * Recursos CRUD 
*/
routes.route('/create').post(carCtrl.createCar);
routes.route('/cars').get(carCtrl.listCars);
routes.route('/cars/update').put(carCtrl.updateCar);
routes.route('/cars/:id')
    .get(carCtrl.getCar)
    .delete(carCtrl.deleteCar);

module.exports = routes;
