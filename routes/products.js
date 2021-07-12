const express = require('express')
const productsRouter = express.Router()

const productsController = require('../controllers/products.js')

productsRouter.get('/products', productsController.listProducts)

productsRouter.get('/products/:id', productsController.showProducts)

productsRouter.post('/products', productsController.createProducts)

module.exports = productsRouter;