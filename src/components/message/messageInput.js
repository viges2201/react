import {useState, useCallback} from 'react';
import { Button, Input } from '@material-ui/core';
import PropTypes from 'prop-types';

export  default function MessageInput({onAddMessage}){
  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  },[]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (value.length === 0) {
      return;
    }
    onAddMessage(value);
    setValue('')
  },[onAddMessage, value]);

  return (
    <form className = 'messageInput' onSubmit={handleSubmit}>
      <Input
        type="text"
        onChange={handleChange}
        value={value}
        />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        >
        Отправить сообщение
      </Button>
    </form>
  )
}

MessageInput.propTypes = {
  onAddMessage: PropTypes.func.isRequired
}

// state = {
//   text : ''
// };
//
// handleChange = (e) => {
//   this.setState({ text: e.target.value });
// };
//
// handleSubmit = (e) => {
//   e.preventDefault();
//   if (this.state.text.length === 0) {
//     return;
//   }
//   const newItem = {
//     text: this.state.text,
//     id: Date.now(),
//     author: 'me'
//   };
//   this.props.onAddMessage(newItem);
//   this.setState(state => ({
//     text: ''
//   }));
// };
//
// render() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//     <Input
//     style={ { fontSize: '22px' } }
//     onChange={this.handleChange}
//     value={this.state.text}
//     />
//     <Button
//     variant="contained"
//     color="primary"
//     type="submit"
//     >
//     Отправить сообщение
//     </Button>
//     </form>)
//   }
// }
