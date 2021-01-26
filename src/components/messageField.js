import React from 'react';
import Message from './message';
import MessageInput from './messageInput';
export default class MessageField extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [{ text: "Привет!", id:1, author: 'robot' }, { text: "Как дела?", id:2, author: 'robot' }], text: '' }
  };


  componentDidUpdate() {
    if (this.state.items[this.state.items.length - 1].author === 'me') {
      setTimeout(() =>
      this.setState({
        items: [...this.state.items, {text:'Привет, я робот!', id: Date.now(), author: 'robot'}]
      }),1000);
    }
  };

  handleAddMessage = (item) => {
    this.setState(state => ({
      items: state.items.concat(item)
    }));
  };

  renderMessage = (message) => {
    return (
      <Message key= {message.id}  text = {message.text} author = {message.author}></Message>
    )
  }

  render(){
    return (
      <div className="layout">
        <div className="message-field">
          {this.state.items.map(this.renderMessage)}
        </div>
        <MessageInput onAddMessage = {this.handleAddMessage}></MessageInput>
      </div>
    )
  }
}
