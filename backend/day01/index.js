import express from 'express'

const app = express()

// Restful api methods
// post ---> we can add data 
// get ---> we can get data
// put/patch --> we can update data 
// delete ---> we can delete data 

app.get('/',(req,res)=>{
    res.json('hello world')
})
app.get('/user',(req,res)=>{
    res.json('Here is user data')
})
app.listen('3000' , (req,res)=>{
    console.log('Server is start')
})