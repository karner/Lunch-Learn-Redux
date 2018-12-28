import React, { Component } from 'react';
import Map from '../../Components/Map';
import ClassificationComponent from '../Classification';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassificationComponent style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', zIndex: '10'}} />
        <Map style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', zIndex: '-1000'}} />
      </div>
    );
  }
}

export default App;
