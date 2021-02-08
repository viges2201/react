import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import Message from './message';
import { TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DraftsIcon from '@material-ui/icons/Drafts';
import CircularProgress from '@material-ui/core/CircularProgress';
import { sendMessage } from '../../actions/messageActions';
import { loadChats } from '../../actions/chatActions';

class MessageField extends React.Component {
  static propTypes = {
    chatId: PropTypes.number.isRequired,
    messages: PropTypes.object.isRequired,
    chats: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  state = {
    input: '',
  };

  componentDidMount() {
    this.props.loadChats();
  };

  handleSendMessage = (message, sender) => {
    if (this.state.input.length > 0 || sender === 'bot') {
      this.props.sendMessage(message, sender);
    }
    if (sender === 'me') {
      this.setState({ input: '' });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) { // Enter
      this.handleSendMessage(this.state.input, 'me');
    }
  };

  render() {
    if (this.props.isLoading) {
      return <CircularProgress />
    }

    const { chatId, messages, chats } = this.props;

    const messageElements = chats[chatId].messageList.map(messageId => (
      <Message
        key={ messageId }
        text={ messages[messageId].text }
        sender={ messages[messageId].sender }
        />));

        return [
          <div key='messageElements' className="message-field">
            { messageElements }
          </div>,
          <div key='textInput' style={ { width: '100%', display: 'flex' } }>
            <TextField
              name="input"
              fullWidth={ true }
              label="Введите сообщение"
              style={ { fontSize: '22px' } }
              onChange={ this.handleChange }
              value={ this.state.input }
              onKeyUp={ this.handleKeyUp }
              />
            <Button
              color="primary"
              endIcon={<DraftsIcon fontSize= 'large'/>}
              onClick={ () => this.handleSendMessage(this.state.input, 'me') }>
            </Button>
          </div>
        ]
      }
    }

    const mapStateToProps = ({ chatReducer, messageReducer }) => ({
      chats: chatReducer.chats,
      messages: messageReducer.messages,
      isLoading: messageReducer.isLoading,
    });

    const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadChats }, dispatch);

    export default connect(mapStateToProps, mapDispatchToProps)(MessageField);

    // <form className = 'messageInput' onSubmit={handleSubmit}>
    // <TextField
    //   type="text"
    //   onChange={ this.handleChange }
    //   value={ this.state.input }
    //   onKeyUp={ this.handleKeyUp }
    //   />
    // </form>
