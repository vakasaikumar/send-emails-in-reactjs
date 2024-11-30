import React,{useState} from "react";
import axios from "axios";

const App = () =>{
  const[data,setData] = useState({
    fullname:'',
    email:'',
    password:'',
    confirmpassword:''
  })
  const{fullname,email,password,confirmpassword} = data;
  const changeHandler = ele=>{
    setData({...data,[ele.target.name]:ele.target.value})
  }
  const submitHandler = ele =>{
    ele.preventDefault();
    axios.get('https://vskdev-6670a-default-rtdb.firebaseio.com/register.json',
      data).then(()=> alert('Submited Successfully'))
    //console.log(data)
  }
  return(
    <div>
      <center>
        <form onSubmit={submitHandler}> 
          <input type="text" name="fullname" value={fullname} onChange={changeHandler}/><br/>
          <input type="email" name="email" value={email} onChange={changeHandler}/><br/>
          <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
          <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br/>
          <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
  )
}
export default App;