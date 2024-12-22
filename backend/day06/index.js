const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const courseRoutes = require('./routes/courseRoutes')

const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const mongodbUrl = 'mongodb://localhost:27017/backend'


const port = 3001
app.use(bodyParser.json());
app.use(express.json())
app.use(cors())

app.use('/user' ,userRoutes )
app.use('/product' ,productRoutes )
app.use('/course' , courseRoutes )


mongoose.connect(mongodbUrl).then(() => {
  console.log("Database is connected")
}).catch((err) => {
  console.log(err)
})
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
