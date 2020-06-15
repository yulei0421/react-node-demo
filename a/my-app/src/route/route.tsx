import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import Hoc from '../pages/hoc/index'
// import Class from '../pages/studentClass/index'
const Hoc = React.lazy(() => import('../pages/hoc/index'));
const Class = React.lazy(() => import('../pages/studentClass/index'));
const antdTv = React.lazy(() => import('../pages/antdTv/index'));

class App extends Component {
    render() {
        return (
            <div className="App">
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        {/* <Redirect path='/Class' to='/Class'/> */}

                        <Route path="/hoc" component={Hoc} />
                        <Route path="/Class" component={Class} />
                        <Route path="/antdTv" component={antdTv} />
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

export default App;
