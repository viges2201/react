import React from 'react';
import { Button, Input } from '@material-ui/core';

export  default class MessageInput extends React.Component {

  state = {
    text : ''
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
    this.props.onAddMessage(newItem);
    this.setState(state => ({
      text: ''
    }));
  };

  render() {
    return (
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
      </form>)
    }
  }
