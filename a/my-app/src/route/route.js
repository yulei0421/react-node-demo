import React, { Component } from 'react';
import {Route,Redirect,Switch,HashRouter} from 'react-router-dom';

import Home from '../home/home';
import City from '../city/city'
import Nav from '../nav/nav'
import reactCeshi from '../testreact/index'


class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/city' component={City}/>
        <Route path='/nav' component={Nav}/>
        <Route path='/reactCeshi' component={reactCeshi}/>
        </Switch>
      </div>
    );
  }
}

export default App;
