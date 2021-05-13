import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Game from './components/Game';
import { Route, useHistory } from "react-router-dom";


const App = () => {

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [currentScore, setCurrentScore] = useState(0);
  const [gifUrl1, setGifUrl1] = useState('');
  const [gifUrl2, setGifUrl2] = useState('');

  const usernameListener = (e) => {
    setUsername(e.target.value)
  }

  const handleStartBtn = () => {
    if (username) {
      history.push('/game');
      console.log('U DID UT')
    }
    else {
      window.alert('Please enter your username')
    }
  }

  return (
    <div>
      <Route
        exact path='/'
        render={(props) => (
          <Login usernameListener={usernameListener} btnHandler={handleStartBtn} username={username} />
        )}
      />
      <Route
        exact path='/game'
        render={(props) => (
          <Game username={username} />
        )}
      />

    </div>
  );
}


export default App;
