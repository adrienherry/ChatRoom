/* eslint-disable arrow-body-style */
import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import Message from './Message';
import './chat-messages.scss';

const ChatMessages = () => {
  const messages = useSelector((state) => state.messages);
  const username = useSelector((state) => state.username);

  const bottomPage = useRef();
  useEffect(() => {
    bottomPage.current.scrollIntoView();
  }, [messages]);
  return (
    <div className="chat-messages">
      <ul className="chat-messages__list">
        {messages.map(
          (message) => (
            <Message
              {...message}
              key={message.id}
              isMine={username === message.author}
            />
          ),
        )}
        <span ref={bottomPage} />
      </ul>
    </div>
  );
};

export default ChatMessages;
