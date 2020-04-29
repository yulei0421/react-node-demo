import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import Home from '../home/home';
import City from '../city/city'
import Nav from '../nav/nav'
import reactCeshi from '../testreact/index'
import Hoc from '../hoc/index'


class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/city' component={City}/>
          <Route path='/nav' component={Nav}/>
          <Route path='/hoc' component={Hoc}/>
          <Route path='/reactCeshi' component={reactCeshi}/>
        </Switch>
      </div>
    );
  }
}

export default App;
