import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import ListObject from './components/ListObject';
//import NameForm from './components/NameForm';
//import SICalc from './components/SICalc';
import ListWithRemoveItem from './components/ListWithRemoveItem';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ListWithRemoveItem />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
