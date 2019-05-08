import React, { Component } from 'react';

class Todo extends Component {
    state = {
    edit: false,
    id: null,
    mockData: [
    {id:'1',title:'abc',branch:'cs',fees:12000,done:false,date:new Date()}]
  }

onSubmitHandle(event) {
  event.preventDefault();

  this.setState({
    mockData: [...this.state.mockData, {
        id: event.target.rno.value,
        title: event.target.item.value,
        branch:event.target.branch.value,
        fees:event.target.fees.value,
        done: false,
        date: new Date()
    }]
  });

  event.target.item.value = '';
  event.target.rno.value = '';
  event.target.branch.value = '';
  event.target.fees.value = '';
}
onDeleteHandle() {
  let id = arguments[0];

  this.setState({
    mockData: this.state.mockData.filter(item => {
      if (item.id !== id) {
        return item;
      }
      return null;
    })
  });
}

renderEditForm() {
    if (this.state.edit) {
      return <form onSubmit={this.onUpdateHandle.bind(this)}>
         <input type="text" name="updatedItem" defaultValue={this.state.id}  className="item" />
        <input type="text" name="updatedItem1" defaultValue={this.state.title}  className="item" />
         <input type="text" name="updatedItem2" defaultValue={this.state.branch} className="item" />
          <input type="text" name="updatedItem3"  defaultValue={this.state.fees} className="item" />
       
        <button className="update-add-item">Update</button>
      </form>
    }
  }
onEditHandle(event) {
  this.setState({
    edit: true,
    id: arguments[0],
    title: arguments[1],
    branch:arguments[2],
    fees:arguments[3]
  });
}

onUpdateHandle(event) {
  event.preventDefault();

  this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === this.state.id) {
          item['title'] = event.target.updatedItem1.value;
           item['branch'] = event.target.updatedItem2.value;
            item['fees'] = event.target.updatedItem3.value;
          return item;
        }

        return item;
      })
   });

   this.setState({
      edit: false
   });
}
onCompleteHandle() {
    let id = arguments[0];

    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === id) {
          item['done'] = true;
          return item;
        }

      return item;
    })
  });
}
     render() {
  return (
    <div>
    {this.renderEditForm()}
      <form onSubmit={this.onSubmitHandle.bind(this)}>

       <input type="text" name="rno" placeholder="rno" className="item" />
        <input type="text" name="item" placeholder="name" className="item" />
         <input type="text" name="branch" placeholder="branch" className="item" />
          <input type="text" name="fees" placeholder="fees" className="item" />
        <button className="btn-add-item">Add </button>
      </form>
     

      <table border="1" cellpadding="0" cellspacing="0" align="center">
       <tr><th>RNO</th><th>Name</th><th>branch</th><th>Fees</th></tr>
        {this.state.mockData.map(item => (
          

          <tr key={item.id}>
          <td> {item.id} </td>
           <td> {item.title} </td>
           <td> {item.branch} </td>
           <td> {item.fees} </td>
            <td><button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button></td>
            <td> <button onClick={this.onEditHandle.bind(this, item.id, item.title,item.branch,item.fees)}>Edit</button></td>
            <td><button className={ item.done ? 'done' : 'hidden' } onClick={this.onCompleteHandle}>Complete</button></td>
            
            </tr>  
            
         
          
        ))}
      </table>
    </div>
  );
}
  }

export default Todo;