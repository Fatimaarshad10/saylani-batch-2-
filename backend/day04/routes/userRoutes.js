const express = require('express')
const { getUser, creatUser, deleteUser, updateUser } = require('../controller/userController')
const routes = express.Router()

routes.post('/', creatUser)
routes.get('/', getUser)
routes.delete('/:id', deleteUser)
routes.patch('/:id', updateUser)

module.exports = routes