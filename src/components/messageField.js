import React from 'react';
import Message from './message';
import { Button, Input } from '@material-ui/core';
export default class MessageField extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [{ text: "Привет!", id:1, author: 'robot' }, { text: "Как дела?", id:2, author: 'robot' }], text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  componentDidUpdate() {
    if (this.state.items[this.state.items.length - 1].author === 'me') {
      setTimeout(() =>
      this.setState({
        items: [...this.state.items, {text:'Привет, я робот!', id: Date.now(), author: 'robot'}]
      }),1000);
    }
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
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

    return  <div className="layout">
      <div className="message-field">
        { messageField }
      </div>
      <form onSubmit={this.handleSubmit}>
        <Input
          style={ { fontSize: '22px' } }
          onChange={this.handleChange}
          value={this.state.text}
          />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          >
          Отправить сообщение
        </Button>
      </form>
    </div>
  }
}
