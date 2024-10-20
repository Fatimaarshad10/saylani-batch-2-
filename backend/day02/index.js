import express from 'express'
const app = express()

app.use(express.json())
// // Restful api methods
// // post ---> we can add data 
// // get ---> we can get data
// // put/patch --> we can update data 
// // delete ---> we can delete data 

const user = []
app.get('/user', (req, res) => {
    res.json(user)
})
app.post('/create/user', (req ,res)=>{
  const userData = req.body
  user.push(userData)
  res.json({
    "message":"User is created",
    "user":userData
  })
})
app.listen('3000', () => {
    console.log('Server is start')
})
