import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './route/route';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,HashRouter} from 'react-router-dom'
import Store from './stroes/index'
// import {Provider} from 'react-redux';
import './App.css';



ReactDOM.render(
    // <Provider store={Store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    // </Provider>
,
document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
