import {
  CHANGE_VALUE,
  SUBMIT_CHAT_FORM,
  CLICK_SETTINGS_BTN,
  SAVE_RECEIVED_MESSAGE,
  CONNECT_USER,
  SET_USER_COLOR,
} from '../actions';

const initialState = {
  messages: [],
  currentMessage: '',
  email: '',
  password: '',
  isSettingsOpen: true,
  username: '',
  connected: false,
  userColor: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_CHAT_FORM:
      return {
        ...state,
        messages: [...state.messages, {
          id: action.id,
          author: state.username,
          textContent: state.currentMessage,
        }],
        currentMessage: '',
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case CLICK_SETTINGS_BTN:
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen,
      };
    case CONNECT_USER:
      return {
        ...state,
        username: action.username,
        isSettingsOpen: false,
        email: '',
        password: '',
        connected: true,
      };
    case SAVE_RECEIVED_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.message],
        currentMessage: '',
      };
    }
    case SET_USER_COLOR:
      return {
        ...state,
        userColor: action.color,
      };
    default:
      return state;
  }
};

export default reducer;
