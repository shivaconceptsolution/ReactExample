import React from 'react';
class SICalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state1 = {value1: ''};
    this.state2 = {value2: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
      }
   handleChange1(event) {
    this.setState({value1: event.target.value});
      } 
     handleChange2(event) {
    this.setState({value2: event.target.value});
      }   

  handleSubmit(event) {
    this.si = (parseFloat(this.state.value)*parseFloat(this.state.value1)*parseFloat(this.state.value2))/100;
    alert('Result is  ' +this.si);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          P:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </p>
       
         <p>
          R:
          <input type="text" value={this.state.value1} onChange={this.handleChange1} />
        </p>
        
        <p>
          T:
          <input type="text" value={this.state.value2} onChange={this.handleChange2} />
        </p>
       
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SICalc;