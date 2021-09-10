/* eslint-disable jsx-a11y/control-has-associated-label */
import { useDispatch, useSelector } from 'react-redux';
import { Send } from 'react-feather';
import { changeValue, sendMessage } from '../../actions';
import { useFocus } from '../../hooks/useFocus';
import './chat-input.scss';

const ChatInput = () => {
  const currentMessage = useSelector((state) => state.currentMessage);
  const dispatch = useDispatch();
  const inputRef = useFocus();
  return (
    <form
      className="chat__form"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(sendMessage());
      }}
    >
      <div className="chat">
        <input
          ref={inputRef}
          type="text"
          className="chat__input"
          placeholder="Saississez votre message ..."
          value={currentMessage}
          onChange={(event) => {
            dispatch(changeValue(event.currentTarget.value, 'currentMessage'));
          }}
        />
        <button type="submit" className="chat__button">
          <Send color="#5698CC" size={32} className="chat__send-btn" />
        </button>
      </div>
    </form>
  );
};
export default ChatInput;
