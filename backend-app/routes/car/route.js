const express = require('express');
const routes = express.Router(); // eslint-disable-line new-cap
const controller = require('./controller');

routes.get('/', controller.getAllCars);

routes.get('/:id', controller.getCarById);

routes.post('/', controller.createCar);

routes.put('/:id', controller.updateCar);

routes.delete('/:id', controller.deleteCar);

module.exports = routes;