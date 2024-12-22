import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UserRegister() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState('')
  const [userSave, setUserSave] = useState([])
  const [edit, setEdit] = useState(false)
  const token = localStorage.getItem('token')
  const getData = async () => {

    try {
      const userData = await axios.get("http://localhost:3001/user",
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

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/user/${id}`, {
        headers: {
          'token': token
        }
      })
      if (response) {
        toast.success(response.data.message);
        getData()
      }
    }
    catch (err) {
      console.log(err)
      toast.error(err);

    }
  }

  const handleModel = (data) => {
    setEdit(true)
    setName(data.name)
    setEmail(data.email)
    setPassword(data.password)
    setId(data._id)
  }

  const handleUpdate = async (id) => {
    const body = {
      name: name,
      email: email,
      password: password,
    }
    try {
      const response = await axios.patch(`http://localhost:3001/user/${id}`, body, {
        headers: {
          'token': token
        }
      })
      if (response) {
        toast.success(response.data.message);
        setEdit(false)
        getData()
      }
    }
    catch (err) {
      console.log(err)
      toast.error(err);


    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">All User</h1>

      <table className="min-w-full border-collapse block md:table text-white">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-200 block md:table-row">
            <th className="p-2 border border-gray-200 block md:table-cell">Name</th>
            <th className="p-2 border border-gray-200 block md:table-cell">Email</th>
            <th className="p-2 border border-gray-200 block md:table-cell">Password</th>
            <th className="p-2 border border-gray-200 block md:table-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {userSave.map((data, index) => (
            <tr key={index} className="border border-gray-200 block md:table-row">
              <td className="p-2 border border-gray-200 block md:table-cell">{data.name}</td>
              <td className="p-2 border border-gray-200 block md:table-cell">{data.email}</td>
              <td className="p-2 border border-gray-200 block md:table-cell">{data.password}</td>
              <td className="p-2 border border-gray-200 block md:table-cell space-x-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(data._id)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() => handleModel(data)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Update */}
      {edit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Update User</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
            />

            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setEdit(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => handleUpdate(id)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserRegister
