import React from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import AddIcon from '@material-ui/icons/Add';
import { push } from 'connected-react-router';
import { TextField} from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from "prop-types";
import { addChat } from '../actions/chatActions';

class ChatList extends React.Component {
  static propTypes = {
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
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

  handleNavigate = (link) => {
    this.props.push(link);
  };


  render() {
    const { chats } = this.props;
    const chatElements = Object.keys(chats).map(chatId => (
      <ListItem button onClick={ () => this.handleNavigate(`/chat/${chatId}`) }  key={ chatId }>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={ chats[chatId].title } />
      </ListItem>));
      return (
        <List>
          { chatElements }
          <ListItem  >
            <ListItemIcon>
              <AddIcon onClick={ this.handleAddChat } fontSize= 'large'/>
            </ListItemIcon>
          </ListItem>
          <ListItem
            children= {<TextField
              key="textField"
              fullWidth
              name="input"
              label="Добавить новый чат"
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

    const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);

    export default connect(mapStateToProps, mapDispatchToProps)(ChatList);

    // import ListItem from '@material-ui/core/ListItem';
    // import ListItemText from '@material-ui/core/ListItemText';
    // import { TextField} from '@material-ui/core';
    // import AddIcon from '@material-ui/icons/Add'
    // import PropTypes from "prop-types";
    // import ContentSend from 'material-ui/svg-icons/content/send';
    // import ListItemIcon from '@material-ui/core/ListItemIcon';
