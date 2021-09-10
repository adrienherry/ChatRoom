import { SEND_MESSAGE, WS_CONNECT, saveReceivedMessage } from '../actions';

let socket;

const chatSocketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      socket = window.io('http://localhost:3001');
      socket.on('propagate_message', (message) => {
        store.dispatch(saveReceivedMessage(message));
      });
      break;
    case SEND_MESSAGE: {
      const { currentMessage, username } = store.getState();
      socket.emit('send_message', { textContent: currentMessage, author: username });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default chatSocketMiddleware;
