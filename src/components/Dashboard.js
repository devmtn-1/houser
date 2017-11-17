import React, { Component } from 'react';
import '../styles/Dashboard.css';
import NavBar from './NavBar';
import { Route, Switch, Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <NavBar />
        <div className='container'>
          <button className='buttonMain'><Link className='linkBtn' to="/wizard/1">Add New Property</Link></button>
          <div className='inputSection'>
            <p>List properties with "desired rent" greator than: $</p>
            <input className='inputPrice' />
            <button className='filterBtn'>Filter</button>
            <button className='resetBtn'>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;