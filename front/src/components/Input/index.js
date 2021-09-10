import './input.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from '../../actions';

const Input = ({
  fieldName, type, placeholder,
}) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state[fieldName]);
  const handleChange = (event) => {
    dispatch(changeValue(event.currentTarget.value, fieldName));
  };
  return (
    <input
      type={type}
      className="settings__form-element"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
