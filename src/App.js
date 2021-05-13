import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Gif from './components/Gif';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Gif/>
      <Gif/>
    </div>
  );
  }
}

export default App;
