import React,{useState} from "react";

const App = () =>{
    const[date,setDate] = useState({
        username:"",
        password:""
    })

    const {username,password} = date;
    const changeHandler = ele =>{
        setDate({...date,[ele.target.name]:[ele.target.value]})
    }
    const submitHandler = ele =>{
        ele.preventDefault()
        console.log(date)
    }
    return(
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <input type="text" name="username" value={username} onChange={changeHandler}/><br/><br/>
                    <input type="password" name="password" value={password} onChange={changeHandler}/><br/><br/>
                    <input type="submit" name="submit"/>
                </form>
            </center>
        </div>
    )
}
export default App