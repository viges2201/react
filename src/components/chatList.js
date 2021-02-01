import React from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom';
import { TextField} from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from "prop-types";
import { addChat } from '../actions/chatActions';

class ChatList extends React.Component {
  static propTypes = {
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired,
  };

  state = {
    input: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) { // Enter
      this.handleAddChat();
    }
  };

  handleAddChat = () => {
    if (this.state.input.length > 0) {
      this.props.addChat(this.state.input);
      this.setState({ input: '' });
    }
  };



  render() {
    const { chats } = this.props;
    const chatElements = Object.keys(chats).map(chatId => (
      <Link key={ chatId } to={ `/chat/${chatId}` }>
        <ListItemText primary={ chats[chatId].title }/>
      </Link>));
      return (
        <List>
          { chatElements }
          <ListItem
            key="Add new chat"
            onClick={ this.handleAddChat }
            style={ { height: '60px' } }
            children= {<TextField
              key="textField"
              fullWidth
              name="input"
              text="Добавить новый чат"
              onChange={ this.handleChange }
              value={ this.state.input }
              onKeyUp={ this.handleKeyUp }
              />}
              />
          </List>
        )
      }
    }

    const mapStateToProps = ({ chatReducer }) => ({
       chats: chatReducer.chats,
    });

    const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

    export default connect(mapStateToProps, mapDispatchToProps)(ChatList);

    // import ListItem from '@material-ui/core/ListItem';
    // import ListItemText from '@material-ui/core/ListItemText';
    // import { TextField} from '@material-ui/core';
    // import AddIcon from '@material-ui/icons/Add'
    // import PropTypes from "prop-types";
    // import ContentSend from 'material-ui/svg-icons/content/send';
    // import ListItemIcon from '@material-ui/core/ListItemIcon';
