
import React from 'react';
import './App.css';  

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-title">Log In</h3>
      <div>
        <label>Username:</label>
        <input type="text" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" />
      </div>
    </div>
  );
};

export default LoginForm;
