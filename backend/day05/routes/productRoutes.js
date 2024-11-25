const express = require('express')
const { createProduct, getProduct,deleteProduct,updateproduct} = require('../controller/productController')
const routes = express.Router()

routes.post('/', createProduct)
routes.get('/', getProduct)
routes.delete('/:id', deleteProduct)
routes.patch('/:id', updateproduct)

module.exports = routes