import axios from 'axios';
import {
  LOGIN, connectUser, getAllMessages, setUserColor,
} from '../actions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = store.getState();
      axios
        .post('http://localhost:3001/login', {
          email: email,
          password: password,
        })
        .then(
          (response) => {
            store.dispatch(connectUser(response.data.pseudo));
            axios
              .get('http://localhost:3001/messages')
              .then(
                (response2) => {
                  store.dispatch(getAllMessages(response2.data.messages));
                },
              );
            axios
              .get(`http://localhost:3001/theme/${email}`)
              .then(
                (response3) => {
                  store.dispatch(setUserColor(response3.data.color));
                },
              );
          },
        ).catch(
          (error) => console.log(error, 'error'),
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default authMiddleware;
