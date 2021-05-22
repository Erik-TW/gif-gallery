import './App.css';
import { useState } from 'react';
import Gallery from './components/Gallery';
import Searcher from './components/Searcher';
import { Route, useHistory } from "react-router-dom";
import axios from 'axios';
import GalleryGif from "./components/GalleryGif";
import Gif from "./components/Gif";
import Navbar from './components/Navbar';

const apiKey = process.env.REACT_APP_APIKEY;
const localStorage = window.localStorage;

const App = () => {
  const history = useHistory();
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [trendToggle, setTrendToggle] = useState(false);
  const [navSearch, setNavGallery] = useState(window.location.href.includes("search"));


  const startBtnHandler = () => {
    history.push('/search');
  }

  const saveClickHandler = (obj) => {
    let tempGifs = [...gifs]
    let exists = false;
    for(let i = 0; i < tempGifs.length; i++) {
      if(tempGifs[i].id === obj.id) {
        exists = true;
      }
    }
    if(exists === false) {
      tempGifs.push({id: obj.id, url: obj.url, title: obj.title, trending: obj.trending })
      localStorage.setItem('gifs', JSON.stringify(tempGifs))
      setGifs(tempGifs);
    }
  }

  const searchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
  }

  const filterQueryHandler = (e) => {
    setFilterQuery(e.target.value);
  }

  const trendToggleHandler = (e) => {
    setTrendToggle(e.currentTarget.checked)
  }

  const apiSearch = async () => {
    let headers = {
      params: {
        api_key: apiKey,
        q: searchQuery,
        limit: 49
      }
    }
    axios.get("https://api.giphy.com/v1/gifs/search", headers)
      .then((response) => {
        setSearchResults([])
        console.log(response)
        let data = response.data.data;
        if (data) {
          let results = []
          for (let i = 0; i < data.length; i++) {
            let entry = {
              id: data[i].id,
              url: data[i].images.original.url,
              title: data[i].title,
              trending: Date.parse(data[i].trending_datetime)
            }
            results.push(entry);
          }
          setSearchResults(results);
        }
        else {
          //do stuff if undefined
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const apiGetRandom = async () => {
    let headers = {
      params: {
        apikey: apiKey,
      }
    }
    axios.get("https://api.giphy.com/v1/gifs/random", headers)
      .then((response) => {
        setSearchResults([])
        console.log(response)
        let data = response.data.data;
        if (data) {
          let results = []
          let entry = {
            id: data.id,
            url: data.image_url,
            title: data.title,
            trending: Date.parse(data.trending_datetime)
          }
          results.push(entry);
          setSearchResults(results);
        }
        else {
          //do stuff if undefined
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  if (gifs.length === 0) {
    let unparsedGifs = localStorage.getItem('gifs');
    console.log(unparsedGifs);
    const parsedGifs = JSON.parse(unparsedGifs);
    if (parsedGifs != null) {
      if (parsedGifs.length > 0) {
        setGifs(parsedGifs);
      }
    }
  }

  let gifArray = [];
  for (let i = 0; i < gifs.length; i++) {

    if (filterQuery.length === 0 || gifs[i].title.toLowerCase().includes(filterQuery.toLowerCase())) {
      if (trendToggle && gifs[i].trending) {
        let currentGif = <GalleryGif url={gifs[i].url} key={i} title={gifs[i].title} delGif={() => deleteGifHandler(i)}></GalleryGif>
        gifArray.push(currentGif);
      }
      else if (!trendToggle) {
        let currentGif = <GalleryGif url={gifs[i].url} key={i} title={gifs[i].title} delGif={() => deleteGifHandler(i)}></GalleryGif>
        gifArray.push(currentGif);
      }

    }
  }

  const deleteGifHandler = (index) => {
    let tempGifArray = [...gifs];
    tempGifArray.splice(index, 1);
    localStorage.setItem('gifs', JSON.stringify(tempGifArray));
    setGifs(tempGifArray);
  }

  let renderedGifs = [];

  for (let i = 0;  i< searchResults.length; i++) {
    let index = searchResults[i];
    let exists = false;
    for(let j = 0; j < gifs.length; j++) {
      console.log(index.id, gifs[j].id)
      if(index.id === gifs[j].id) {
        console.log("exists = true")
        exists = true;
      }
    }
    
    renderedGifs.push(
      <Gif
        url={index.url}
        title={index.title}
        rating={index.rating}
        onClick={() => saveClickHandler(index)}
        key={i}
        gifSaved={exists}
      />
    )
  }

  return (
    <div>
      <Navbar searchSelected={navSearch}/>
      <Route
        exact path='/'
        render={(props) => (
          <Gallery
            btnHandler={startBtnHandler}
            gifs={gifArray}
            filterHandler={filterQueryHandler}
            searchButtonHandler={apiSearch}
            filterQuery={filterQuery}
            trendToggleHandler={trendToggleHandler}
          />
        )}
      />
      <Route
        exact path='/search'
        render={(props) => (
          <Searcher searchQueryHandler={searchQueryHandler} searchBtnHandler={apiSearch} randomBtnHandler={apiGetRandom}>
            {renderedGifs}
          </Searcher>
        )}
      />

    </div>
  );
}


export default App;
