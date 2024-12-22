import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const body = {
      name,
      email,
      password,
      userType,
    };

    try {
      const response = await axios.post('http://localhost:3001/user', body, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setTimeout(()=>{
        navigate('/login');

        }, 2000)
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto mt-20">
      {userType === '' ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-gray-700 text-xl font-bold mb-4">Select User Type</h2>
          <div className="flex justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                userType === 'teacher' ? 'bg-blue-700' : ''
              }`}
              onClick={() => setUserType('teacher')}
            >
              Teacher
            </button>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                userType === 'student' ? 'bg-green-700' : ''
              }`}
              onClick={() => setUserType('student')}
            >
              Student
            </button>
          </div>
        </div>
      ) : (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Register
            </button>
          </div>
          <p>If you are already register then move to login page <Link to='/login'>Login</Link></p>
        </form>
      )}
      <ToastContainer />
    </div>
  );
}
