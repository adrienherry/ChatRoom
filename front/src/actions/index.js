export const SUBMIT_CHAT_FORM = 'SUBMIT_CHAT_FORM';

export const submitChatForm = (id) => ({
  type: SUBMIT_CHAT_FORM,
  id,
});

export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (value, fieldName) => (
  {
    type: CHANGE_VALUE,
    value,
    fieldName,
  }
);

export const CLICK_SETTINGS_BTN = 'CLICK_SETTINGS_BTN';

export const clickSettingsBtn = () => (
  {
    type: CLICK_SETTINGS_BTN,
  }
);

export const WS_CONNECT = 'WS_CONNECT';

export const wsConnect = () => (
  {
    type: WS_CONNECT,

  }
);

export const SAVE_RECEIVED_MESSAGE = 'SAVE_RECEIVED_MESSAGE';

export const saveReceivedMessage = (message) => (
  {
    type: SAVE_RECEIVED_MESSAGE,
    message,
  }
);

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = () => (
  {
    type: SEND_MESSAGE,

  }
);

export const LOGIN = 'LOGIN';

export const login = () => (
  {
    type: LOGIN,
  }
);

export const CONNECT_USER = 'CONNECT_USER';

export const connectUser = (username) => (
  {
    type: CONNECT_USER,
    username,
  }
);

export const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES';

export const getAllMessages = (messages) => (
  {
    type: GET_ALL_MESSAGES,
    messages,
  }
);

export const SET_USER_COLOR = 'SET_USER_COLOR';

export const setUserColor = (color) => (
  {
    type: SET_USER_COLOR,
    color,
  }
);
