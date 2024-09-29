import React , {useContext} from 'react'
import { Store } from '../App'
function Home() {
  const {username , setUsername } = useContext(Store)
  function handleFun(e){
    setUsername(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handleFun} />
      <h1>Home {username}</h1>
    

    </div>
  )
}

export default Home
