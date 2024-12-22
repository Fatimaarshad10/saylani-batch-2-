const express = require('express')
const {validateToken} = require('../helper/jwt')
const { getUser, creatUser, deleteUser, updateUser , loginUser } = require('../controller/userController')
const routes = express.Router()

routes.post('/', creatUser)
routes.post('/login',loginUser )

routes.get('/', validateToken ,  getUser)
routes.delete('/:id',validateToken ,  deleteUser)
routes.patch('/:id', validateToken ,  updateUser)

module.exports = routes