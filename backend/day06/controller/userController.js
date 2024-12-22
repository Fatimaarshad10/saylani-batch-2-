const User = require('../models/userSchema')
const { generateToken } = require('../helper/jwt')

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

const loginUser = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const UserData = await User.findOne({ email: data.email, password: data.password })
        console.log(UserData)
        const token = await generateToken({id : UserData._id ,  name: UserData.name, email: UserData.email })
        console.log(token)

        if (!UserData) {
            return res.status(404).json({ message: "User is not found" })
        }
        return res.status(200).json({ message: "User found", data: UserData , token : token })



    }
    catch (err) {
        return res.status(400).json(err)
    }
}

module.exports = { creatUser, getUser, deleteUser, updateUser, loginUser }



// multer This is use for image upload 