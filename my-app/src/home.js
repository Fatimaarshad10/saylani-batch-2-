import { useState } from "react"
 function Home() {
    const [count , setCount] = useState(0)
    function increase(){
        setCount(count + 1 )
    }
    function decrease(){
        setCount(count -1)
    }
  return (
    <div>
         <h1>{count}</h1>
         <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="image"/>
         <button onClick={increase}>Increase</button>
         <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default Home
