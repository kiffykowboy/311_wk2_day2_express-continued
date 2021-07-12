const express = require('express')
const vehiclesRouter = express.Router()

const vehiclesController = require('../controllers/vehicles.js')

vehiclesRouter.get('/vehicles', vehiclesController.listVehicles)

vehiclesRouter.get('/vehicles/:id', vehiclesController.showVehicles)

vehiclesRouter.post('/vehicles', vehiclesController.createVehicles)

module.exports = vehiclesRouter;