import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Hoc from '../pages/hoc/index'
import Class from '../pages/studentClass/index'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/hoc' component={Hoc} />
          <Route path='/Class' component={Class} />
        </Switch>
      </div>
    );
  }
}

export default App;
