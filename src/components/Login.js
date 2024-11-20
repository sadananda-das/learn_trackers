import React, { Component, useState } from "react";
import "./Login.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  toggleClass = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <div className="mybody">
        <div className="logcontainermain" id="logcontainermain">
          <div className="form-container sign-up">
            <form>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icons">
                  <i className="fa-brands fa-google"></i>
                </a>
              </div>
              <span>or use your email &amp; password</span>
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <a href="#">Forgrt your password?</a>
              <button>Sign up</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form>
              <h1>Sign in</h1>
              <div className="social-icons">
                <a href="#" className="icons">
                  <i className="fa-brands fa-google"></i>
                </a>
              </div>
              <span>or use your email &amp; password</span>
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <a href="#">Forgrt your password?</a>
              <button>Sign in</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className="hidden" id="login">
                  Sign in
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello Friends!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button
                  className={`box ${this.state.isActive ? "active" : ""}`}
                  onClick={this.toggleClass}
                  id="register"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
