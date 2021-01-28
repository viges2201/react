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

  const handleAddMessage = useCallback((text, author='me', id = Date.now()) => {
    setMessages((oldMessages) => ([...oldMessages, { id, text, author}]));
  },[]); // Пока не получилось сделать

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
