const express = require('express');
const tourController = require('./tourController')
const Router = express.Router();

Router.get('/',tourController.getAll)

module.exports = Router;