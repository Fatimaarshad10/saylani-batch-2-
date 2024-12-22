import React, { useState, useEffect } from 'react'
import axios from 'axios'
function UserRegister() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState('')
  const [age, setAge] = useState('')
  const [userSave, setUserSave] = useState([])
  const [edit, setEdit] = useState(false)

  const getData = async () => {
    const token = localStorage.getItem('token')
    try {
      const userData = await axios.get("http://localhost:3001/user" , 
        {
          headers: {
            'token': token
          }
        }
      )
      setUserSave(userData?.data?.user)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {

    getData()

  }, [])
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
      if (userData) {
        alert(userData.data.message)
        // getData()
      }
    }
    catch (err) {
      console.log(err)
    }
  }


  const handleDelete = async (id) => {
    console.log(id)
    try {
      const deleteUser = await axios.delete(`http://localhost:3001/user/${id}`)
      if (deleteUser) {
        alert(deleteUser.data.message)
        getData()
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  const handleModel = (data) => {
    setEdit(true)
    setName(data.name)
    setEmail(data.email)
    setPassword(data.password)
    setAge(data.age)
    setId(data._id)
  }
  const handleUpdate = async (id) => {
    console.log(id)
    const body = {
      name: name,
      email: email,
      password: password,
      age: age
    }
    try {
      const updateUser = await axios.patch(`http://localhost:3001/user/${id}`, body)
      if (updateUser) {
        alert(updateUser.data.message)
        getData()
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
      <button onClick={() => handleSubmit}>Submit</button>

      {userSave.map((data, index) => (
        <div key={index}>
          <h1>{data.name}</h1>
          <p>{data.email}</p>
          <p>{data.password}</p>
          <p>{data.age}</p>
          <button onClick={() => handleDelete(data._id)}>Delete</button>
          <button onClick={() => handleModel(data)}>Update</button>
        </div>
      ))}

      {edit && <>
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} />
        <button onClick={() => handleUpdate(id)}>Submit</button>
      </>}

    </>
  )
}

export default UserRegister
