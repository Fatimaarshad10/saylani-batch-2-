import React, { useContext } from 'react'
import { Store } from '../App'
import { useNavigate } from 'react-router-dom'
function Home() {
  const { username, setUsername } = useContext(Store)
  const navigate = useNavigate()
  function handleFun(e) {
    setUsername(e.target.value)
  }
  function handleLogout() {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <div>
      <input type="text" onChange={handleFun} />
      <h1>Home {username}</h1>
      <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Home
