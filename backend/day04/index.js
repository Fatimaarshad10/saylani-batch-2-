const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const app = express()
const mongodbUrl = 'mongodb://localhost:27017/backend'
app.use(express.json())

const port = 3000

app.use('/user' ,userRoutes )
mongoose.connect(mongodbUrl).then(() => {
  console.log("Database is connected")
}).catch((err) => {
  console.log(err)
})
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
