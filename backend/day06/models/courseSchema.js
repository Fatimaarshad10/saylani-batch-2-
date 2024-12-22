const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: String,
    email: String,
    description: String,
    userId : String,
    studentId : Array
})

module.exports = mongoose.model('Course', courseSchema)