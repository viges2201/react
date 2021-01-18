import React from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter : 0,
      arr : ["Hello", "It's React!","All done!"]
    };
  };


  increase = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  };

  decrease = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }))
  };

  reset = () => {
    this.setState({
      counter: 0
    })
  };

  addWord = () => {
    this.setState(prevState => ({
      arr: prevState.arr.concat('Normal!')
    }))
  };

  render(){
    return (
      <div className="wrapper">
        <div>
          <span>{this.state.counter}</span>
          <button onClick={this.increase}>Increase</button>
          <button onClick={this.decrease}>Decrease</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <TodoList arr={this.state.arr}></TodoList>
        <button onClick={this.addWord}>Добавить слово в массив #{this.state.arr.length}</button>
      </div>


    );
  }
}

export default App;
