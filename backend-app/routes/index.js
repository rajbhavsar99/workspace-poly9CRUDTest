
var express = require('express');
const routes = express.Router();


const car = require('./car');
routes.use('/car', car.route);


module.exports = {
  modules: {
    car,
  },
  routes
}