import React, { Component } from 'react';
import '../styles/NavBar.css';
import {Link} from 'react-router-dom';
import house from '../images/header_logo.png'

class NavBar extends Component {
  render() {
    return (
      <div className="NavBarParent">
        <nav>
            <ul>
                <li><span><img src={house}/><b>Houser</b> Dashboard</span></li>
                <li><Link to="/">Log Out</Link></li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;