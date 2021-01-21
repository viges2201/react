import React from 'react';
import Message from './message';

export default class MessageField extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  componentDidUpdate() {
    if (this.state.items.length % 2 === 1) {
      setTimeout(() =>
      this.setState({
        items: [...this.state.items, {text:'Привет, я робот!', id: Date.now(), author: 'robot'}]
      }),1000);
    }
  };

  handleChange(e) {
    this.setState({ text: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      author: 'me'
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  };

  render(){
    const messageField = this.state.items.map(item => (
      <Message key= {item.id}  text = {item.text} author = {item.author}></Message>
    ));

    return  <div align='center'>
    {messageField}

    <form onSubmit={this.handleSubmit}>
    <label>
    Введите ваше сообщение!
    </label>
    <input
    onChange={this.handleChange}
    value={this.state.text}
    />
    <button>
    Добавить #{this.state.items.length + 1}
    </button>
    </form>
    </div>
  }
}
