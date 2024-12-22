import React from "react"
import Home from './components/home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Login from "./components/loginForm"
import Course from "./components/AllCourses"
import CreateCourse from "./components/createCourse"
import AllUser from "./components/AllUser"
import Register from "./components/registerForm"
import About from "./components/about"
import Contact from "./components/contact"
import Dashboard from "./components/dashboard"

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/create/course" element={<CreateCourse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;