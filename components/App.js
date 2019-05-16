import React, { Component } from 'react';

import './App.css';

 import FetchDemo from './components/FetchDemo'
//import Todo from './components/Todo';
//import SICalc from './components/SICalc';
//import NameForm from './components/NameForm'
//import Calculator from './components/Calculator'
//import FilterableProductTable from './components/FilterableProductTable'

class App extends Component {

constructor(props) {
    super(props);

this.state = {
      show: false
    };
  }

render() {
    // use Todo component inside render method.
    return (
      <div className="App">
      <FetchDemo subreddit="reactjs"/>
    
         
      </div>
    );
  }
}

export default App;