// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  chatReducer,
  messageReducer,
})
export default createRootReducer
