import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import'./components/Wel.css';
//import Dom from "./components/Dom"
import * as serviceWorker from './serviceWorker';
//import Welcome from "./components/Welcome";
import Api from "./components/api";


ReactDOM.render(
  <React.StrictMode>
    <Api />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
