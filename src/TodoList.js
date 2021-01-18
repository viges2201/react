import React from 'react';

export default class TodoList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.arr.map(item => (
          <li >{item}</li>
        ))}
      </ul>
    );
  }
}
