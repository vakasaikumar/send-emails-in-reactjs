import React, { useState } from 'react';
import emailjs from 'emailjs-com'; //npm install emailjs-com 

const App = () => {
  const [data, setData] = useState({
    subject: '',
    email: '',
    message: ''
  });

  const { subject, email, message } = data;

  const changeHandler = (ele) => {
    setData({ ...data, [ele.target.name]: ele.target.value });
  };

  const submitHandler = (ele) => {
    ele.preventDefault();

    emailjs.sendForm(   // copy this code in emailjs in chorme('https://www.emailjs.com/docs/examples/reactjs/') 
      'service_rkdw1x4',  // this all details available in ("https://dashboard.emailjs.com/admin")
      'template_2hbhk4n',
      ele.target, // Pass the form element
      'wWVxgN4d2dDUf2XQX' // Public key
    )
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );

    ele.target.reset();
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler} autoComplete="off">
          <label>Subject:</label><br />
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={changeHandler}
          /><br />
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
          /><br />
          <label>Message:</label><br />
          <input
            type="text"
            name="message"
            value={message}
            onChange={changeHandler}
          /><br /><br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default App;
