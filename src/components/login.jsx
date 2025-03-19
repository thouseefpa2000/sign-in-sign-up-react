import React, { useState } from 'react';
import './login.css';
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const Login = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>

        <div className="inputs">
          {action === 'Login' ? null : ( // Hides username input when action is "Login"
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input type="text" placeholder="Enter username" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input type="email" placeholder="Enter email" />
          </div>

          <div className="input">
            <img src={password_icon} alt="Password Icon" />
            <input type="password" placeholder="Enter password" />
          </div>
        </div>

        <div className="forget-password">
          Lost password? <span>Click here</span>
        </div>

        <div className="submit-container">
          <button className={action === 'Sign In' ? 'submit gray' : 'submit'} onClick={() => setAction("Sign In")}>
            Sign In
          </button>
          <button className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction("Login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
