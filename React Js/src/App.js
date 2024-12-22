import React,{ useState, createContext  } from "react"
import Home from './components/home'
import About from './components/about'
import Login from "./components/login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import NewProduct from "./components/newproducts"
import AllProducts from './components/allproducts'
import FormData from "./components/form"
import UserRegister from "./components/userRegister"
import LoginForm from "./components/loginForm"
import Course from "./components/courses"
import CreateCourse from "./components/createCourse"
export const Store = createContext()
function App() {
  const [username, setUsername] = useState('amna')
  return (
    <>

      <Store.Provider value={{username , setUsername}}>
        <BrowserRouter>
        {/* <LoginForm/>  */}
        {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/register" element={<UserRegister />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/product" element={<NewProduct />} />
            <Route path="/form" element={<FormData />} />
            <Route path="/all/product" element={<AllProducts />} />
            <Route path="/course" element={<Course />} />
            <Route path="/create/course" element={<CreateCourse />} />




          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;