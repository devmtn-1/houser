import React, { Component } from 'react';
import '../styles/WizardOne.css';
import NavBar from './NavBar';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

class WizardTwo extends Component {
  constructor(){
    super();
    this.state={
      listingId: 0,
      address: '',
      city: '',
      state: '',
      zip: ''
    }
    this.addW2 = this.addW2.bind(this);
  }

  addW2(){
    axios.post('/addAddress').then(res => {
      console.log(res);
      this.setState({
        address: res.data.address,
        city: res.data.city,
        state: res.data.state,
        zip: res.data.zip
      })
    })
  }

  render() {
    const {address, city, state, zip} = this.state;
    
    return (
      <div className="WizardOne">
      <NavBar/>
      <div className='container'>
      <div className='heading'>
        <h3>Add New Listing</h3>
      </div>
      <div className='inputAddressDetails'>
        <h5>Address</h5>
        <input 
        value={address}
        />
      </div>
      <div className='inputAddressDetails'>
        <h5>City</h5>
        <input 
        value={city}
        />
        <h5>State</h5>
        <input 
        value={state}
        />
      </div>
      <div className='inputAddressDetails'>
        <h5>Zip</h5>
        <input 
        value={zip}
        />
      </div>

      <button className='prevStep'>Previous Step</button>
      <button onClick={this.addW2} className='nextStep'>Next Step</button>
      </div>
      </div>
    );
  }
}

export default WizardTwo;