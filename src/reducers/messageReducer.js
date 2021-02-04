import update from 'react-addons-update';
import {SEND_MESSAGE} from '../actions/messageActions';

const initialStore = {
   messages: {}
};

export default function messageReducer(store = initialStore, action) {
  console.log(action);
   switch (action.type) {
       case SEND_MESSAGE: {
           return update(store, {
               messages: { $merge: { [action.messageId]: {text: action.text, sender: action.sender} } },
           });
       }
       default:
           return store;
   }
}
