import React, { Component } from 'react';
import './styles/App.css';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import WizardOne from './components/WizardOne';
import WizardTwo from './components/WizardTwo';
import {Route, Switch, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/wizard/1" component={WizardOne}/>
            <Route path="/wizard/2" component={WizardTwo}/>
          </Switch>
      </div>
    );
  }
}

export default App;
