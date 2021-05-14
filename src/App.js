import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Game from './components/Game';
import { Route, useHistory } from "react-router-dom";
import axios from 'axios';

const apiKey = process.env.REACT_APP_APIKEY;

const App = () => {
  console.log(apiKey);

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [leftGifUrl, setLeftGifUrl] = useState('https://media4.giphy.com/media/3oKHWqehR2rZEe0exG/giphy.gif');
  const [rightGifUrl, setRightGifUrl] = useState('https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif?cid=ecf05e47fbf83359c06d2c4ffc32eff9fda4b766bc6f2e54&rid=giphy.gif&ct=g');
  const [leftGifRating, setLeftGifRating] = useState(0);
  const [rightGifRating, setRightGifRating] = useState(0);
  const [score, setScore] = useState(0);

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

  const leftGifClickedHandler = () => {
    if(leftGifRating >= rightGifRating) {
      //do win stuff
      setScore(score + 1 );
    }
    else {
      window.alert("you lost")
      setScore(0);
    }
  }

  const rightGifClickedHandler = () => {
    if(rightGifRating >= leftGifRating) {
      apiCall();
      //do win stuff
      setScore(score + 1 );
    }
    else {
      window.alert("you lost")
      setScore(0);
    }
  }

  const apiCall = async () => {
    let headers = {
      params: {
        apikey: apiKey,
        limit: 250
      }
    }
    axios.get("https://api.giphy.com/v1/gifs/random", headers)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
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
          <Game 
          username={username}
          leftClick={leftGifClickedHandler}
          rightClick={rightGifClickedHandler}
          leftUrl={leftGifUrl}
          rightUrl={rightGifUrl}
          score={score}
          />
        )}
      />

    </div>
  );
}


export default App;
