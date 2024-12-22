import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
function CreateCourse() {
  const animatedComponents = makeAnimated();
  const [name, setName] = useState('')
  const [des, setDes] = useState('')
  const [course, setCourse] = useState([])

  const [userSave, setUserSave] = useState([])
  const naviagte = useNavigate()
  const handleLogin = async () => {
    const body = {
      name: name,
      description: des,
      studentId: course
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
        naviagte('/dashboard/course')
      }
    }
    catch (err) {
      toast.error(err.response.data.message)

    }

  }


  const getData = async () => {
    const token = localStorage.getItem('token')
    try {
      const userData = await axios.get("http://localhost:3001/user/student",
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

  const valuehere = userSave.map((data, key) => {
    const objectData = {
      "value": data.name,
      "label": data.name,
      "id": data._id,

    }
    return objectData
  })
  return (
    <div className="w-full max-w-xs m-auto ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Name
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Course Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Description
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Course description" value={des} onChange={(e) => setDes(e.target.value)} />
        </div>


        <Select
          className='text-blue-500'
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[valuehere[4], valuehere[5]]}
          isMulti
          options={valuehere}
          onChange={(selectedOptions) => {
            console.log('Selected options:', selectedOptions);

            const selectedValues = selectedOptions.map((option) => option.id);
            console.log('Selected values (IDs):', selectedValues);

            setCourse(selectedValues);
          }}
        />

        <div className="flex items-center justify-between mt-16">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleLogin}>
            Create Course
          </button>

        </div>
      </form>

      <ToastContainer />
    </div>
  )
}

export default CreateCourse
