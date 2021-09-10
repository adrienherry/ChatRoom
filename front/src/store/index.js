import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import debugMiddleware from '../middlewares/debug';
import authMiddleware from '../middlewares/auth';
import chatSocketMiddleware from '../middlewares/chatSocket';

const middlewares = [debugMiddleware, authMiddleware, chatSocketMiddleware];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
