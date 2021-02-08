import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import MessageField from './message/messageField';
import ChatList from './chatList';
import Header from './header';
import '../styles/layout.css';
import { sendMessage } from "../actions/messageActions";


class Layout extends React.Component {
   static propTypes = {
       chatId: PropTypes.number,
       sendMessage: PropTypes.func.isRequired,
   };

   static defaultProps = {
       chatId: 1,
   };

   state = {
       messages: {
           // 1: { text: "Привет!", sender: 'bot' },
           // 2: { text: "Здравствуйте!", sender: 'bot' },
       },
   };

   sendMessage = (message, sender) => {
       const { messages } = this.state;
       const { chatId } = this.props;

       const messageId = Object.keys(messages).length + 1;
       this.setState({
           messages: {...messages,
               [messageId]: {text: message, sender: sender}},
       });
       this.props.sendMessage(messageId, message, sender, chatId);
   };


   render() {
       return (
           <div className="layout">
               <Header chatId={ this.props.chatId } />
               <div className="layout-canvas">
                   <div className="layout-left-side">
                       <ChatList />
                   </div>
                   <div className="layout-right-side">
                       <MessageField
                           chatId={ this.props.chatId }
                           messages={ this.state.messages }
                           sendMessage={ this.sendMessage }
                       />
                   </div>
               </div>
           </div>
       )
   }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
