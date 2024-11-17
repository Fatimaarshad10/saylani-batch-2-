const User = require('../models/userSchema')

const creatUser = async (req, res) => {
    try {
        const body = req.body
        const user = new User(body)
        user.save()
        res.status(200).json({ message: "User is created", user: user })
    }
    catch (err) {
        res.status(404).json(err)
    }
}
const getUser = async (req, res) => {
    try {
        const userData = await User.find()
        res.status(200).json({ message: "User is fetch", user: userData })
    }
    catch (err) {
        res.status(404).json(err)
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        user.save()
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
module.exports = { creatUser, getUser, deleteUser, updateUser }