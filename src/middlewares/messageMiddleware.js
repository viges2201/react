import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";

export default store => next => (action) => {
   switch (action.type) {
       case SEND_MESSAGE:
           if (action.sender === 'me') {
             console.log(store.getState());
               // setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messageReducer.messages).length + 2,
               //         'Не приставай ко мне, я робот!', 'bot', action.chatId)), 1000)
           }
   }
   return next(action)
}
