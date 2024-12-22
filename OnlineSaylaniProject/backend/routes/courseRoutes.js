const express = require('express')
const {validateToken} = require('../helper/jwt')
const { creatCourse , getCourseByUserId  , deleteCourse , updateCourse} = require('../controller/courseController')
const routes = express.Router()
// Courses All Routes
routes.post('/', validateToken , creatCourse)
routes.get('/', validateToken , getCourseByUserId )
routes.delete('/:id',validateToken ,  deleteCourse)
routes.patch('/:id', validateToken ,  updateCourse)

module.exports = routes