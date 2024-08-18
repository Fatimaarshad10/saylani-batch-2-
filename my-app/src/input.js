import React,{useState} from 'react'

function Input() {
    const [input  , setInput] = useState("") 
    const [password  , setPassword] = useState(0) 

    let store ;
    function inputHandle (event){
        setInput(event.target.value)
    }
    function inputHandlePass (event){
        setPassword(event.target.value)
    }

  return (
    <div>
        <h1>{input}</h1>

      <input type="text" placeholder="Enter your email"  onChange={(e)=>inputHandle(e)}/>
      <h1>{password}</h1>

      <input type="password" placeholder="Enter your pass"  onChange={(e)=>inputHandlePass(e)}/>

    </div>
  )
}

export default Input
