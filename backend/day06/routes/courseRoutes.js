const express = require('express')
const {validateToken} = require('../helper/jwt')
const { creatCourse , getCourseByUserId } = require('../controller/courseController')
const routes = express.Router()

routes.post('/', validateToken , creatCourse)
routes.get('/', validateToken , getCourseByUserId )

// routes.get('/', validateToken ,  getUser)
// routes.delete('/:id',validateToken ,  deleteUser)
// routes.patch('/:id', validateToken ,  updateUser)

module.exports = routes