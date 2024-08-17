import Home from "./home";
import Login from "./login";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
