import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CreateCourse() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [des, setDes] = useState('')

  const naviagte = useNavigate()
  const handleLogin = async () => {
    const body = {
      name: name,
      email: email,
      description: des
    }
    const token = localStorage.getItem('token')

    try {
      const response = await axios.post('http://localhost:3001/course', body,
        {
          headers: { "Content-Type": "application/json", 'token': token }

        }
      )
      if (response.status = 200) {
        toast.success(response.data.message)
        naviagte('/course')
      }
    }
    catch (err) {
      toast.error(err.response.data.message)

    }

  }
  return (
    <div class="w-full max-w-xs m-auto mt-20">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Name
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Course Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Description
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Course description" value={des} onChange={(e) => setDes(e.target.value)} />
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleLogin}>
            Sign In
          </button>

        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
      <ToastContainer />
    </div>
  )
}

export default CreateCourse
