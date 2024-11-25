import React, { useState } from 'react'
import axios from 'axios'
function UserRegister() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = async () => {
    console.log("Function is working")
    const body = {
      name: name,
      email: email,
      password: password,
      age: age
    }
    try {
      const userData = await axios.post("http://localhost:3001/user", body)
      if(userData){
        alert(userData.data.message)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder='age' onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default UserRegister
