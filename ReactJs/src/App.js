import React,{ useState, createContext  } from "react"
import Home from './components/home'
import About from './components/about'
import Login from "./components/login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import NewProduct from "./components/newproducts"
import AllProducts from './components/allproducts'
export const Store = createContext()
function App() {
  const [username, setUsername] = useState('amna')
  return (
    <>

      <Store.Provider value={{username , setUsername}}>
        <BrowserRouter>
        <Navbar/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<NewProduct />} />
            <Route path="/all/product" element={<AllProducts />} />


          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;
