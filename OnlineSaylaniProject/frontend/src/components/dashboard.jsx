import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import CreateCourse from './createCourse'; 
import Course from './AllCourses';
import AllUser from './AllUser'

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex">
            <div
                className={`bg-[#1E293B] text-white h-screen p-4 transition-transform duration-300 ${sidebarOpen ? 'w-48' : 'w-20'
                    }`}
            >
                <button onClick={toggleSidebar} className="mb-4">
                    {sidebarOpen ? 'Close' : 'Open'} Sidebar
                </button>
                <ul>
                    <li className="hover:ml-4 transform ease-in-out duration-300">
                        <Link to="/dashboard/create/course">Create Courses</Link>
                    </li>
                    <li className="hover:ml-4 transform ease-in-out duration-300">
                        <Link to="/dashboard/course">All Courses</Link>
                    </li>
                    <li className="hover:ml-4 transform ease-in-out duration-300">
                        <Link to="/dashboard/user">All User</Link>
                    </li>
                    <li className="hover:ml-4 transform ease-in-out duration-300">
                        <Link to="/dashboard/setting">Settings</Link>
                    </li>
                    <li className="hover:ml-4 transform ease-in-out duration-300">
                        <Link to="/">Back to Home</Link>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 dark:bg-[#0F172A] transition-all duration-300">
                {/* Navbar */}
                <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-cyan-500 to-blue-500 p-4 flex justify-between items-center">
                    <div className="text-white">Brand</div>
                    <div>
                        <button>Hello</button>
                    </div>
                </nav>

                {/* Content Area */}
                <div className="mt-16 p-6">
                    <Routes>
                        <Route path="/create/course" element={<CreateCourse />} />
                        <Route path="/course" element={<Course />} />
                        <Route path="/user" element={<AllUser />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
