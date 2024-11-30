import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'

const About = () => {
    const[author,setAuthor] = useState(false);
    if(author){
        return <Navigate to='/contact'/>
    }
  return (
    <center>
        <div>
            <h1>About VSkDev</h1>
            <p>I am Master's Student and also Frontend Devloper </p>
            <button onClick={()=> setAuthor(true)}>Contact</button>
        </div>
    </center>
  )
}

export default About
