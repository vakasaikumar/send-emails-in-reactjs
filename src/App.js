import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const { username, email, password, confirmpassword } = data;

    const changeHandler = (ele) => {
        setData({ ...data, [ele.target.name]: ele.target.value });
    };

    const submitHandler = (ele) => {
        ele.preventDefault();
        if (password === confirmpassword) {
            console.log(data);
        } else {
            console.log('Password is not matching');
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={changeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={changeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={changeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <input type="password" id="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={changeHandler} />
                </div>

                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    );
};

export default App;
