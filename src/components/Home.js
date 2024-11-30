import React,{useState} from "react";
import { Navigate } from "react-router-dom";
import '../styles/Home.css'

const Home = () => {
    const[author,setAuthor] = useState(false);
    if(author){
        return <Navigate to='/about' />
    }
  return (
    <center>
    <div className="home-container">
      <h1 >Welcome To VSkDev</h1>
      <button className="about-button" onClick={()=> setAuthor(true)}>Next</button>
    </div>
    </center>
  );
};

export default Home;
