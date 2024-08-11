import Home from "./home";
import Login from "./login";
import Navbar from "./navbar";
function App() {
  // let content;
  // let isLogin = false;
  // if(isLogin){
  //   content = <Home/>
  // }else{
  //   content = <Login/>
  // }
  return (
    <>
    <Navbar/>
      {true ? (
        <>
          <Home />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}

export default App;
