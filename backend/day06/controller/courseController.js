const Course = require('../models/courseSchema')

const creatCourse = async (req, res) => {
    try {
        const body = req.body
        const id = req.user.id

        const data = new Course({userId : id  , ...body})
        data.save()
        res.status(200).json({ message: "Course is created", data: data })
    }
    catch (err) {
        res.status(404).json(err)
    }
}
const getCourseByUserId = async (req, res) => {
    const id = req.user.id
    try {
        const userData = await Course.find({userId : id})
        res.status(200).json({ message: "Courses is fetch", course: userData })
    }
    catch (err) {
        res.status(404).json(err)
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        res.status(200).json({ message: "User is deleted" })
    }
    catch (err) {
        res.status(404).json(err)
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, req.body)
        user.save()
        res.status(200).json({ message: "User is Updated" })
    }
    catch (err) {
        res.status(404).json(err)
    }
}



module.exports = { creatCourse, getCourseByUserId, deleteUser, updateUser}