// == Import
import './app.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatMessages from '../ChatMessages';
import ChatInput from '../ChatInput';
import Settings from '../Settings';
import ConnexionMessage from '../ConnexionMessage';
import { wsConnect } from '../../actions';
// == Composant
const App = () => {
  const connected = useSelector((state) => state.connected);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wsConnect());
  }, []);

  const userColor = useSelector((state) => state.userColor);

  return (
    <div className="app" style={connected ? { backgroundColor: userColor } : { backgroundColor: '#BDDCF0' }}>
      {connected && (
      <div>
        <ChatMessages />
        <ChatInput />
      </div>
      )}
      <Settings />
      {!connected && <ConnexionMessage />}
    </div>
  );
};

// == Export
export default App;
