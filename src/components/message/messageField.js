import {useState, useCallback, useEffect} from 'react';
import Message from './message';
import MessageInput from './messageInput';

export default function MessageField ({chatId}) {

  const [chats, setChats] = useState({
    1: {title: 'Чат 1', messageList: [1]},
    2: {title: 'Чат 2', messageList: [2]},
    3: {title: 'Чат 3', messageList: []},
  });

  const [messages, setMessages] = useState({
    1: { text: "Привет!", sender: 'bot' },
    2: { text: "Здравствуйте!", sender: 'bot' },
  });

  const handleAddMessage = useCallback((message, sender='me') => {
    const messageId = Object.keys(messages).length + 1;
    setMessages((oldMessages) => ({...oldMessages,[messageId] : { text: message, sender}}));
    setChats((oldChats) => ({...chats,
      [chatId]: { ...chats[chatId],
        messageList: [...chats[chatId]['messageList'], messageId]
      }
    }
  ));
},[messages, chatId, chats]);

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
          key={ index }
          text={ messages[messageId].text }
          sender={ messages[messageId].sender }
          />))}
        </div>
        <MessageInput onAddMessage = {handleAddMessage}></MessageInput>
      </div>
    )
  }


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
