import React, { Component } from 'react';
import {Route,Redirect,Switch,HashRouter} from 'react-router-dom';
import './App.css';
import Home from './home/home';
import City from './city/city'
import Store from './stroes/index'
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/city' component={City}/>
        </Switch>
      </div>
    );
  }
}

export default App;
