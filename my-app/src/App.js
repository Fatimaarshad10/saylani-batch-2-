import Home from "./home";
import Login from "./login";
import Navbar from "./navbar";
import Hero from "./hero";
import Card from "./card";
import Input from "./input";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/hero' element={<Hero/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/input' element={<Input/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

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
