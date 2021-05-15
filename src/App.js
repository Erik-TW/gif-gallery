import './App.css';
import { useState } from 'react';
import Gallery from './components/Gallery';
import Searcher from './components/Searcher';
import { Route, useHistory } from "react-router-dom";
import axios from 'axios';
import Gif from "./components/GalleryGif";

const apiKey = process.env.REACT_APP_APIKEY;
const localStorage = window.localStorage;

const App = () => {
  const history = useHistory();
  const [gifUrl, setGifUrl] = useState('');
  const [gifTitle, setGifTitle] = useState('')
  const [gifs, setGifs] = useState([]);

  const startBtnHandler = () => {
    history.push('/search');
  }

  const saveClickHandler = () => {
    let tempGifs = [...gifs]
    tempGifs.push({ url: gifUrl, title: gifTitle })
    localStorage.setItem('gifs', JSON.stringify(tempGifs))
    setGifs(tempGifs);
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
        if (response.data.data) {
          setGifUrl(response.data.data.image_url)
          setGifTitle(response.data.data.title)
        }
        else {
          //do stuff if undefined
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (!gifUrl && !gifTitle) {
    apiCall();
  }

  if (gifs.length === 0) {
    let unparsedGifs = localStorage.getItem('gifs');
    console.log(unparsedGifs);
    const parsedGifs = JSON.parse(unparsedGifs);
    if (parsedGifs.length > 0) {
      setGifs(parsedGifs);
    }
  }

  let gifArray = [];
  for (let i = 0; i < gifs.length; i++) {
    let currentGif = <Gif url={gifs[i].url} key={i} title={gifs[i].title} delGif={() => deleteGifHandler(i)}></Gif>
    gifArray.push(currentGif);
  }

  const deleteGifHandler = (index) => {
    let tempGifArray = [...gifs];
    tempGifArray.splice(index, 1);
    localStorage.setItem('gifs', JSON.stringify(tempGifArray));
    setGifs(tempGifArray);
  }

  return (
    <div>
      <Route
        exact path='/'
        render={(props) => (
          <Gallery btnHandler={startBtnHandler} gifs={gifArray} />
        )}
      />
      <Route
        exact path='/search'
        render={(props) => (
          <Searcher
            gifUrl={gifUrl}
            gifTitle={gifTitle}
            nextClick={apiCall}
            saveClick={saveClickHandler}
          />
        )}
      />

    </div>
  );
}


export default App;
