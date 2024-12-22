const express = require('express')
const {validateToken} = require('../helper/jwt')
const { getUser, creatUser, deleteUser, updateUser , loginUser , getUserByStudent} = require('../controller/userController')
const routes = express.Router()
// User All Routes
routes.post('/', creatUser)
routes.post('/login',loginUser )
routes.get('/', validateToken ,  getUser)
routes.get('/student', validateToken ,  getUserByStudent)
routes.delete('/:id',validateToken ,  deleteUser)
routes.patch('/:id', validateToken ,  updateUser)

module.exports = routes