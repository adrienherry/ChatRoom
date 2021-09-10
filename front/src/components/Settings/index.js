/* eslint-disable jsx-a11y/control-has-associated-label */
import './settings.scss';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../Input';
import {
  clickSettingsBtn, login,
} from '../../actions';

const Settings = () => {
  const isSettingsOpen = useSelector((state) => state.isSettingsOpen);
  const dispatch = useDispatch();

  const handleSubmitSettings = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  const handleClickBtnSettings = () => {
    dispatch(clickSettingsBtn());
  };

  return (
    <div className={isSettingsOpen ? 'settings' : 'settings settings__hidden'}>
      <button type="button" className={isSettingsOpen ? 'settings__close-open-btn' : 'settings__close-open-btn settings__close-open-btn--hidden'} onClick={handleClickBtnSettings}>
        <div className="settings__close-open-btn--x" />
        <div className="settings__close-open-btn--y" />
      </button>
      <form className="settings__form" onSubmit={handleSubmitSettings}>
        <Input type="text" placeholder="Email" fieldName="email" />
        <Input type="password" placeholder="Mot de passe" fieldName="password" />
        <button type="submit" className="settings__send-btn settings__form-element">Envoyer</button>
      </form>
    </div>
  );
};

export default Settings;
