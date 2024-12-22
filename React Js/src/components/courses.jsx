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
    function handleCreateCourse (){
        naviagte('/create/course')
    }
    return (
        <div className='flex justify-around mt-10'>


<button  className=" text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleCreateCourse}>Create Course +</button>
            {course?.map((data, key) => (
                <div key={key}>

                    <div className="max-w-sm flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Course Name : {data.name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Course description : {data.description}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>



                </div>
            ))}
        </div>
    )
}

export default Course
