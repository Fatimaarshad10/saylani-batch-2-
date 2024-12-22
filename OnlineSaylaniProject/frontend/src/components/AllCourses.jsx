import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Course() {
    const naviagte = useNavigate()

    const [course, setCourse] = useState(null)
    const getData = async () => {
        const token = localStorage.getItem('token')
        try {
            const courseData = await axios.get("http://localhost:3001/course",
                {
                    headers: {
                        'token': token
                    }
                }
            )
            setCourse(courseData?.data?.course)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

        getData()

    }, [])

    return (
        <div>
              <h1 className="text-2xl font-bold mb-4 text-white">All Courses</h1>
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
                    {course?.map((data, index) => (
                        <tr key={index} className="border border-gray-200 block md:table-row">
                            <td className="p-2 border border-gray-200 block md:table-cell">{data.name}</td>
                            <td className="p-2 border border-gray-200 block md:table-cell">{data.description}</td>
                            <td className="p-2 border border-gray-200 block md:table-cell">{data.studentId}</td>
                            <td className="p-2 border border-gray-200 block md:table-cell space-x-2">
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>
    )
}

export default Course
