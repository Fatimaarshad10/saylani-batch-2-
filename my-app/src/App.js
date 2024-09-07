// import Home from "./home";
// import Login from "./login";
// import Navbar from "./navbar";
// import Hero from "./hero";
// import Card from "./card";
// import Input from "./input";
// import ListApp from "./ListApp";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// function App() {
//   const name = localStorage.getItem('name')
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home newData={name} />} />
//           <Route path="/login" element={<Login  newData={name}/>} />
//           <Route path='/hero' element={<Hero newData={name}/>}/>
//           <Route path='/card' element={<Card/>}/>
//           <Route path='/input' element={<Input/>}/>
//           <Route path='/list' element={<ListApp/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
// export default App;

// let content;
// let isLogin = false;
// if(isLogin){
//   content = <Home/>
// }else{
//   content = <Login/>
// }

{
  /* <h1>Hello</h1>
    <p>hello world</p>
    <SignUp/> */
}

{
  /* <Home/> */
}
{
  /* <Navbar/>
      {true ? (
        <>
          <Home />
        </>
      ) : (
        <>
          <Login />
        </>
      )} */
}

import React, { useState, createContext } from "react"
import Home from './components/home'
import About from './components/about'
import Form from "./components/form"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const AppContext = createContext()

function App() {
  const [username, setUsername] = useState('fatima')
  return (
    <>
      <AppContext.Provider value={{username , setUsername}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />

          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;