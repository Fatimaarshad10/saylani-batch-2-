// // Restful api methods
// // post ---> we can add data 
// // get ---> we can get data
// // put/patch --> we can update data 
// // delete ---> we can delete data 

let user = []
app.get('/user', (req, res) => {
  res.json(user)
})
app.post('/create/user', (req, res) => {
  const userData = req.body
  user.push(userData)
  res.json({
    "message": "User is created",
    "user": userData
  })
})
app.delete('/user/:id', (req, res) => {
  const id = req.params.id
  user = user.filter((user, id) => {user.id !== id})
  res.json({
    "message": "User is deleted",
    "user": user
  })
})
