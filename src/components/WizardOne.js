import React, { Component } from 'react';
import '../styles/WizardOne.css';
import NavBar from './NavBar';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import completeImg from '../images/step_completed.png';
import activeImg from '../images/step_active.png';
import incompleteImg from '../images/step_inactive.png';

class WizardOne extends Component {
  constructor() {
    super();
    this.state = {
      listingId: 0,
      propertyName: '',
      propertyDesc: ''
    }
    this.addW1 = this.addW1.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
  }

  handleChangeName(e) {
    this.setState({
      propertyName: e.target.value
    })
    console.log(this.state.propertyName)
  }

  handleChangeDesc(e) {
    this.setState({
      propertyDesc: e.target.value
    })
    console.log(this.state.propertyDesc)
  }

  addW1() {
    axios.post('/addPropName', { name: this.state.propertyName, desc: this.state.propertyDesc }).then(res => {
      console.log(res);
      this.setState({
        propertyName: res.data.name,
        propertyDesc: res.data.desc
      })
      this.props.history.push('/Wizard/2');
    }).catch(
      console.log('error')
      )
  }

  render() {
    const { propertyDesc, propertyName } = this.state;

    return (
      <div className="WizardOne">
        <NavBar />
        <div className='container'>
          <div className='heading'>
            <h3>Add New Listing</h3>
          </div>
          <div className='step'>
            <h4>Step 1</h4>
          </div>
          <div className='progress'>
            <img src={activeImg} />
            <img src={incompleteImg} />
            <img src={incompleteImg} />
            <img src={incompleteImg} />
            <img src={incompleteImg} />
          </div>
          <div className='propname'>
            <h5>Property Name</h5>
            <input
              onChange={this.handleChangeName}
              value={propertyName}
            />
          </div>
          <div className='propDesc'>
            <h5>Property Description</h5>
            <input
              onChange={this.handleChangeDesc}
              value={propertyDesc}
            />
          </div>
          <button onClick={this.addW1} className='nextStep'>Next Step</button>
        </div>
      </div>
    );
  }
}

export default WizardOne;