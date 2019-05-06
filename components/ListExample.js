import React from 'react';
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 10);
const listItems = doubled.map((number) =>
  <li>{number}</li>);
class ListExample extends React.Component
{


render(){
  return (
    
      
     <ul>{listItems}</ul>
    
  );
}
}

export default ListExample;
