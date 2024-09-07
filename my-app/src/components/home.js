import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

function Home() {
  const {username , setUsername } = useContext(AppContext)
  function handleFun(e){
    setUsername(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handleFun} />
      <h1>Home {username}</h1>
      <Link to="/about">Go to About</Link>
      <Link to="/form">Go to Form</Link>

    </div>
  )
}

export default Home