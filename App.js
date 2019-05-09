import React, { Component } from 'react';

import './App.css';

 
import Todo from './components/Todo';
import SICalc from './components/SICalc';
import NameForm from './components/NameForm'
import Calculator from './components/Calculator'
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

          <Todo />
          <SICalc />
         <NameForm /> 
          <Calculator /> 
      </div>
    );
  }
}

export default App;