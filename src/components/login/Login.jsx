import React from "react";
import "./Login.css";
import Navbar from "../navbar/Navbar";
import FooterRoute from "../footer/FooterRoute";

const Login = () => {
  return (
   <>
   <Navbar/>
    <div className="login-container">
    <h3 style={{fontWeight:"bold"}}>CertPing</h3>
    <span  className="heading" style={{paddingBottom:"20px"}}>Monitor Website Uptime & SSL Health</span>
      <div className="login-box">
        <form className="login-form">
          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                required
              />
            </div>
          </div>
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="/signup" className="signup-link">Sign up</a>
        </p>
      </div>
    </div>
    <FooterRoute/>
   </>
  );
};

export default Login;