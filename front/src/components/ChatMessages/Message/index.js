import PropTypes from 'prop-types';
import classnames from 'classnames';
import './message.scss';

const Message = ({ author, textContent, isMine }) => {
  const className = classnames('message', { 'message--mine': isMine });
  return (
    <li className={className}>
      <div className="message__user-name">
        {author}
      </div>
      <div className="message__content">
        {textContent}
      </div>
    </li>
  );
};
Message.propTypes = {
  author: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default Message;
