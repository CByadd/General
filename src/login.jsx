import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import credentials from './json/credinitials.json';

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = credentials.find(cred => cred.id === id && cred.pass === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); // Save user data in local storage
      navigate("/quizbox", { state: { user } });
    } else {
      setError("Invalid ID or Password ");
    }
  };

  return (
    <div>
      <section className='login_main_container'>
        <h1>12th Physics</h1>
        <div className='login_box'>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Type your id'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            
            <input
              type="password"
              placeholder='Type your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             {error && <p className='error'>{error}</p>}
            <span className='buttoncon'><button type="submit">Login</button></span>
          </form>
         
        </div>
      </section>
      <span className='mobile-view'>
        <h1>Please view it in Desktop</h1>
      </span>
    </div>
  );
};

export default Login;
