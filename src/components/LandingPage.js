import React, { Component } from 'react';
import '../styles/LandingPage.css';
import auth_logo from '../images/auth_logo.png';
import {Link} from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div>
        <img src={auth_logo} alt="logo"/>
        </div>
        <div className='inputBox'>
            <div className = 'username'>
                <span for="usernameInput">Username</span>
                <input id='usernameInput'/>
            </div>
        </div>

        <div className='inputBox'>
            <div className = 'password'>
                <span className='auth_label'><b>Password</b></span>
                <input/>
            </div>
        </div>
        <div className='auth_buttons'>
            <button id='btnLogin'><Link to="/dashboard">Login</Link></button>
            <button id='btnReg'><b>Register</b></button>
        </div>
      </div>
    );
  }
}

export default LandingPage;