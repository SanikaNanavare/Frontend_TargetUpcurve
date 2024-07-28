import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="login_page">
        <div className="form">
          <form>
            <h1>Login</h1>

            <div className="input_box">
              <input
                type="User Id"
                placeholder="User Id"
                required
              />
            </div>
            <div className="input_box">
              <input
                type="text"
                placeholder="Username/Email id"
                required
              />
            </div>
            <div className="input_box">
              <input
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="forgot_password">
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Login</button>

            <div className="register">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
