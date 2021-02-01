import {useCallback, useEffect} from 'react';
import Message from './message';
import MessageInput from './messageInput';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

function MessageField ({chatId, chats, messages, sendMessage}) {

  const handleAddMessage = useCallback((message, sender='me') => {
    sendMessage(message, sender)
  },[ sendMessage]);

  useEffect(()=> {
    let timeout;
    if (Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
      timeout = setTimeout(() =>
      handleAddMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [messages, handleAddMessage]);

  return (
    <div className="layout">
      <div className="message-field">
        {chats[chatId].messageList.map((messageId, index) => (
          <Message
            key={ messageId }
            text={ messages[messageId].text }
            sender={ messages[messageId].sender }
            />))}
          </div>
          <MessageInput onAddMessage = {handleAddMessage}></MessageInput>
        </div>
      )
    }

    const mapStateToProps = ({ chatReducer }) => ({
       chats: chatReducer.chats,
    });

    const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

    export default connect(mapStateToProps, mapDispatchToProps)(MessageField);

    // const  renderMessage = useCallback((chatsmessages) => {
    //   return (
    //     <Message key = {messages.id}  text = {messages.text} sender = {messages.sender}></Message>
    //   )
    // }, []);

    // useEffect(()=> {
    //   let timeout;
    //   if (messages[messages.length - 1].sender !== 'robot') {
    //     timeout = setTimeout(() => {
    //       handleAddMessage('Привет, я робот!', 'robot')
    //     }, 1000);
    //   }
    //
    //   return () => {
    //     clearTimeout(timeout);
    //   }
    // }, [messages, handleAddMessage])
