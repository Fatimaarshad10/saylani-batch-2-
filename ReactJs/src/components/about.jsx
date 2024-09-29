import React , {useContext} from 'react'
import { Store } from '../App'
function About() {
  const {username} = useContext(Store)
 
  return (
    <div>
      <h1>About {username}</h1>
    </div>
  )
}

export default About
