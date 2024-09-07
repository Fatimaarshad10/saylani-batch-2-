import React , {useContext} from 'react'
import { AppContext } from '../App'
function About() {
  const {username} = useContext(AppContext)
 
  return (
    <div>
      <h1>About {username}</h1>
    </div>
  )
}

export default About